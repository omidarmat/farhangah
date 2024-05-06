export default function calculateCurrentEvents(eventsArr) {
  const currentEvents = eventsArr.filter((event) => {
    const startDateTime = new Date(
      `${event.startDate} ${event.startTime}`
    ).getTime();

    const endDateTime = new Date(`${event.endDate} ${event.endTime}`).getTime();

    const now = new Date().getTime();

    if (now >= startDateTime && now <= endDateTime) {
      return true;
    } else {
      return false;
    }
  });

  return currentEvents;
}
