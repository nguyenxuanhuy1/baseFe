import React, { useRef, useEffect } from "react";
import * as tmImage from "@teachablemachine/image";
import { ButtonCreate, ButtonDelete } from "components/Button";
import { FileSearchOutlined } from "@ant-design/icons";

const ViewIdentifi = () => {
  const webcamRef = useRef(null);
  const labelContainerRef = useRef(null);
  const URL = "https://teachablemachine.withgoogle.com/models/BVACd4Igo/";

  let model, webcam, maxPredictions;
  let lastLabel = "";
  let isRunning = false;

  const init = async () => {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;
    webcam = new tmImage.Webcam(200, 200, flip);
    await webcam.setup();
    await webcam.play();

    webcamRef.current.appendChild(webcam.canvas);

    isRunning = true;
    loop();
  };

  const loop = async () => {
    if (!isRunning) return;
    webcam.update();
    await predict();
    requestAnimationFrame(loop);
  };

  const predict = async () => {
    if (!isRunning) return;

    const predictions = await model.predictTopK(webcam.canvas, 1);
    const label = predictions[0].className;

    if (label !== lastLabel) {
      lastLabel = label;
      labelContainerRef.current.innerText = label;
    }
  };

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
    <div className="container">
      <div>Nhận diện sản phẩm</div>
      <ButtonCreate
        onClick={init}
        title="Bắt đầu"
        icon={<FileSearchOutlined />}
      />
      <ButtonDelete title="Dừng" onClick={stop} />
      <div id="webcam-container" ref={webcamRef}></div>
      <div id="label-container" ref={labelContainerRef}></div>
    </div>
  );
};

export default ViewIdentifi;
