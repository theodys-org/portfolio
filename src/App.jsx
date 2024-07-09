import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/dashboard";
import Preview from "./pages/preview";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "preview",
      element: <Preview />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
