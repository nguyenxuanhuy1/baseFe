import Login from "pages/Login";
import { createContext, useState } from "react";

export const FileContext = createContext<any>({
  isAuthenticated: false,
});
const QuanLyLogin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <FileContext.Provider value={{ isAuthenticated }}>
        <>
          <Login />
        </>
      </FileContext.Provider>
    </>
  );
};
