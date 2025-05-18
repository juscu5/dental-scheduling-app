import { ToastContainer } from "react-toastify";
import { RootStyle } from "./Style/RootStyle";
import CustomAppBar from "./CustomAppBar";
import { Suspense } from "react";
import Loader from "./Loader";
import { Outlet } from "react-router-dom";

export default function PublicRoutesWrapper() {
  return (
    <RootStyle>
      <ToastContainer />
      <CustomAppBar title="Dental Clinic">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </CustomAppBar>
    </RootStyle>
  );
}
