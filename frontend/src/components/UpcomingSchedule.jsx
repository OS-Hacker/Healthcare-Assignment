import React from "react";
import styled from "styled-components";
import { upcomingAppointments } from "../data/appointments";

const UpcomingSchedule = () => {
  return (
    <UpcomingScheduleContainer>
      <Header>
        <Title>The Upcoming Schedule</Title>
      </Header>

      <ScheduleList>
        {upcomingAppointments.map((daySchedule, index) => (
          <AppointmentsSection key={index}>
            <DayHeader>
              <DayTitle>On {daySchedule.day}</DayTitle>
            </DayHeader>
            <AppointmentContainer>
              {daySchedule.appointments.map((appointment, idx) => {
                const IconComponent = appointment.icon;
                return (
                  <AppointmentCard key={idx} color={appointment.color}>
                    <CardContent>
                      <CardTitle>{appointment.title}</CardTitle>
                      <CardTime>{appointment.time}</CardTime>
                    </CardContent>
                    <IconContainer color={appointment.color}>
                      <IconComponent size={16} />
                    </IconContainer>
                  </AppointmentCard>
                );
              })}
            </AppointmentContainer>
          </AppointmentsSection>
        ))}
      </ScheduleList>
    </UpcomingScheduleContainer>
  );
};

// Styled Components (remain the same as in your original code)
const UpcomingScheduleContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  height: 100%;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.75rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  margin: 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const AppointmentsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const DayHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DayTitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const AppointmentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.75rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const AppointmentCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.gray};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-right: 0.5rem;
`;

const CardTitle = styled.h5`
  font-size: 12px;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.colors.dark};

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const CardTime = styled.p`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export default UpcomingSchedule;
