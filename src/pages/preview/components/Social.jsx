import { BoxCanvas } from "./canvas";
import { socials } from "../../../constants/preview";

const Social = () => {
  return (
    <div className="flex lg:flex-col justify-center items-center lg:fixed right-5 bottom-3">
      {socials.map((social) => (
        <div className="w-16 h-16" key={social.name}>
          <BoxCanvas icon={social.icon} link={social.link} />
        </div>
      ))}
    </div>
  );
};

export default Social;
