import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 2rem;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Login() {
  return (
    <LoginContainer>
      <Button>ورود | ثبت نام</Button>
      <p>چهارشنبه، 12 اردیبهشت</p>
    </LoginContainer>
  );
}

export default Login;
