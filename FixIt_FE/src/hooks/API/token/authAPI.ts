// Third party
import axios from "axios";

export const refreshAccessToken = async (): Promise<string | null> => {
  try {
    const response = await axios.post<{
      success: boolean;
      accessToken?: string;
    }>(
      "http://localhost:5151/api/customer/auth/refresh",
      {},
      {
        withCredentials: true,
      },
    );

    if (response.data.success && response.data.accessToken) {
      return response.data.accessToken;
    }
  } catch (error) {
    console.error("Failed to refresh token", error);
  }
  return null;
};
