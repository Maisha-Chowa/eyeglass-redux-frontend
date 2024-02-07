import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import EyeGlass from "../pages/EyeGlass";
import PrivateRoute from "./privateRoute";
import AddEyeGlass from "../pages/AddEyeGlass";
import EyeGlassDetails from "../pages/EyeGlassDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/eyeglass",
        element: (
          <PrivateRoute>
            <EyeGlass />
          </PrivateRoute>
        ),
      },
      {
        path: `/eyeglass/:id`,
        element: (
          <PrivateRoute>
            <EyeGlassDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/eyeglass/create",
        element: (
          <PrivateRoute>
            <AddEyeGlass />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
