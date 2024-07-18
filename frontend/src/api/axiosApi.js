import axios from "axios";

export const host = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const authHost = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export const walletHost = axios.create({
  baseURL: process.env.REACT_APP_WALLET_SERVER_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

authHost.interceptors.request.use(authInterceptor);
