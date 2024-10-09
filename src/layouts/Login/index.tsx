import React, { createContext, useState } from "react";

// Định nghĩa FileContext
export const FileContext = createContext<any>(null);

const FileProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // Trạng thái xác thực
  const [user, setUser] = useState<any>(null);
  return (
    <FileContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      {children}
    </FileContext.Provider>
  );
};

export default FileProvider;
