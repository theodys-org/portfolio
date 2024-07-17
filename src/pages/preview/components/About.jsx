/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../../../styles";
import { services } from "../../../constants/preview";
import { fadeIn, textVariant } from "../utils/motion";
import SectionLayout from "../layouts";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="tex-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        I am a passionate and enthusiastic software engineer with a solid grasp
        of programming concepts and techniques. My expertise primarily lies in
        Web Development, where I excel in utilizing modern frontend frameworks
        like React and NextJS.
        <br />
        <br />
        Additionally, I am adept at Mobile Development using React Native and
        Blockchain Programming using Solidity. What sets me apart is not just my
        technical knowledge, but also my ability to seamlessly combine
        engineering proficiency with project management expertise.
        <br />
        <br />
        Overall, I bring a combination of technical expertise, a passion for
        continuous learning, and a solid background in Project Management. This
        makes me a well-rounded software engineer who can contribute to
        successful project execution and drive positive outcomes.
      </motion.p>
      <div className="mt-20 grid grid-cols-4 w-full gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionLayout(About, "about");
