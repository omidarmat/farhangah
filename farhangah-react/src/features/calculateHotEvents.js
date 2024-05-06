export default function calculateHotEvents(eventsArr) {
  const sortedHotEvents = eventsArr
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

  return sortedHotEvents;
}
