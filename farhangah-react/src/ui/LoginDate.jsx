import styled from "styled-components";
import { Link } from "react-router-dom";

// const Button = styled.button`
//   padding: 1rem 2rem;
//   cursor: pointer;
// `;

const LoginLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function LoginDate() {
  const now = new Date().toLocaleDateString("fa-IR", {
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <LoginLinkContainer>
      <Link to="/login">ورود | ثبت نام</Link>
      <p>{now}</p>
    </LoginLinkContainer>
  );
}

export default LoginDate;
