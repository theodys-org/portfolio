import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import K from "../constants";

const Sidebar = () => {
  return (
    <div className="h-screen w-[300px] shadow flex flex-col px-5 py-8 bg-white">
      <span className="text-3xl font-bold text-pink text-center">
        iPortfolio
      </span>
      <div className="flex flex-col gap-y-5 mt-12">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <Link
            to={link}
            key={index}
            className="flex gap-x-4 items-center hover:bg-pink hover:text-white hover:rounded-md p-2"
          >
            <span className="bg-pink text-white p-2 rounded-full">{icon}</span>
            <span>{text}</span>
          </Link>
        ))}
      </div>
      <button className="flex gap-x-4 items-center mt-auto hover:bg-pink hover:text-white hover:rounded-md p-2">
        <span className="bg-pink text-white p-2 rounded-full">
          <LogOut />
        </span>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
