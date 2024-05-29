import styled from "styled-components";

export const Footer = styled.footer`
  width: 100vw;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.zinc[300]};
`

export const FooterText = styled.span`
  font-weight: 400;
  font-size: small;
  color: ${props => props.theme.black};
`