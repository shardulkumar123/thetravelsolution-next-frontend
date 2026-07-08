export interface ApiResponse<TData = unknown> {
  success: boolean;
  data: TData;
  message?: string;
  statusCode: number;
  timestamp: string;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}
