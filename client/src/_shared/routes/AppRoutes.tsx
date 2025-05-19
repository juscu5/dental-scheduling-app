import { createHashRouter, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import PublicRoutesWrapper from "../components/PublicRoutesWrapper";
import Home from "../../Home";
import Services from "../../Services";
import AboutUs from "../../AboutUs";
import ContactUs from "../../ContactUs";

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
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);
