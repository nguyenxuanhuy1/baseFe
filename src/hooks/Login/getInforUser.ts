import httpMethod from "services/httpMethod";

const useGetUserInfor = () => {
  const saveInfor = async () => {
    try {
      const response = await httpMethod.get(
        "http://localhost:3001/api/auth/profile"
      );
      if (response.status === 200) {
        const UserInfor = response.data;
        localStorage.setItem("UserInfor", JSON.stringify(UserInfor));
      }
    } catch (error) {
      console.error("Failed to fetch user info:", error);
    }
  };

  return { saveInfor };
};

export default useGetUserInfor;
