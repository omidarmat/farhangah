import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";

const LoginFormContainer = styled.div`
  background-color: #c8c8f3;
  border-radius: 10px;

  width: 50%;
  margin: 0 auto;
  padding: 5rem 2rem;

  display: flex;
  justify-content: center;
`;

function Login() {
  return (
    <LoginFormContainer>
      <LoginForm />
    </LoginFormContainer>
  );
}

export default Login;
