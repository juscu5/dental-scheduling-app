import React, { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { isLoggedInApi, ProfileResponse } from "../api/UsersApi";
import { useAccountStore } from "../store/AccountStore";
import { useAuthStore } from "../store/AuthStore";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import PortalAppBar from "../../Portal/components/PortalAppBar";
import { Box } from "@mui/material";

const PrivateRoutesWrapper: React.FC = () => {
  const { account } = useAccountStore();
  const { setUser } = useAuthStore();
  const navigate = useNavigate();

  const checkUserProfile = useMutation<ProfileResponse, Error, string>({
    mutationFn: isLoggedInApi,
    onSuccess: (data) => {
      setUser((data.payload as { firstname: string })?.firstname);
    },
  });

  useEffect(() => {
    checkUserProfile.mutate(account);
  }, []);

  useEffect(() => {
    if (!account) {
      navigate("/jdcdc-portal");
    } else {
      navigate("/jdcdc-portal/appointment");
    }
  }, [account]);

  return (
    <>
      <ToastContainer />
      <PortalAppBar items={[]} title="JDCDC Portal Login">
        <Suspense fallback={<Loader />}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="200vh"
          >
            <Outlet />
          </Box>
        </Suspense>
      </PortalAppBar>
    </>
  );
};

export default PrivateRoutesWrapper;
