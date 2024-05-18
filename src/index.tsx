import App from "App";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./styles/styles.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthenticationProvider from "providers/AuthenticationProvider";
import { ConfigProvider } from "antd";
import { CustomizeTheme } from "theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthenticationProvider>
    <ConfigProvider theme={CustomizeTheme}>
      <App />
      <ToastContainer theme="light" />
    </ConfigProvider>
  </AuthenticationProvider>
);
