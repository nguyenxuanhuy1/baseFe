import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { UserInfo } from "interfaces/user";
import { showError } from "helpers/toast";
import httpMethod from "services/httpMethod";

interface AuthenticationContextI {
  loading: boolean;
  isLogged: boolean;
  user: UserInfo | null;
  logout: () => void;
}

const AuthenticationContext = createContext<AuthenticationContextI>({
  loading: false,
  isLogged: false,
  user: {} as any,
  // login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthenticationContext);

const AuthenticationProvider = ({ children }: { children: any }) => {
  //! State
  const [token] = useState(httpMethod.getTokenStorage());
  const [user] = useState<UserInfo | null>(httpMethod.getUserStorage());
  const [isLogging, setIsLogging] = useState(false);
  console.log("user", user, "token", token);

  const logout = useCallback(() => {
    httpMethod.clearStorage();
    window.sessionStorage.clear();
    window.location.reload();
  }, []);

  //! Return
  const value = useMemo(() => {
    return {
      loading: isLogging,
      isLogged: !!user && !!token,
      user,
      logout,
      // login,
    };
  }, [logout, user, token, isLogging]);

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
