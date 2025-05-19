import { ToastContainer } from "react-toastify";
import CustomAppBar from "./CustomAppBar";
import { Suspense } from "react";
import Loader from "./Loader";
import { Outlet } from "react-router-dom";

export default function PublicRoutesWrapper() {
  return (
    <>
      <ToastContainer />
      <CustomAppBar title="JDC Dental Clinic">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </CustomAppBar>
    </>
  );
}
