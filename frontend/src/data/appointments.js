import {
  FaHeartbeat,
  FaEye,
  FaBrain,
  FaStethoscope,
  FaCalendarAlt,
} from "react-icons/fa";

export const upcomingAppointments = [
  {
    day: "Thursday",
    appointments: [
      {
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: FaStethoscope,
        color: "#4299E1",
      },
      {
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: FaEye,
        color: "#9F7AEA",
      },
    ],
  },
  {
    day: "Saturday",
    appointments: [
      {
        title: "Cardiologist",
        time: "12:00 PM",
        icon: FaHeartbeat,
        color: "#F56565",
      },
      {
        title: "Neurologist",
        time: "16:00 PM",
        icon: FaBrain,
        color: "#68D391",
      },
    ],
  },
];
