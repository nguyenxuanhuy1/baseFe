import { AliwangwangOutlined, LeftOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import BaseUrl from "../../constants/baseUrl";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "20px",
          display: "flex",
          alignItems: "center",
          fontSize: "25px",
          color: "#EE0000",
          cursor: "pointer",
          fontWeight: "600",
        }}
        onClick={() => navigate(BaseUrl.Pageuser)}
      >
        <LeftOutlined style={{ marginTop: "5px" }} />
        <span style={{ marginLeft: "5px" }}>Back to home</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "300px",
        }}
      >
        <div style={{ justifyContent: "center" }}>
          <AliwangwangOutlined
            style={{
              fontSize: "120px",
              color: "#EE0000",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          />
          <div
            style={{
              marginTop: "30px",
              color: "#EE0000",
              fontSize: "35px",
            }}
          >
            Page not found
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Page404);
