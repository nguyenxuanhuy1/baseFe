import React from "react";
import axios from "axios";

const PageUser = () => {
  const registerOrganization = (body: any) => {
    axios
      .get(`$adasd{}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("Registration successful");
        }
      })
      .catch((err) => {
        // Xử lý lỗi
        console.log("Error:", err?.response?.data?.message);
      });
  };

  return <div>page user</div>;
};

export default PageUser;
