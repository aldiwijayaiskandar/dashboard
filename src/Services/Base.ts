import apisauce from "apisauce";
import { asyncLocalStorage } from "./LocalStorage";
import { ApiResponse } from "../Models";
import { AxiosRequestConfig } from "axios";
import { format } from "date-fns";

const url = {
  baseUrl: "https://jsonplaceholder.typicode.com",
};

const api = apisauce.create({
  baseURL: url.baseUrl,
  timeout: 3000,
});

api.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log(
    `${format(
      new Date(),
      "dd/MM/yyy"
    )} Response: ${config.method?.toUpperCase()} ${config.url}`
  );
  return config;
});

const getUserToken = async (): Promise<string> => {
  return await asyncLocalStorage.get("user_token");
};

export async function get<T>(
  url: string,
  isAuthenticated = false
): Promise<ApiResponse> {
  if (isAuthenticated) {
    api.setHeader("Authorization", await getUserToken());
  }
  let response = await api.get(url);
  return new ApiResponse().Convert(response);
}

export async function post<T>(
  url: string,
  data = {},
  isAuthenticated = false
): Promise<ApiResponse> {
  if (isAuthenticated) {
    api.setHeader("Authorization", await getUserToken());
  }
  let response = await api.post(url, data);
  return new ApiResponse().Convert(response);
}

export async function put<T>(
  url: string,
  data = {},
  isAuthenticated = false
): Promise<ApiResponse> {
  if (isAuthenticated) {
    api.setHeader("Authorization", await getUserToken());
  }
  let response = await api.put(url, data);
  return new ApiResponse().Convert(response);
}

export async function patch<T>(
  url: string,
  data = {},
  isAuthenticated = false
): Promise<ApiResponse> {
  if (isAuthenticated) {
    api.setHeader("Authorization", await getUserToken());
  }
  let response = await api.patch(url, data);
  return new ApiResponse().Convert(response);
}

export async function remove<T>(
  url: string,
  isAuthenticated = false
): Promise<ApiResponse> {
  if (isAuthenticated) {
    api.setHeader("Authorization", await getUserToken());
  }
  let response = await api.get(url);
  return new ApiResponse().Convert(response);
}
