import {
  Award,
  BookText,
  BriefcaseBusiness,
  FolderKanban,
  LayoutDashboard,
  MessageCircleCode,
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
      total: 40,
    },
    {
      icon: <FolderKanban />,
      text: "Projects",
      link: "/dashboard/projects",
      total: 100,
    },
    {
      icon: <BriefcaseBusiness />,
      text: "Experiences",
      link: "/dashboard/experiences",
      total: 9,
    },
    {
      icon: <Award />,
      text: "Achievements",
      link: "/dashboard/achievements",
      total: 10,
    },
    {
      icon: <MessageCircleCode />,
      text: "Socials",
      link: "/dashboard/socials",
      total: 4,
    },
  ],
  OVERVIEW: [
    {
      icon: <BookText />,
      text: "Skills",
      total: 40,
    },
    {
      icon: <FolderKanban />,
      text: "Projects",
      total: 100,
    },
    {
      icon: <BriefcaseBusiness />,
      text: "Experiences",
      total: 9,
    },
    {
      icon: <Award />,
      text: "Achievements",
      total: 10,
    },
    {
      icon: <MessageCircleCode />,
      text: "Socials",
      total: 4,
    },
  ],
};
