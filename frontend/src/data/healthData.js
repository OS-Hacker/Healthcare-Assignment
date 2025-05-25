import { FaHeart, FaLungs, FaTooth, FaBone } from "react-icons/fa";

export const bodyParts = [
  {
    label: "Healthy Heart",
    status: "healthy",
    position: { top: 30, left: 50 },
  },
  { label: "Lungs", status: "warning", position: { top: 35, left: 45 } },
  { label: "Teeth", status: "healthy", position: { top: 15, left: 50 } },
  { label: "Bone", status: "critical", position: { top: 60, left: 50 } },
];

export const healthStatusData = [
  {
    title: "Lungs",
    status: "fair",
    date: "12 Oct 2021",
    iconColor: "#e3767b",
    icon: FaLungs,
  },
  {
    title: "Teeth",
    status: "good",
    date: "10 Oct 2021",
    iconColor: "#c0b7a4",
    icon: FaTooth,
  },
  {
    title: "Bone",
    status: "poor",
    date: "8 Oct 2021",
    iconColor: "#d7d9dd",
    icon: FaBone,
  },
];
