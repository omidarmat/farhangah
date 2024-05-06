import Slider from "../ui/Slider";
import HotEvents from "../ui/HotEvents";
import Section from "../ui/Section";
import EventsCalendar from "../ui/EventsCalendar";

function Homepage() {
  return (
    <div>
      <Section>
        <Slider />
      </Section>
      <Section>
        <HotEvents />
      </Section>
      <Section>
        <EventsCalendar />
      </Section>
    </div>
  );
}

export default Homepage;
