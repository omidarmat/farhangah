import styled from "styled-components";
import Slider from "../ui/Slider";
import HotEvents from "../ui/HotEvents";
import Section from "../ui/Section";

const HomePageContainer = styled.div`
  margin: 4rem 5vw;
`;

function Homepage() {
  return (
    <HomePageContainer>
      <Section>
        <Slider />
      </Section>
      <Section>
        <HotEvents />
      </Section>
      {/* <Calendar /> */}
    </HomePageContainer>
  );
}

export default Homepage;
