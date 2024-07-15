import { useNavigate } from "react-router-dom";
import PagesLayout from "../../layouts/pagesLayout";

const Experiences = () => {
  const navigate = useNavigate();

  return (
    <PagesLayout
      headerText="Experiences"
      buttonText="Add New Experience"
      onClick={() => navigate("/dashboard/experiences/add-experience")}
    >
      <span>Experience List here</span>
    </PagesLayout>
  );
};

export default Experiences;
