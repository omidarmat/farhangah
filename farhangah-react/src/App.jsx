import Homepage from "./pages/Homepage";
import Header from "./ui/Header";
import Events from "./pages/Events";
import GlobalStyle from "./styles/GlobalStyles";
import Subscription from "./pages/Subscription";
import Products from "./pages/Products";
import Tutorials from "./pages/Tutorials";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ui/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import styled from "styled-components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const Main = styled.main`
  margin: 0 auto;
  max-width: 170rem;
`;

const AppLayout = styled.div`
  margin: 0 5vw;
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Main>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/events" element={<Events />} />
              <Route path="/products" element={<Products />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AppLayout>
        </Main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
