import React from "react";

import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text hl1",
  },
  {
    title: "About",
    path: "/",
    icon: <RiIcons.RiInformationFill />,
    cName: "nav-text hl1",
  },
  {
    title: "Projects",
    path: "/",
    icon: <FaIcons.FaProjectDiagram />,
    cName: "nav-text hl1",
  },
  {
    title: "Connect",
    path: "/",
    icon: <MdIcons.MdContactMail />,
    cName: "nav-text hl1",
  },
];
