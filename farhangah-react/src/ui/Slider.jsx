import styled, { css } from "styled-components";
import StatusTag from "./StatusTag";
import getEvents from "../services/apiEvents";
import calculateCurrentEvents from "../features/calculateCurrentEvents";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const SliderContainer = styled.div`
  ${(props) =>
    props.type === "noEvent" &&
    css`
      height: 8rem;
    `}

  ${(props) =>
    props.type === "error" &&
    css`
      height: 8rem;
    `}

  ${(props) =>
    props.type === "event" &&
    css`
      height: 50rem;
    `}

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
  let currentEvents = [];

  const {
    isLoading,
    data: events,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  if (isLoading) {
    return (
      <SliderContainer type="event">
        <p>در حال بارگزاری اطلاعات رویدادها</p>
      </SliderContainer>
    );
  }

  if (error) {
    return (
      <SliderContainer type="error">
        <p>{error.message}</p>
      </SliderContainer>
    );
  }

  function handleSlideNext() {
    if (sliderIndex < currentEvents.length)
      setSliderIndex((sliderIndex) => (sliderIndex = sliderIndex + 1));
  }

  function handleSlidePrev() {
    if (sliderIndex > 1)
      setSliderIndex((sliderIndex) => (sliderIndex = sliderIndex - 1));
  }

  if (!isLoading) {
    currentEvents = calculateCurrentEvents(events);

    if (currentEvents.length === 0)
      return (
        <SliderContainer type="noEvent">
          <p>در حال حاضر هیچ رویدادی در حال اجرا نیست</p>
        </SliderContainer>
      );

    return (
      <SliderContainer type="event">
        <SliderImage
          src={
            currentEvents[sliderIndex - 1].photos !== null
              ? currentEvents[sliderIndex - 1].photos[0].url
              : "https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg"
          }
        />

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
                این رویداد از تاریخ {currentEvents[sliderIndex - 1].startDate}{" "}
                تا {currentEvents[sliderIndex - 1].endDate} از ساعت{" "}
                {currentEvents[sliderIndex - 1].startTime} تا{" "}
                {currentEvents[sliderIndex - 1].endTime} برگزار می‌شود
              </p>
            )}
          </Description>
        </SliderInfo>
      </SliderContainer>
    );
  }
}

export default Slider;
