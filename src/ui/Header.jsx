import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: green;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid gray;

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

export default function Header() {
  return <StyledHeader>header</StyledHeader>;
}
