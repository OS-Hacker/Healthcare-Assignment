import React from "react";
import styled from "styled-components";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import humanbody from "../assets/images/human-body.png";
import HealthStatusCards from "./HealthStatusCards";
import { bodyParts } from "../data/healthData";
import ActivityFeed from "./ActivityFeed";

const AnatomySection = () => {
  return (
    <>
      <AnatomyContainer>
        <HeaderContainer>
          <Title>Dashboard</Title>
          <WeekSelector>
            This Week
            <DropdownIcon size={20} />
          </WeekSelector>
        </HeaderContainer>

        <AnatomyContent>
          <HumanBodyIllustration>
            <BodyImage src={humanbody} alt="Human Body" />
            {bodyParts.map((part) => (
              <BodyPartMarker
                key={part.id}
                status={part.status}
                position={part.position}
              >
                <MarkerTooltip>{part.label}</MarkerTooltip>
              </BodyPartMarker>
            ))}
          </HumanBodyIllustration>

          <CardsWrapper>
            <HealthStatusCards />
          </CardsWrapper>
        </AnatomyContent>
      </AnatomyContainer>
      <ActivityFeed />
    </>
  );
};

// Styled Components
const AnatomyContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 20px;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.25rem;
  }
`;

const WeekSelector = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
  }
`;

const DropdownIcon = styled(MdOutlineKeyboardArrowDown)`
  transition: transform 0.2s ease;

  ${WeekSelector}:hover & {
    transform: rotate(180deg);
  }
`;

const AnatomyContent = styled.div`
  display: grid;
  grid-template-columns: auto 200px;
  gap: 1.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const HumanBodyIllustration = styled.figure`
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 300px;
  }
`;

const BodyImage = styled.img`
  height: 100%;
  object-fit: contain;
`;

const CardsWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MarkerTooltip = styled.span`
  position: absolute;
  bottom: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.text} transparent transparent
      transparent;
  }
`;

const BodyPartMarker = styled.div.attrs(({ position }) => ({
  style: {
    top: `${position.top}%`,
    left: `${position.left}%`,
  },
}))`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ theme, status }) =>
    theme.colors[status] || theme.colors.primary};
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.2);

    ${MarkerTooltip} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export default AnatomySection;
