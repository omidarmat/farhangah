import { useQuery } from "@tanstack/react-query";
import getEvents from "../services/apiEvents";
import styled from "styled-components";
import StatusTag from "./StatusTag";

const ComingSoonEventsContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;

const ComingSoonEventCard = styled.div`
  height: 50rem;
  border-radius: 2rem;
  background-color: aqua;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ComingSoonEventPoster = styled.img`
  object-fit: cover;
  height: 100%;
`;

const ComingSoonEventDescription = styled.div`
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

  if (error)
    return (
      <ComingSoonEventsContainer>
        <p>🔴 در بارگزاری اطلاعات رویدادها مشکلی پیش آمده است</p>
      </ComingSoonEventsContainer>
    );

  console.log(events);

  let sortedEvents = [];

  if (!isLoading) {
    sortedEvents = events
      .filter((event) => {
        const now = new Date().getTime();
        const eventStart = new Date(`${event.startDate} ${event.startTime}`);
        return now < eventStart;
      })
      .sort((eventA, eventB) => {
        const now = new Date().getTime();
        const eventAStart = new Date(
          `${eventA.startDate} ${eventA.startTime}`
        ).getTime();
        const eventBStart = new Date(
          `${eventB.startDate} ${eventB.startTime}`
        ).getTime();

        if (eventAStart - now < eventBStart - now) return -1;
        if (eventAStart - now > eventBStart - now) return 1;
        if (eventAStart - now === eventBStart - now) return 0;
      });

    if (sortedEvents.length > 3) {
      sortedEvents.splice(3);
    }
  }

  console.log("SORTED:", sortedEvents);

  return (
    <ComingSoonEventsContainer>
      {isLoading ? (
        <p>در حال بارگزاری رویدادها...</p>
      ) : (
        sortedEvents.map((event) => (
          <ComingSoonEventCard key={event.id}>
            <ComingSoonEventPoster src={event.poster} />
            <ComingSoonEventDescription>
              <StatusTag type="soon">به زودی</StatusTag>
              <p>
                این همایش از تاریخ {event.startDate} تا {event.endDate} برگزار
                می‌شود
              </p>
            </ComingSoonEventDescription>
          </ComingSoonEventCard>
        ))
      )}
    </ComingSoonEventsContainer>
  );
}

export default HotEvents;
