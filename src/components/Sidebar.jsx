import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import K from "../constants";

const Sidebar = () => {
  return (
    <div className="h-screen w-[400px] shadow-2xl flex flex-col px-8 py-8 ">
      <span className="text-3xl font-bold text-primary text-center">
        iPortfolio
      </span>
      <div className="flex flex-col gap-y-5 mt-12">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <Link
            to={link}
            key={index}
            className="flex gap-x-4 items-center hover:bg-primary hover:text-white hover:rounded-md p-2"
          >
            <span className="bg-primary text-white p-2 rounded-full">
              {icon}
            </span>
            <span>{text}</span>
          </Link>
        ))}
      </div>
      <button className="flex gap-x-4 items-center mt-auto hover:bg-primary hover:text-white hover:rounded-md p-2">
        <span className="bg-primary text-white p-2 rounded-full">
          <LogOut />
        </span>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
