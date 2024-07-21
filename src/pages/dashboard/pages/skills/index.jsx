import PagesLayout from "../../layouts/pagesLayout";
import { Edit, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiDeleteSkill, apiGetSkills } from "../../../../services/skills";
import PageLoader from "../../../../components/PageLoader";
import { toast } from "react-toastify";
import Loader from "../../../../components/Loader";

const Skills = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [deletingItems, setDeletingItems] = useState({});

  const fetchSkills = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetSkills();
      console.log(res.data);
      setSkills(res.data.Skills);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (_id) => {
    setDeletingItems((prev) => ({ ...prev, [_id]: true }));
    try {
      const res = await apiDeleteSkill(_id);
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setDeletingItems((prev) => ({ ...prev, [_id]: false }));
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <PagesLayout
      headerText="Skills"
      buttonText="Add New Skill"
      onClick={() => navigate("/dashboard/skills/add-skill")}
    >
      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          {skills.length == 0 ? (
            <p>No skill added yet</p>
          ) : (
            <div className="grid grid-cols-4 gap-6 ">
              {skills.map(({ name, levelOfProficiency, _id }, index) => (
                <div
                  key={index}
                  className="h-40 shadow-md rounded-xl  flex flex-col p-5 bg-white"
                >
                  <div className="ml-auto flex ">
                    <button className="hover:bg-pink text-pink hover:text-white p-2 rounded-full flex">
                      <Edit />
                    </button>
                    <button
                      onClick={() => handleDelete(_id)}
                      className="hover:bg-pink text-pink hover:text-white p-2 rounded-full flex"
                    >
                      {deletingItems[_id] ? <Loader /> : <TrashIcon />}
                    </button>
                  </div>
                  <span>{name}</span>
                  <span>{levelOfProficiency}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </PagesLayout>
  );
};

export default Skills;
