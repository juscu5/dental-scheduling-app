import { ApiService } from "../_shared/api";
import { useQuery } from "@tanstack/react-query";
import { RequestResponse } from "./types";

export const addUserQuery = async (data: any): Promise<RequestResponse> => {
  const response = await ApiService.post(`/users`, data);
  return {
    code: response.data.code,
    status: response.data.status,
    payload: response.data.payload,
  };
};
