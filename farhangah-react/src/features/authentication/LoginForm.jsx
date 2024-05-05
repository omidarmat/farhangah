import { useState } from "react";
import styled from "styled-components";
import { useLogin } from "./useLogin";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TextInput = styled.input`
  direction: ltr;
  height: 3rem;
`;

const Submit = styled.input.attrs({ type: "submit" })`
  margin-top: 5rem;
  padding: 1rem 2rem;
`;

function LoginForm() {
  const [email, setEmail] = useState("omidarmat@gmail.com");
  const [password, setPassword] = useState("hotButterPopcorn");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <label htmlFor="email">آدرس ایمیل:</label>
        <TextInput
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow>
        <label htmlFor="password">رمز عبور:</label>
        <TextInput
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow>
        <Submit value="ورود" disabled={isLoading} />
      </FormRow>
    </Form>
  );
}

export default LoginForm;
