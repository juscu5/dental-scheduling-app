import { ApiService } from "../../_shared/api";
import { useQuery } from "@tanstack/react-query";
import { RequestResponse } from "./types";

export const getBookingQuery = (account: string, user: string) => {
  const enabled = Boolean(account && user);

  const { data, refetch, isLoading } = useQuery<any>({
    queryKey: ["booking"],
    queryFn: () =>
      ApiService.get(`/booking?username=${encodeURIComponent(user)}`, {
        headers: { Authorization: `Bearer ${account}` },
      }),
    enabled,
  });

  return { data, refetch, isLoading };
};

export const addBookingQuery = async (
  account: string,
  data: any
): Promise<RequestResponse> => {
  const response = await ApiService.post(`/booking`, data, {
    headers: { Authorization: `Bearer ${account}` },
  });
  return {
    code: response.data.code,
    status: response.data.status,
    payload: response.data.payload,
  };
};

export const editBookingQuery = async (
  account: string,
  id: string,
  data: any
): Promise<RequestResponse> => {
  const response = await ApiService.put(`/booking/${id}`, data, {
    headers: { Authorization: `Bearer ${account}` },
  });
  return {
    code: response.data.code,
    status: response.data.status,
    payload: response.data.payload,
  };
};

export const deleteBookingQuery = async (
  account: string,
  id: string
): Promise<RequestResponse> => {
  const response = await ApiService.delete(`/booking/${id}`, {
    headers: { Authorization: `Bearer ${account}` },
  });
  return {
    code: response.data.code,
    status: response.data.status,
    payload: response.data.payload,
  };
};
