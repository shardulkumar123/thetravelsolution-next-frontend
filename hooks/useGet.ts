import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

import { apiClient } from "@/lib/api-client";

export function useGet<TData = unknown, TError = unknown>(
  key: QueryKey,
  url: string,
  config?: AxiosRequestConfig,
  options?: Omit<UseQueryOptions<TData, TError, TData, QueryKey>, "queryKey" | "queryFn">
) {
  return useQuery<TData, TError, TData, QueryKey>({
    queryKey: key,
    queryFn: async () => {
      const response = await apiClient.get<TData>(url, config);
      return response.data;
    },
    ...options,
  });
}
