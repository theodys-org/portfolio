import {
  Award,
  Badge,
  BookA,
  BookText,
  BriefcaseBusiness,
  FolderKanban,
  LayoutDashboard,
} from "lucide-react";

export default {
  NAVLINKS: [
    {
      icon: <LayoutDashboard />,
      text: "Overview",
      link: "/dashboard",
    },
    {
      icon: <BookText />,
      text: "Skills",
      link: "/dashboard/skills",
    },
    {
      icon: <FolderKanban />,
      text: "Projects",
      link: "/dashboard/projects",
    },
    {
      icon: <BriefcaseBusiness />,
      text: "Experiences",
      link: "/dashboard/experiences",
    },
    {
      icon: <Award />,
      text: "Achievements",
      link: "/dashboard/achievements",
    },
  ],
  OVERVIEW: [
    {
      id: "skills",
      icon: <BookText />,
      text: "Skills",
    },
    {
      id: "projects",
      icon: <FolderKanban />,
      text: "Projects",
    },
    {
      id: "experiences",
      icon: <BriefcaseBusiness />,
      text: "Experiences",
    },
    {
      id: "achievements",
      icon: <Award />,
      text: "Achievements",
    },
    {
      id: "education",
      icon: <BookA />,
      text: "Education",
    },
    {
      id: "volunteering",
      icon: <Badge />,
      text: "Volunteering",
    },
  ],
  SKILLS: [
    {
      name: "JavaScript",
      levelOfProficiency: "Intermediate",
    },
    {
      name: "HTML",
      levelOfProficiency: "Advanced",
    },
    {
      name: "CSS",
      levelOfProficiency: "Beginner",
    },
    {
      name: "Typescript",
      levelOfProficiency: "Beginner",
    },
    {
      name: "React Native",
      levelOfProficiency: "Beginner",
    },
    {
      name: "Solidity",
      levelOfProficiency: "Beginner",
    },
  ],
};
