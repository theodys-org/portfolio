import PagesLayout from "../../layouts/pagesLayout";
import K from "../../../../constants";
import { Edit, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();
  return (
    <PagesLayout
      headerText="Skills"
      buttonText="Add New Skill"
      onClick={() => navigate("/dashboard/skills/add-skill")}
    >
      <div className="grid grid-cols-4 gap-6 ">
        {K.SKILLS.map(({ name, levelOfProficiency }, index) => (
          <div
            key={index}
            className="h-40 shadow-md rounded-xl  flex flex-col p-5"
          >
            <div className="ml-auto flex gap-x-2">
              <span className="bg-primary p-2 rounded-full">
                <Edit className="text-white" />
              </span>
              <span className="bg-primary p-2 rounded-full">
                <TrashIcon className="text-white" />
              </span>
            </div>
            <span>{name}</span>
            <span>{levelOfProficiency}</span>
          </div>
        ))}
      </div>
    </PagesLayout>
  );
};

export default Skills;
