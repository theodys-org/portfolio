import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import { SquareMenu } from "lucide-react";

const DasboardLayout = () => {
  return (
    <div className="flex bg-[#F3F4F7]">
      <Sidebar />
      <div className=" w-full">
        <div className="flex px-16 bg-white py-5 shadow items-center">
          <span className="p-3 bg-pink text-white rounded-full shadow-md hover:bg-white hover:text-pink">
            <SquareMenu className="size-8" />
          </span>
          <span className="ml-auto bg-pink p-4 rounded-full cursor-pointer">
            <span className="text-xl font-semibold text-white">TG</span>
          </span>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DasboardLayout;
