import React, { useContext, useEffect, useRef, useState } from "react";
import * as tmImage from "@teachablemachine/image";
import { ButtonCreate, ButtonDelete, ButtonSearch } from "components/Button";
import { FileSearchOutlined, SearchOutlined } from "@ant-design/icons";
import { ButtonHTMLTypes } from "interfaces/common";
import { Form, Formik, FormikProps } from "formik";
import { FileContext } from "..";
import { initialValues } from "../helper/initialValues";

const SearchImg: React.FC = () => {
  const {} = useContext(FileContext);
  const formikRef = useRef<any>();
  // Khai báo kiểu an toàn cho các ref
  const webcamRef = useRef<HTMLDivElement | null>(null);
  const labelContainerRef = useRef<HTMLDivElement | null>(null);

  const URL = "https://teachablemachine.withgoogle.com/models/BVACd4Igo/";

  // Biến toàn cục với kiểu dữ liệu chính xác
  let model: tmImage.CustomMobileNet | null = null;
  let webcam: tmImage.Webcam | null = null;
  let lastLabel: string = "";
  let isRunning: boolean = false;

  const [dataSearch, setDataSearch] = useState<any>(null);

  // Kích hoạt quyền âm thanh
  const enableAudioContext = () => {
    const audioCtx = new (window.AudioContext || window.AudioContext)();
    audioCtx.resume();
  };

  // Hàm đọc nhãn (sử dụng Speech Synthesis API)
  const speakLabel = (label: string) => {
    speechSynthesis.cancel(); // Hủy đọc trước đó nếu có
    const utterance = new SpeechSynthesisUtterance(label);
    utterance.lang = "vi-VN"; // Ngôn ngữ có thể thay đổi
    speechSynthesis.speak(utterance);
  };

  // Hàm khởi tạo
  const init = async () => {
    enableAudioContext(); // Kích hoạt quyền âm thanh
    lastLabel = "";

    try {
      const modelURL = `${URL}model.json`;
      const metadataURL = `${URL}metadata.json`;

      // Tải model và metadata
      model = await tmImage.load(modelURL, metadataURL);
      // Thiết lập webcam
      const flip = true;
      webcam = new tmImage.Webcam(50, 50, flip);
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

  const [label, setLabel] = useState<string>("");
  // Hàm dự đoán
  const predict = async () => {
    if (!isRunning || !webcam || !model) return;

    const predictions = await model.predictTopK(webcam.canvas, 1);
    setLabel(predictions[0].className);
    if (label !== lastLabel) {
      lastLabel = label;

      if (labelContainerRef.current) {
        labelContainerRef.current.innerText = label;
      }
      // Đọc nhãn mới
      speakLabel(label);
      setDataSearch(label);
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
    speechSynthesis.cancel();
  };
  useEffect(() => {
    formikRef.current.setFieldValue("slug", label);
  }, [label]);
  return (
    <Formik
      onSubmit={(values) => {
        console.log("valuee", values);
      }}
      initialValues={initialValues}
      innerRef={formikRef}
    >
      {(propFormik: FormikProps<any>) => {
        return (
          <Form>
            <div className="container flex">
              <div>
                <div id="webcam-container" ref={webcamRef}></div>
                <div id="label-container" ref={labelContainerRef}></div>
              </div>

              <ButtonCreate
                onClick={init}
                title="Bắt đầu quét"
                icon={<FileSearchOutlined />}
              />
              <ButtonDelete title="Dừng" onClick={stop} />
              <ButtonSearch
                htmlType={ButtonHTMLTypes.Submit}
                icon={<SearchOutlined />}
              />
              <ButtonCreate
                onClick={() => {
                  // setItemTarget(null);
                  // setActions((prev: any) => {
                  //   return { ...prev, create: true };
                  // });
                }}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchImg;
