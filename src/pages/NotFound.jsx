import { notFound } from "../assets";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={notFound} alt="Not found svg" className="size-1/2" />
    </div>
  );
};

export default NotFound;
