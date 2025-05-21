import { createHashRouter, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import PublicRoutesWrapper from "../components/PublicRoutesWrapper";
import PrivateRoutesWrapper from "../components/PrivateRoutesWrapper";
import Home from "../../Home";
import Services from "../../Services";
import AboutUs from "../../AboutUs";
import ContactUs from "../../ContactUs";
import Appointment from "../../Appointment";
import Portal from "../../Portal";
import LoginPortal from "../../Portal/Login";
import PortalAppointment from "../../Portal/Appointment";
import PortalServices from "../../Portal/Services";
import PortalDentist from "../../Portal/Dentist";
import PortalUser from "../../Portal/User";
import Schedule from "../../Portal/Schedule";

export const AppRoutes = createHashRouter([
  {
    path: "/",
    element: <PublicRoutesWrapper />,
    children: [
      {
        path: "",
        element: <Home />,
      },
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
      {
        path: "book-an-appointment",
        element: <Appointment />,
      },
    ],
  },
  {
    path: "jdcdc-portal",
    element: <PrivateRoutesWrapper />,
    children: [
      {
        path: "",
        element: <LoginPortal />,
      },
      {
        path: "login",
        element: <LoginPortal />,
      },
    ],
  },
  {
    path: "jdcdc-portal",
    element: <Portal />,
    children: [
      {
        path: "appointment",
        element: <PortalAppointment />,
      },
      {
        path: "services",
        element: <PortalServices />,
      },
      {
        path: "dentist",
        element: <PortalDentist />,
      },
      {
        path: "user",
        element: <PortalUser />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
    ],
  },
]);
