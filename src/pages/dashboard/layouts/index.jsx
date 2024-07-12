import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import { SquareMenu } from "lucide-react";

const DasboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-secondary w-full">
        <div className="flex px-16 bg-white py-5 drop-shadow-md items-center">
          <span className="p-3 bg-primary text-white rounded-full shadow-md hover:bg-white hover:text-primary">
            <SquareMenu className="size-10" />
          </span>
          <span className="ml-auto bg-secondary p-4 rounded-full">
            <span className="text-xl font-semibold">TG</span>
          </span>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DasboardLayout;
