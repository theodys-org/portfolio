import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Preview from "./pages/preview";
import DasboardLayout from "./pages/dashboard/layouts/dashboardLayout";
import Overview from "./pages/dashboard/pages/overview";
import Skills from "./pages/dashboard/pages/skills";
import Projects from "./pages/dashboard/pages/projects";
import Achievements from "./pages/dashboard/pages/achievements";
import Experiences from "./pages/dashboard/pages/experiences";
import AddSkill from "./pages/dashboard/pages/skills/addSkill";
import AddProject from "./pages/dashboard/pages/projects/addProject";
import AddExperience from "./pages/dashboard/pages/experiences/addExperience";
import NotFound from "./pages/NotFound";
import Profile from "./pages/dashboard/pages/profile";
import { toast } from "react-toastify";
import AuthLayout from "./pages/auth/layouts/authLayout";
import { apiGetUserDetails } from "./services/preview";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "dashboard",
      element: <DasboardLayout />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "skills/add-skill",
          element: <AddSkill />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "projects/add-project",
          element: <AddProject />,
        },
        {
          path: "achievements",
          element: <Achievements />,
        },
        {
          path: "experiences",
          element: <Experiences />,
        },
        {
          path: "experiences/add-experience",
          element: <AddExperience />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "preview/:username",
      element: <Preview />,
      loader: async ({ params }) => {
        const username = params.username;
        try {
          const response = await apiGetUserDetails(username);
          const userProfileData = response?.data.user;
          return userProfileData;
        } catch (error) {
          toast.error("An error occured");
          return null;
        }
      },
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
