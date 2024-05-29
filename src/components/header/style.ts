import styled from "styled-components";

export const Header = styled.header`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.blue};
  padding-inline: 1rem;

  @media (min-width:768px) {
    height: 100px;
  }
`