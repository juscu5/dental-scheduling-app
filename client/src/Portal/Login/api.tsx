import { ProfileResponse } from "../../_shared/api/UsersApi";
import { ApiService } from "../../_shared/api";
import { LoginCreds } from "./types";

export interface LoginResponse {
  code: number;
  status?: string;
  payload?: {
    BearerToken: string;
  };
}

const USERS_LOGIN_ENDPOINT = "/users/login/";

export const loginUserApi = async (
  credentials: LoginCreds
): Promise<LoginResponse> => {
  const response = await ApiService.post(USERS_LOGIN_ENDPOINT, credentials);
  return {
    code: response.data.code,
    status: response.data.status,
    payload: response.data.payload,
  };
};

export const isLoggedIn = async (account: string): Promise<ProfileResponse> => {
  const response = await ApiService.get("users/me/", {
    headers: { Authorization: `Bearer ${account}` },
  });

  const data = await response.data;
  return data;
};
