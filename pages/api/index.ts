import { message } from "antd";
import axios, { AxiosRequestConfig } from "axios";
import { RequestFunctionParams } from "yapi-to-typescript";

export interface RequestOptions {
  /**
   * 使用的服务器。
   *
   * - `prod`: 生产服务器
   * - `dev`: 测试服务器
   * - `mock`: 模拟服务器
   *
   * @default prod
   */
  server?: "prod" | "dev" | "mock";
  ["Content-Type"]?: string;
}

let refresh = false;

const baseUrl = "http://localhost:8000";

axios.interceptors.response.use(
  (response) => {
    if (response.data.message === "token is not value") {
      message.error("请登陆");
      return Promise.reject(response.data);
    }
    if (response.data.message === "token is expire") {
      axios
        .get(
          baseUrl +
            "/v1/refresh?refresh=" +
            localStorage.getItem("refreshToken"),
          {
            headers: {
              ["Refresh"]: localStorage.getItem("refreshToken") ?? "",
            },
          }
        )
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          refresh = false;
        })
        .catch(() => {});
    }
    return Promise.resolve(response);
  },
  (err) => {
    if (err?.response?.data?.message === "token is expire" && !refresh) {
      refresh = true;
      return Promise.reject(err.response);
    } else if (err?.response?.data?.message !== "token is expire") {
      if (err?.response?.data) {
        message.error(err?.response?.data?.message);
      }
    }
    return Promise.reject(err.response);
  }
);

export default function request<TResponseData>(
  payload: RequestFunctionParams,
  options: RequestOptions = {
    server: "prod",
  }
): Promise<TResponseData> {
  return new Promise<TResponseData>((resvole, reject) => {
    // 请求地址
    const url = `${baseUrl}${payload.path}`;

    axios
      .request({
        method: payload.method,
        url,
        data: payload.rawData,
        ...options,
      })
      .then((res) => {
        if (res.data.message === "token is expire") {
          setTimeout(() => {
            axios
              .request({
                method: payload.method,
                url,
                data: payload.rawData,
                ...options,
              })
              .then((result) => {
                const res = result.data;
                resvole(res);
              })
              .catch(reject);
          }, 500);
          return;
        }
        resvole(res.data);
      })
      .catch((err) => {
        if (err?.data?.message === "token is not value") {
          setTimeout(() => {
            axios
              .request({
                method: payload.method,
                url,
                data: payload.rawData,
                ...options,
              })
              .then((result) => {
                const res = result.data;
                resvole(res);
              })
              .catch(reject);
          }, 500);
        }
        reject(err);
      });
  });
}
