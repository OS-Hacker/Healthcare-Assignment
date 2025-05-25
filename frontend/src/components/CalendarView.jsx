import React from "react";
import styled from "styled-components";
import {
  FaTooth,
  FaRunning,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { calendarData } from "../data/calendarData";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CalendarView = () => {
  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>{calendarData.month}</CalendarTitle>
        <CalendarNav>
          <NavButton>
            <FaChevronLeft />
          </NavButton>
          <NavButton>
            <FaChevronRight />
          </NavButton>
        </CalendarNav>
      </CalendarHeader>

      <CalendarGrid>
        {/* Day headers */}
        {days.map((day) => (
          <CalendarDayHeader key={day}>{day}</CalendarDayHeader>
        ))}

        {/* Calendar days with appointments */}
        {calendarData.days.map((day, index) => (
          <CalendarDay
            key={index}
            hasAppointments={day.appointments.some((time) => time !== "—")}
          >
            <DayNumber>{day.number}</DayNumber>
            <AppointmentTimes>
              {day.appointments.map((time, i) => (
                <TimeSlot key={i}>{time}</TimeSlot>
              ))}
            </AppointmentTimes>
          </CalendarDay>
        ))}
      </CalendarGrid>

      <AppointmentsSection>
        <AppointmentCards>
          <AppointmentCard style={{ backgroundColor: "#3734a9" }}>
            <CardContent>
              <CardTitle style={{ color: "white" }}>
                Dentist
                <FaTooth
                  size={16}
                  style={{ marginLeft: 15, color: "#d1cdb9" }}
                />
              </CardTitle>
              <CardTime style={{ color: "white" }}>09:00 - 11:00</CardTime>
              <CardPerson style={{ color: "white" }}>
                Dr. Cameron Williamson
              </CardPerson>
            </CardContent>
          </AppointmentCard>
          <AppointmentCard style={{ backgroundColor: "#DDE2F9" }}>
            <CardContent>
              <CardTitle>
                Physiotherapy
                <FaRunning size={16} style={{ marginLeft: 15 }} />
              </CardTitle>
              <CardTime>11:00 - 12:00</CardTime>
              <CardPerson>Dr. Kevin Djones</CardPerson>
            </CardContent>
          </AppointmentCard>
        </AppointmentCards>
      </AppointmentsSection>
    </CalendarContainer>
  );
};

export default CalendarView;

// Styled Components - Only responsive changes made below
const CalendarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 480px) {
    padding: 1.25rem;
    gap: 1.25rem;
  }

  @media (min-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
    max-width: 600px;
  }
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;

  @media (min-width: 480px) {
    gap: 0.5rem;
  }
`;

const CalendarDay = styled.div`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme, hasAppointments }) =>
    hasAppointments ? theme.colors.lightPrimary : "transparent"};
  transition: all 0.2s ease;
  cursor: pointer;
  padding: 0.5rem 0;
  min-height: 60px;
  background-color: #edf4ff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
    transform: translateY(-2px);
  }

  @media (min-width: 480px) {
    min-height: 70px;
  }

  @media (min-width: 768px) {
    min-height: 80px;
  }
`;

const TimeSlot = styled.div`
  font-size: 0.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  padding: 0.1rem 0.25rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
  width: 90%;
  text-align: center;

  @media (min-width: 480px) {
    font-size: 0.7rem;
  }
`;

const AppointmentCards = styled.div`
  display: flex;
  gap: 0.75rem;
  border-radius: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.gray} transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: 3px;
  }

  @media (min-width: 480px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    overflow-x: visible;
  }
`;

const AppointmentCard = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 1rem;
  padding: 0.75rem;
  min-width: 160px;
  transition: all 0.2s ease;
  flex: 1;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  @media (min-width: 480px) {
    padding: 1rem;
    min-width: 180px;
  }
`;

/* All other styled components remain exactly the same as in your original code */
const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CalendarTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  margin: 0;
`;

const CalendarNav = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const NavButton = styled.button`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.dark};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    transform: translateY(-1px);
  }
`;

const CalendarDayHeader = styled.div`
  text-align: center;
  font-size: 0.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  text-transform: uppercase;
`;

const DayNumber = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 0.75rem;
`;

const AppointmentTimes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  align-items: center;
`;

const AppointmentsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CardTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  margin: 0;
  display: flex;
  align-items: center;
`;

const CardTime = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 0;
`;

const CardPerson = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
  margin: 0;
`;
