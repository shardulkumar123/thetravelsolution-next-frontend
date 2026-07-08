import { User } from "@/types";

import { apiClient } from "@/lib/api-client";

export const userService = {
  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.get<User>("/user/me");
    return response.data;
  },

  updateProfile: async (data: Partial<User>): Promise<User> => {
    const response = await apiClient.put<User>("/user/profile", data);
    return response.data;
  },
};
