import { ToastContainer } from "react-toastify";
import PortalAppBar from "./components/PortalAppBar";
import { Suspense, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "../_shared/components/Loader";
import { useAccountStore } from "../_shared/store/AccountStore";
import { useMutation } from "@tanstack/react-query";
import { isLoggedInApi, ProfileResponse } from "../_shared/api/UsersApi";
import { useAuthStore } from "../_shared/store/AuthStore";

export default function Portal() {
  const { account } = useAccountStore();
  const { setUser } = useAuthStore();

  const checkUserProfile = useMutation<ProfileResponse, Error, string>({
    mutationFn: isLoggedInApi,
    onSuccess: (data) => {
      setUser((data.payload as { firstname: string })?.firstname);
    },
  });

  useEffect(() => {
    checkUserProfile.mutate(account);
  }, []);

  return !account ? (
    <Navigate to={"login"} replace />
  ) : (
    <>
      <ToastContainer />
      <PortalAppBar title="JDCDC Portal">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </PortalAppBar>
    </>
  );
}
