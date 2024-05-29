import styled from "styled-components";

export const CardButton = styled.button`
  background-color: ${props => props.theme.white};
  height: 26px;
  border-radius: 8px;
  padding: 8px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  border: none;
  width: 50px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width:768px) {
    height: 42px;
  }
`

export const TextCardButton = styled.span`
  font-weight: 900;
  color:${props => props.theme.black};
  font-size: small;
`