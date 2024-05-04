import styled, { css } from "styled-components";

const StatusTag = styled.div`
  ${(props) =>
    props.type === "current" &&
    css`
      background-color: var(--color-green-100);
      border: 1px solid var(--color-green-700);
      color: var(--color-green-700);
    `}

  ${(props) =>
    props.type === "soon" &&
    css`
      background-color: var(--color-yellow-100);
      border: 1px solid var(--color-yellow-700);
      color: var(--color-yellow-700);
    `}

    ${(props) =>
    props.type === "past" &&
    css`
      background-color: var(--color-red-100);
      border: 1px solid var(--color-red-700);
      color: var(--color-red-700);
    `}

    font-size: 2rem;
  font-weight: 500;
  border-radius: 1000px;
  padding: 5px 1rem;
  display: inline-block;
  align-self: flex-start;
  flex: 0 0 auto;
`;

export default StatusTag;
