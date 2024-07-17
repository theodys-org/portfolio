import { PlusCircleIcon } from "lucide-react";

// eslint-disable-next-line react/prop-types
const PagesLayout = ({ headerText, buttonText, children, onClick }) => {
  return (
    <div className="p-10 flex flex-col gap-y-16">
      <div className="flex ">
        <h1 className="text-3xl font-bold">{headerText}</h1>
        <button
          className="bg-pink text-white px-6 py-2 ml-auto rounded-lg flex gap-x-2"
          onClick={onClick}
        >
          <PlusCircleIcon />
          {buttonText}
        </button>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default PagesLayout;
