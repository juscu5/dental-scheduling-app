import { createHashRouter, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import PublicRoutesWrapper from "../components/PublicRoutesWrapper";
import Home from "../../Home";

export const AppRoutes = createHashRouter([
  {
    path: "/",
    element: <PublicRoutesWrapper />,
    children: [
      // Put element here like this
      // {
      //   path: "",
      //   element: <></>,
      // },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);
