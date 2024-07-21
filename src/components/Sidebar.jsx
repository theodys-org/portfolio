import { LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import K from "../constants";
import { apiLogout } from "../services/auth";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await apiLogout();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("An error occured");
    }
  };
  return (
    <div className="h-screen w-[400px] shadow flex flex-col px-5 py-8 bg-white">
      <span className="text-3xl font-bold text-pink text-center">
        iPortfolio
      </span>
      <div className="flex flex-col gap-y-5 mt-12">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <NavLink
            to={link}
            key={index}
            className={({ isActive }) =>
              `flex gap-x-4 items-center hover:bg-pink hover:text-white hover:rounded-md p-2 ${
                isActive ? "bg-pink text-white" : ""
              }`
            }
            end
          >
            <span className="bg-pink text-white p-2 rounded-full">{icon}</span>
            <span>{text}</span>
          </NavLink>
        ))}
      </div>
      <button
        className="flex gap-x-4 items-center mt-auto hover:bg-pink hover:text-white hover:rounded-md p-2"
        onClick={logout}
      >
        <span className="bg-pink text-white p-2 rounded-full">
          <LogOut />
        </span>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
