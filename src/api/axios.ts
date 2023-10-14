import axios from "axios";
import { message } from "ant-design-vue";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 60000,
});

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error && error.response) {
      const errorResponse = error.response;
      message.error(errorResponse.data);
    }
    return Promise.reject(error);
  }
);

export default instance;
