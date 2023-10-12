import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Controls from "./pages/controls";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/controls",
    element: <Controls />,
  },
]);

export default router;
