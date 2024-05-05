import PageNav from "./PageNav";
import Logo from "./Logo";
import styled from "styled-components";
import LoginDate from "./LoginDate";

const HeaderContainer = styled.header`
  padding: 3rem 4vw;
  border-bottom: 1px solid var(--color-brand-500);
  margin-bottom: 4rem;
`;

const HeaderInternals = styled.div`
  display: flex;
  align-items: center;
  gap: 4vw;
  justify-content: space-between;
  max-width: 150rem;
  margin: 0 auto;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderInternals>
        <Logo />
        <PageNav />
        <LoginDate />
      </HeaderInternals>
    </HeaderContainer>
  );
}

export default Header;
