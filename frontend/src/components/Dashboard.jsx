import React from "react";
import styled from "styled-components";
import AnatomySection from "./AnatomySection";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <ContentGrid>
        <LeftColumn>
          <AnatomySection />
        </LeftColumn>
        <RightColumn>
          <CalendarView />
          <UpcomingSchedule />
        </RightColumn>
      </ContentGrid>
    </DashboardContainer>
  );
};

// Styled Components
const DashboardContainer = styled.main`
  flex: 1;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  overflow-y: auto;
  min-height: calc(100vh - 60px); /* Adjust based on your header height */

  @media (min-width: 768px) {
    padding: 1.25rem;
  }

  @media (min-width: 1024px) {
    padding: 1.5rem;
  }
`;

const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 1.5rem;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 450px;
    gap: 2rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    gap: 1.25rem;
  }

  @media (min-width: 1024px) {
    gap: 1.5rem;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    gap: 1.25rem;
  }
`;

export default Dashboard;
