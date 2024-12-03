import React, { useRef } from "react";
import * as tmImage from "@teachablemachine/image";
import { ButtonCreate, ButtonDelete } from "components/Button";
import { FileSearchOutlined } from "@ant-design/icons";

const ViewIdentifi: React.FC = () => {
  // Khai báo kiểu an toàn cho các ref
  const webcamRef = useRef<HTMLDivElement | null>(null);
  const labelContainerRef = useRef<HTMLDivElement | null>(null);

  const URL = "https://teachablemachine.withgoogle.com/models/BVACd4Igo/";

  // Biến toàn cục với kiểu dữ liệu chính xác
  let model: tmImage.CustomMobileNet | null = null;
  let webcam: tmImage.Webcam | null = null;
  let maxPredictions: number = 0;
  let lastLabel: string = "";
  let isRunning: boolean = false;

  // Hàm khởi tạo
  const init = async () => {
    lastLabel = "";
    try {
      const modelURL = `${URL}model.json`;
      const metadataURL = `${URL}metadata.json`;

      // Tải model và metadata
      model = await tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();

      // Thiết lập webcam
      const flip = true;
      webcam = new tmImage.Webcam(100, 100, flip);
      await webcam.setup();
      await webcam.play();

      // Gắn canvas vào container
      if (webcamRef.current) {
        webcamRef.current.innerHTML = "";
        webcamRef.current.appendChild(webcam.canvas);
      }

      isRunning = true;
      loop();
    } catch (error) {
      console.error("Lỗi khi khởi tạo mô hình hoặc webcam:", error);
    }
  };

  // Hàm loop liên tục
  const loop = async () => {
    if (!isRunning || !webcam || !model) return;

    webcam.update();
    await predict();
    requestAnimationFrame(loop);
  };

  // Hàm dự đoán
  const predict = async () => {
    if (!isRunning || !webcam || !model) return;

    const predictions = await model.predictTopK(webcam.canvas, 1);
    const label = predictions[0].className;

    if (label !== lastLabel) {
      lastLabel = label;

      if (labelContainerRef.current) {
        labelContainerRef.current.innerText = label;
      }
    }
  };

  // Hàm dừng nhận diện
  const stop = () => {
    isRunning = false;

    if (webcam) {
      webcam.stop();
    }

    if (labelContainerRef.current) {
      labelContainerRef.current.innerText = "";
    }
  };

  return (
    <div className="container flex">
      <div>
        <div id="webcam-container" ref={webcamRef}></div>
        <div id="label-container" ref={labelContainerRef}></div>
      </div>
      <ButtonCreate
        onClick={init}
        title="Bắt đầu"
        icon={<FileSearchOutlined />}
      />
      <ButtonDelete title="Dừng" onClick={stop} />
    </div>
  );
};

export default ViewIdentifi;
