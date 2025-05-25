import React from "react";
import styled from "styled-components";

const ActivityFeed = () => {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const barSets = [
    [60, 40, 100],
    [30, 70, 90],
    [80, 60, 10],
    [80, 60, 100],
    [80, 60, 100],
    [30, 70, 90],
    [80, 60, 100],
  ];

  const colors = ["#06b6d4", "#d1d5db", "#6366f1"];
  return (
    <Container>
      <Header>
        <Title>Activity</Title>
        <Subtitle>3 appointments this week</Subtitle>
      </Header>
      <Chart>
        {barSets.map((bars, i) => (
          <DayContainer key={i}>
            <Bars>
              {bars.map((height, j) => (
                <Bar
                  key={j}
                  height={height}
                  color={colors[j % colors.length]}
                />
              ))}
            </Bars>
            <DayLabel>{days[i]}</DayLabel>
          </DayContainer>
        ))}
      </Chart>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f6faff;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`;

const Subtitle = styled.span`
  font-size: 0.875rem;
  color: #9ca3af;
`;

const Chart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 8rem;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;

  @media (min-width: 480px) {
    gap: 1rem;
  }

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
    justify-content: center;
  }
`;

const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30px;
`;

const Bars = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const Bar = styled.div`
  width: 6px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  height: ${(props) => props.height}px;
`;

const DayLabel = styled.span`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #6b7280;
`;

export default ActivityFeed;
