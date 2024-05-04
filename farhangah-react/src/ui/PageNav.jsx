import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  flex: 1 0 60rem;
`;
const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`;

const SearchBar = styled.input.attrs({ type: "text" })`
  border: none;
  background-color: var(--color-grey-200);
  width: 100%;
  height: 3rem;
  border-radius: 5px;
`;

function PageNav() {
  return (
    <NavBar>
      <div>
        <SearchBar />
      </div>
      <nav>
        <NavUl>
          <li>
            <NavLink to="/">خانه</NavLink>
          </li>
          <li>
            <NavLink to="/events">رویدادها</NavLink>
          </li>
          <li>
            <NavLink to="/products">محصولات</NavLink>
          </li>
          <li>
            <NavLink to="/tutorials">دوره آموزشی</NavLink>
          </li>
          <li>
            <NavLink to="/subscription">اشتراک</NavLink>
          </li>
        </NavUl>
      </nav>
    </NavBar>
  );
}

export default PageNav;
