import React from "react";
import axios from "axios";

const HomePage = () => {
  const registerOrganization = (body: any) => {
    axios
      .get(`$adasd{}`)
      .then((response) => {
        if (response.status === 200) {
        }
      })
      .catch((err) => {});
  };

  return <div>homepage here</div>;
};

export default HomePage;
