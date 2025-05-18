import React, { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isLoggedInApi } from "../api/UsersApi";
import { useAccountStore } from "../store/AccountStore";
import { useAuthStore } from "../store/AuthStore";
import { useMutation } from "@tanstack/react-query";
import { RootStyle } from "./Style/RootStyle";
import type { ProfileResponse } from "../api/UsersApi";
import Loader from "./Loader";

const PrivateRoutesWrapper: React.FC = () => {
  const { account } = useAccountStore();
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const checkUserProfile = useMutation<ProfileResponse, Error, string>({
    mutationFn: isLoggedInApi,
    onSuccess: (data) => {
      setUser(data.payload);
    },
  });

  useEffect(() => {
    checkUserProfile.mutate(account);
  }, []);

  useEffect(() => {
    if (!account) {
      navigate("/login");
    }
  }, [account]);

  return (
    <div style={{ width: "100%" }}>
      <Suspense fallback={<Loader />}>
        <RootStyle>
          <Outlet />
        </RootStyle>
      </Suspense>
    </div>
  );
};

export default PrivateRoutesWrapper;
