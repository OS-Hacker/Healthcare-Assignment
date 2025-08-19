import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import humanbody from "../assets/images/human-body.png";
import HealthStatusCards from "./HealthStatusCards";
import { bodyParts } from "../data/healthData";
import ActivityFeed from "./ActivityFeed";

const AnatomySection = () => {
  return (
    <>
      <section className="bg-white rounded-xl p-6 shadow-sm">

        <header className="w-full flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-800 md:text-2xl">
            Dashboard
          </span>
          <button className="flex items-center gap-2 px-4 py-2 text-sm md:text-[14px] bg-sky-100 rounded-lg cursor-pointer font-medium shadow-xs hover:bg-gray-50 transition-all duration-200 group">
            This Week
            <MdOutlineKeyboardArrowDown
              size={20}
              className="transition-transform duration-200 group-hover:rotate-180"
            />
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <figure className="relative w-full h-[400px] flex justify-center m-0 md:h-[400px]">
            <img
              src={humanbody}
              alt="Human Body"
              className="h-full object-contain"
            />
            {bodyParts.map((part) => (
              <div
                key={part.id}
                className="absolute w-4 h-4 rounded-full cursor-pointer transition-transform duration-200 hover:scale-120 group/marker"
                style={{
                  top: `${part.position.top}%`,
                  left: `${part.position.left}%`,
                  backgroundColor: getStatusColor(part.status),
                  transform: "translate(-50%, -50%)",
                }}
              >
                <span className="absolute bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 invisible transition-all duration-200 z-10 after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-6 after:border-solid after:border-t-gray-800 after:border-x-transparent after:border-b-transparent group-hover/marker:opacity-100 group-hover/marker:visible">
                  {part.label}
                </span>
              </div>
            ))}
          </figure>

          <aside className="flex flex-col gap-4">
            <HealthStatusCards />
          </aside>
        </div>
      </section>
      <ActivityFeed />
    </>
  );
};

// Helper function for status colors
function getStatusColor(status) {
  const colors = {
    healthy: "#10B981", // emerald-500
    warning: "#F59E0B", // amber-500
    critical: "#EF4444", // red-500
    primary: "#3B82F6", // blue-500
  };
  return colors[status] || colors.primary;
}

export default AnatomySection;
