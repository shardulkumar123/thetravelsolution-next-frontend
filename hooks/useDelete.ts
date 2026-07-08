import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api-client";

interface MutationConfig {
  url: string;
  config?: AxiosRequestConfig;
}

export function useDelete<TData = unknown, TError = unknown>(
  options?: UseMutationOptions<TData, TError, MutationConfig>
) {
  return useMutation<TData, TError, MutationConfig>({
    mutationFn: async ({ url, config }) => {
      const response = await apiClient.delete<TData>(url, config);
      return response.data;
    },
    ...options,
  });
}
