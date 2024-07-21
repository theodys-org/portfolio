import { useEffect, useState } from "react";
import K from "../../../constants";
import { apiGetSkills } from "../../../services/skills";
import { apiGetAchievements } from "../../../services/achievements";
import { apiGetProjects } from "../../../services/projects";
import { apiGetVolunteering } from "../../../services/volunteering";
import { apiGetEducation } from "../../../services/education";
import { apiGetExperiences } from "../../../services/experiences";
import PageLoader from "../../../components/PageLoader";
import CountUp from "react-countup";
import { Link, useOutletContext } from "react-router-dom";

const Overview = () => {
  const [data, setData] = useState({
    skills: 0,
    projects: 0,
    achievements: 0,
    volunteering: 0,
    education: 0,
    experiences: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [profile] = useOutletContext();

  const getPreviewLink = () => {
    if (!profile) return "/preview/theody";

    return `/preview/${profile.userName}`;
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const [
        totalSkills,
        totalAchievements,
        totalProjects,
        totalVolunteering,
        totalEducation,
        totalExperiences,
      ] = await Promise.all([
        apiGetSkills(),
        apiGetAchievements(),
        apiGetProjects(),
        apiGetVolunteering(),
        apiGetEducation(),
        apiGetExperiences(),
      ]);

      console.log("Total skills: ", totalSkills.data.Skills.length);

      const newData = {
        skills: totalSkills.data.Skills.length ?? 0,
        projects: totalProjects.data.projects.length ?? 0,
        achievements: totalAchievements.data.Achievements.length ?? 0,
        volunteering: totalVolunteering.data.Volunteerings.length ?? 0,
        education: totalEducation.data.education.length ?? 0,
        experiences: totalExperiences.data.Experience.length ?? 0,
      };

      setData(newData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="p-10 flex flex-col gap-y-10">
          <Link
            to={getPreviewLink()}
            className="bg-pink text-white ml-auto px-6 py-3 rounded-lg"
          >
            View Preview
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {K.OVERVIEW.map(({ icon, text, id }, index) => (
              <div
                key={index}
                className="h-40 shadow-md bg-white p-6 flex flex-col justify-between"
              >
                <div className="flex justify-between">
                  <span className="text-pink">{icon}</span>
                  <span className="text-lg font-semibold">{text}</span>
                </div>
                <CountUp
                  className="text-2xl font-semibold"
                  start={0}
                  end={data[id]}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Overview;
