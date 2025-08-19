import React from "react";
import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";

const Dashboard = () => {
  return (
    <main className="flex-1 p-4 bg-gray-50 overflow-y-auto min-h-[calc(100vh-60px)] md:p-5 lg:p-6">
      <div className="flex flex-col gap-4 w-full max-w-[1800px] mx-auto lg:grid lg:grid-cols-[1fr_380px] lg:gap-6 xl:grid-cols-[1fr_450px] xl:gap-8">
        <div className="flex flex-col gap-4 w-full md:gap-5 lg:gap-6">
          <AnatomySection />
        </div>
        <div className="flex flex-col gap-4 w-full md:gap-5">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
