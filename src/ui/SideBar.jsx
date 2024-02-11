import styled from "styled-components";

const StyleSideBar = styled.aside`
  background-color: gray;
  padding: 3.2rem 2.4rem;
  border-right: 3px solid gray;

  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export default function SideBar() {
  return <StyleSideBar>Sidebar</StyleSideBar>;
}
