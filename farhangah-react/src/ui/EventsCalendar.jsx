import styled from "styled-components";
import calculateFirstWeekdayOfMonth from "../features/calculateFirstWeekdayOfMonth";
import calculateCurrentMonthStr from "../features/calculateCurrentMonthStr";
import CalendarDay from "./CalendarDay";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getEvents from "../services/apiEvents";

const Container = styled.div`
  display: flex;
  gap: 3rem;
`;

const CalendarContainer = styled.div`
  flex: 0 0 50rem;
`;

const CalendarHeader = styled.div`
  background-color: var(--color-brand-2-600);
  display: flex;
  justify-content: center;
  gap: 3rem;

  margin-bottom: 1.5rem;
`;

const CalendarTable = styled.div``;

const EventsContainer = styled.div`
  flex: 1 0 70rem;
`;

const CalendarWeekdaysRow = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 2rem;
  justify-items: center;

  margin-bottom: 3rem;
`;

const CalendarWeekday = styled.li`
  color: var(--color-grey-600);
  font-weight: 700;
`;

const CalendarDaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 2rem;
  row-gap: 3rem;
  justify-items: center;
`;

function Calendar() {
  const [currentMonthNum, setCurrentMonthNum] = useState(
    Number(
      new Intl.DateTimeFormat("fa-IR-u-nu-latn", {
        month: "numeric",
      }).format(new Date())
    )
  );

  const currentMonthStr = calculateCurrentMonthStr(currentMonthNum);

  const firstWeekdayOfMonth = calculateFirstWeekdayOfMonth(currentMonthNum);

  function handleMonthInc() {
    if (currentMonthNum < 12)
      setCurrentMonthNum((currentMonthNum) => currentMonthNum + 1);
  }

  function handleMonthDec() {
    if (currentMonthNum > 1)
      setCurrentMonthNum((currentMonthNum) => currentMonthNum - 1);
  }

  // TODO
  const {
    isLoading,
    data: events,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  if (isLoading) {
    return <p>در حال بارگزاری اطلاعات رویدادها</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  function calculateCurrentDayEventsNum(events, currentlyRenderingDay) {
    // 1. filter events (event =>  event month (georgian month) === currently displayed month (jalaali month))
    // TODO You probably need to write a separate feature that receives georgian date and converts to jalaali
    // TODO TODO TODO refactoring for date conversions
    const currentMonthEvents = events.filter(
      (event) =>
        Number(
          new Intl.DateTimeFormat("fa-IR-u-nu-latn", {
            month: "numeric",
          }).format(new Date(event.startDate))
        ) === currentMonthNum
    );

    // 2. filter current month events (event => event day === currently rendering day)
    return currentMonthEvents.filter(
      (event) =>
        Number(
          new Intl.DateTimeFormat("fa-IR-u-nu-latn", {
            day: "numeric",
          }).format(new Date(event.startDate))
        ) === currentlyRenderingDay
    ).length;
  }

  if (!isLoading) {
    // 3. we have now made eventNum available and can be used in rendering <CalendarDay>
    return (
      <div>
        <CalendarHeader>
          <button onClick={handleMonthInc}>&rarr;</button>
          <p>{currentMonthStr}</p>
          <button onClick={handleMonthDec}>&larr;</button>
        </CalendarHeader>
        <CalendarTable>
          <CalendarWeekdaysRow>
            <CalendarWeekday>شنبه</CalendarWeekday>
            <CalendarWeekday>یکشنبه</CalendarWeekday>
            <CalendarWeekday>دوشنبه</CalendarWeekday>
            <CalendarWeekday>سه‌شنبه</CalendarWeekday>
            <CalendarWeekday>چهارشنبه</CalendarWeekday>
            <CalendarWeekday>پنج‌شنبه</CalendarWeekday>
            <CalendarWeekday>جمعه</CalendarWeekday>
          </CalendarWeekdaysRow>
          <CalendarDaysGrid>
            {Array.from({
              length:
                currentMonthNum <= 6 ? 31 : currentMonthNum === 12 ? 29 : 30,
            }).map((_, i) => (
              <div
                key={i + 1}
                style={i === 0 ? { gridColumn: firstWeekdayOfMonth } : {}}
              >
                <CalendarDay
                  eventNum={calculateCurrentDayEventsNum(events, i + 1) || null}
                >
                  {i + 1}
                </CalendarDay>
              </div>
            ))}
          </CalendarDaysGrid>
        </CalendarTable>
      </div>
    );
  }
}

function Events() {
  return <div>رویدادها</div>;
}

function EventsCalendar() {
  return (
    <Container>
      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
      <EventsContainer>
        <Events />
      </EventsContainer>
    </Container>
  );
}

export default EventsCalendar;
