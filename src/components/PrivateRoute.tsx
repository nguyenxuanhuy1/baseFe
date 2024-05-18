import { Navigate } from "react-router-dom";
import { useAuth } from "providers/AuthenticationProvider";
import BaseUrl from "constants/baseUrl";

const PrivateRoute = (props: { children: any }) => {
  const auth = useAuth();

  console.log({ auth });

  //! Render
  if (auth.isLogged) {
    return props.children;
  }

  return <Navigate to={BaseUrl.Login} replace />;
};

export default PrivateRoute;
