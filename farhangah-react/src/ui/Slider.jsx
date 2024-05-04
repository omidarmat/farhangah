import styled, { css } from "styled-components";
import StatusTag from "./StatusTag";
import getEvents from "../services/apiEvents";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const SliderContainer = styled.div`
  height: 50rem;
  background-color: var(--color-brand-100);
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SliderButton = styled.button`
  ${(props) =>
    props.type === "right" &&
    css`
      right: 0%;
      transform: translate(-50%, -50%);
    `}

  ${(props) =>
    props.type === "left" &&
    css`
      left: 0%;
      transform: translate(50%, -50%);
    `}
  padding: 1.5rem 1.5rem;
  color: black;
  position: absolute;
  top: 50%;
  cursor: pointer;
`;

const SliderInfo = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--color-grey-0);
  padding: 2rem 3rem;
  position: absolute;
  bottom: 0;

  display: flex;
  gap: 3rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);

  const {
    isLoading,
    data: events,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  if (error) {
    return (
      <SliderContainer>
        <p>🔴 در بارگزاری اطلاعات مشکلی پیش آمده است</p>
      </SliderContainer>
    );
  }

  let currentEvents = [];

  function handleSlideNext() {
    if (sliderIndex < currentEvents.length)
      setSliderIndex((sliderIndex) => (sliderIndex = sliderIndex + 1));
  }

  function handleSlidePrev() {
    if (sliderIndex > 1)
      setSliderIndex((sliderIndex) => (sliderIndex = sliderIndex - 1));
  }

  if (!isLoading) {
    // filter events that are currently being executed
    currentEvents = events.filter((event) => {
      const startDateTime = new Date(
        `${event.startDate} ${event.startTime}`
      ).getTime();

      const endDateTime = new Date(
        `${event.endDate} ${event.endTime}`
      ).getTime();

      const now = new Date().getTime();

      if (now >= startDateTime && now <= endDateTime) {
        return true;
      } else {
        return false;
      }
    });
  }

  return (
    <SliderContainer>
      {isLoading ? (
        <p>در حال بارگزاری...</p>
      ) : (
        <SliderImage src={currentEvents[sliderIndex - 1].photos[0].url} />
      )}
      {currentEvents.length > 1 && (
        <>
          {sliderIndex !== currentEvents.length ? (
            <SliderButton type="right" onClick={handleSlideNext}>
              &rarr;
            </SliderButton>
          ) : null}
          {sliderIndex !== 1 ? (
            <SliderButton type="left" onClick={handleSlidePrev}>
              &larr;
            </SliderButton>
          ) : null}
        </>
      )}
      <SliderInfo>
        <StatusTag type="current">در حال اجرا</StatusTag>
        <Description>
          {isLoading ? (
            <h2>در حال بارگزاری...</h2>
          ) : (
            <h2>{currentEvents[sliderIndex - 1].title}</h2>
          )}
          {isLoading ? (
            <p>درحال بارگزاری</p>
          ) : (
            <p>
              این رویداد از تاریخ فلان تا فلان از ساعت فلان تا فلان برگزار
              می‌شود
            </p>
          )}
        </Description>
      </SliderInfo>
    </SliderContainer>
  );
}

export default Slider;
