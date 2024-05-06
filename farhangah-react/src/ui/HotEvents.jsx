import { useQuery } from "@tanstack/react-query";
import getEvents from "../services/apiEvents";
import styled from "styled-components";
import StatusTag from "./StatusTag";
import calculateHotEvents from "../features/calculateHotEvents";

const Container = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;

const EventCard = styled.div`
  height: 50rem;
  border-radius: 2rem;
  background-color: aqua;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const EventPoster = styled.img`
  object-fit: cover;
  height: 100%;
`;

const EventDescription = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1.4rem 1rem;
  font-size: 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
`;

function HotEvents() {
  const {
    isLoading,
    data: events,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  let sortedEvents = [];

  if (isLoading)
    return (
      <Container>
        <p>در حال بارگزاری اطلاعات رویدادها</p>
      </Container>
    );

  if (error)
    return (
      <Container>
        <p>{error.message}</p>
      </Container>
    );

  if (!isLoading) {
    sortedEvents = calculateHotEvents(events);

    if (sortedEvents.length > 3) {
      sortedEvents.splice(3);
    }

    return (
      <Container>
        {sortedEvents.map((event) => (
          <EventCard key={event.id}>
            <EventPoster src={event.poster} />
            <EventDescription>
              <StatusTag type="soon">به زودی</StatusTag>
              <p>
                این همایش از تاریخ {event.startDate} تا {event.endDate} برگزار
                می‌شود
              </p>
            </EventDescription>
          </EventCard>
        ))}
      </Container>
    );
  }
}

export default HotEvents;
