import PageNav from "./PageNav";
import Logo from "./Logo";
import styled from "styled-components";
import Login from "./Login";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 4rem;
  justify-content: space-between;
  padding: 3rem 4vw;
  border-bottom: 1px solid var(--color-brand-500);
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <PageNav />
      <Login />
    </HeaderContainer>
  );
}

export default Header;
