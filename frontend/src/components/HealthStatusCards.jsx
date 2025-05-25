import React from "react";
import styled from "styled-components";
import { healthStatusData } from "../data/healthData";

const HealthStatusCards = () => {
  return (
    <CardsContainer>
      {healthStatusData.map((item, index) => {
        return (
          <StatusCard key={index}>
            <CardHeader>
              {item.icon ? (
                <item.icon
                  color={item.iconColor}
                  style={{ fontSize: "35px" }}
                />
              ) : (
                <div>Icon Missing</div>
              )}
              <h4>{item.title || "No Title"}</h4>
            </CardHeader>
            <CardDate>Date : {item.date || "No Date"}</CardDate>
            <StatusBarContainer>
              <StatusBarFill
                status={item.status || "unknown"}
                data-testid={`status-bar-${index}`}
              />
            </StatusBarContainer>
          </StatusCard>
        );
      })}
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

/* All other styled components remain exactly the same */
const StatusCard = styled.div`
  background-color: #f6faff;
  border-radius: 1rem;
  padding: 0.5rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 10px
`;

const CardDate = styled.p`
  color: #cdd1d4;
  font-size: 0.800rem;
  margin-bottom: 0.5rem;
`;

const StatusBarContainer = styled.div`
  height: 8px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

const StatusBarFill = styled.div`
  height: 100%;

  width: ${({ status }) => {
    switch (status) {
      case "good":
        return "100%";
      case "fair":
        return "50%";
      case "poor":
        return "25%";
      default:
        console.warn(`Unknown status: ${status}`);
        return "0%";
    }
  }};
  background-color: ${({ status, theme }) => {
    const colors = {
      good: theme?.colors?.lightGreen || "#4CAF50",
      fair: theme?.colors?.yellow || "#FFC107",
      poor: theme?.colors?.red || "#F44336",
      default: theme?.colors?.gray || "#9E9E9E",
    };

    switch (status) {
      case "good":
        return colors.good;
      case "fair":
        return colors.fair;
      case "poor":
        return colors.poor;
      default:
        return colors.default;
    }
  }};
  border-radius: 4px;
`;

export default HealthStatusCards;
