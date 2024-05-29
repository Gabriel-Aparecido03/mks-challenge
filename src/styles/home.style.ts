import styled from "styled-components";

export const Main = styled.main`
  flex: 1;
  display: flex;
  height: 100%;
`

export const ProductsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  width: 90%;
  margin-inline: auto;
  margin-block: 16px;

  @media (min-width:768px) {
    margin-block: 64px;
  }
`