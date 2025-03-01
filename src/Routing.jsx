import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import App from "./App";
import Pricing7 from "./Components/ContactUs/ContactUs";
import { Pricing } from "./Components/Pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "contactUs",
        element: <Pricing />,
      },
    ],
  },
]);
export default router;
