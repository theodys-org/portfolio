import { useNavigate } from "react-router-dom";
import PagesLayout from "../../layouts/pagesLayout";
const Projects = () => {
  const navigate = useNavigate();
  return (
    <PagesLayout
      headerText="Projects"
      buttonText="Add New Project"
      onClick={() => navigate("/dashboard/projects/add-project")}
    >
      <span>Project List here</span>
    </PagesLayout>
  );
};

export default Projects;
