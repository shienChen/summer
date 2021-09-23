"use strict";
import axios from "axios";

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const request = axios.create(config);

request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function (response) {
    const res = response.data;
    if (!res.success) {
      const message = res.error || "Request Error !";
      return Promise.reject(new Error(message));
    } else {
      return res.data;
    }
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default request;
