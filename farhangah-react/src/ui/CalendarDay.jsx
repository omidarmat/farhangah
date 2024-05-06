import styled, { css } from "styled-components";

const Container = styled.div`
  ${(props) =>
    props.type === "event" &&
    css`
      border: 1px solid var(--color-brand-700);
    `}
  height: 4rem;
  width: 4rem;
  padding: 2rem 2rem;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  cursor: pointer;
`;

const Notif = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: var(--color-red-700);
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  right: 0;

  transform: translate(50%, -50%);
`;

const DayNum = styled.div`
  color: var(--color-grey-600);
`;

/* eslint-disable */

function CalendarDay({ eventNum, children }) {
  return (
    <Container type={eventNum && "event"}>
      {eventNum && <Notif>{eventNum}</Notif>}
      <DayNum>{children}</DayNum>
    </Container>
  );
}

export default CalendarDay;
