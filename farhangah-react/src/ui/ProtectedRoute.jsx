import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* eslint-disable */

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2. if no authenticated user, redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. while loading, show a spinner
  if (isLoading) return <FullPage>در حال ورود به سایت</FullPage>;

  // 4. if authenticated user, render dashboard
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
