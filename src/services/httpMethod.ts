import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import BaseUrl from "constants/baseUrl";
import { UserInfo } from "interfaces/user";
import { isString } from "lodash";

export const TOKEN_KEY = "token";
export const USER_KEY = "user";
class Services {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: "",
      timeout: 60000,
    });
    // this.axios.defaults.withCredentials = true;

    this.axios.interceptors.response.use(
      function (response: any) {
        // Do something before request is sent
        // const nextResponse = cloneDeep(response);
        // nextResponse.data = nextResponse?.data?.data;

        return response;
      },
      function (error: any) {
        if (error?.response?.status === 401) {
          window.localStorage.clear();
          window.location.href = BaseUrl.Login;
        } else {
          return Promise.reject(error);
        }
      }
    );
  }

  attachTokenToHeader(token: string) {
    this.axios.interceptors.request.use(
      function (config: any) {
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${token}`;
        config.headers["Accept-Language"] = "vi";
        return config;
      },
      function (error: any) {
        return Promise.reject(error);
      }
    );
  }

  getDataFromStorage(name?: any) {
    const user = window.localStorage.getItem(name);
    if (user && isString(user)) {
      return JSON.parse(user);
    }

    return null;
  }

  clearUser(name?: any) {
    window.localStorage.removeItem(name);
  }

  putDataToStorage(name?: any, data?: any) {
    window.localStorage.setItem(name, JSON.stringify(data));
  }

  public get<T = any, R = T, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<AxiosResponse<R, D>> {
    return new Promise((resolve, reject) => {
      this.axios
        .get<T, AxiosResponse<R>, D>(url, config)
        .then((response) => resolve(response))
        .catch((error: AxiosError) => reject(error.response?.data));
    });
  }

  post(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axios.post(url, data, config);
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return this.axios.delete(url, config);
  }

  put(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axios.put(url, data, config);
  }

  patch(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axios.patch(url, data, config);
  }


  saveTokenStorage(token: any) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
  }

  getTokenStorage() {
    const token = localStorage.getItem(TOKEN_KEY);
    return token || "";
  }

  clearStorage() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  saveUserStorage(user: UserInfo) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUserStorage() {
    if (localStorage.getItem(USER_KEY)) {
      return JSON.parse(localStorage?.getItem(USER_KEY) || "") as UserInfo;
    }

    return null;
  }

}

export default new Services();
