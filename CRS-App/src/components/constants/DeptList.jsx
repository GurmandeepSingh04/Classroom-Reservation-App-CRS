import * as React from "react";
import ComputerIcon from "@mui/icons-material/Computer";
import WifiIcon from "@mui/icons-material/Wifi";
import CableIcon from "@mui/icons-material/Cable";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ConstructionIcon from "@mui/icons-material/Construction";
import CSE from "../CSE";
import ECE from "../ECE";
import Civil from "../Civil";
import ELE from "../ELE";
import MEC from "../MEC";

const DeptList = [
  {
    id: "0",
    name: "Computer Science and Data Science",
    icon: <ComputerIcon />,
    link: "/CSE",
    component: CSE,
  },
  {
    id: "1",
    name: "Electronics and Communication Engineering",
    icon: <WifiIcon />,
    link: "/ECE",
    component: ECE,
  },
  {
    id: "2",
    name: "Electrical Engineering",
    icon: <CableIcon />,
    link: "ELE",
    component: ELE,
  },
  {
    id: "3",
    name: "Civil Engineering",
    icon: <EngineeringIcon />,
    link: "/Civil",
    component: Civil,
  },
  {
    id: "4",
    name: "Mechanical Engineering and Production Engineering",
    icon: <ConstructionIcon />,
    link: "/MEC",
    component: MEC,
  },
];

export default DeptList;
