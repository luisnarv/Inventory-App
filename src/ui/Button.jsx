/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyleButton = styled.button`
  background: none;
  border: none;
`;

export default function Button({ children }) {
  return <StyleButton>{children}</StyleButton>;
}
