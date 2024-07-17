/* eslint-disable react-refresh/only-export-components */
import { BallCanvas } from "./canvas";
import SectionLayout from "../layouts";
import { technologies } from "../../../constants/preview";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionLayout(Tech, "");
