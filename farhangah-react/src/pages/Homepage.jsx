import Slider from "../ui/Slider";
import HotEvents from "../ui/HotEvents";
import Section from "../ui/Section";

function Homepage() {
  return (
    <div>
      <Section>
        <Slider />
      </Section>
      <Section>
        <HotEvents />
      </Section>
      {/* <Calendar /> */}
    </div>
  );
}

export default Homepage;
