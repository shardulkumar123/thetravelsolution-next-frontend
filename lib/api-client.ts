import axios from "axios";

import { storage } from "@/utils/storage";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Request Interceptor: Attach authentication tokens or headers
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = storage.get("auth_token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Standard error handling, token expiration logic
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        console.warn("Unauthorized access - logging out...");
        if (typeof window !== "undefined") {
          storage.remove("auth_token");
        }
      }

      const customError = {
        message: error.response.data?.message || "An unexpected error occurred",
        status: status,
        originalError: error,
      };
      return Promise.reject(customError);
    }

    return Promise.reject({
      message: error.message || "Network error. Please check your connection.",
      status: error.code === "ECONNABORTED" ? 408 : 500,
      originalError: error,
    });
  }
);
