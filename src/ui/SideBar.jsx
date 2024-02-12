import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyleSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 3px solid var(--color-grey-100);

  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const StyleNav = styled(NavLink)`
  &:active,
  &.active:link,
  &.active:visited {
    background-color: #dcdcdc;
  }
  padding: 10px;
  border-radius: 5px;
`;

export default function SideBar() {
  return (
    <StyleSideBar>
      <img src="Logo" alt="Logo" height={100} />

      <StyleNav to="/dashboard">
        <span>Dashboard</span>
      </StyleNav>
      <StyleNav to="inventory">
        <span>inventory</span>
      </StyleNav>
    </StyleSideBar>
  );
}
