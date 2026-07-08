import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api-client";

interface MutationConfig<TBody = unknown> {
  url: string;
  data?: TBody;
  config?: AxiosRequestConfig;
}

export function usePost<TData = unknown, TError = unknown, TBody = unknown>(
  options?: UseMutationOptions<TData, TError, MutationConfig<TBody>>
) {
  return useMutation<TData, TError, MutationConfig<TBody>>({
    mutationFn: async ({ url, data, config }) => {
      const response = await apiClient.post<TData>(url, data, config);
      return response.data;
    },
    ...options,
  });
}
