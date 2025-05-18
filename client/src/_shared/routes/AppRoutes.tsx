import { createHashRouter } from "react-router-dom";
import { RootStyle } from "../components/Style/RootStyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const AppRoutes = createHashRouter([
  {
    path: "/",
    element: (
      <QueryClientProvider client={queryClient}>
        <RootStyle>
          <ToastContainer />
          {/* Put pages here */}
          <>test lang</>
        </RootStyle>
      </QueryClientProvider>
    ),
  },
]);
