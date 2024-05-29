import styled from "styled-components";

export const QuantityController = styled.div`
  border: 1px solid #BFBFBF;
  border-radius: 4px;
  padding: 2px;
  padding-inline: 6px;
  display: flex;
  justify-content: space-between;
  gap: 6px;
  align-items: center;

  font-size: 1.25rem;
  font-weight: 500;

  height: 40px;
  width: 100px;

  @media (min-width:768px) {
    height: 20px;
    width: 50px;
  }
`

export const ButtonQuantityController = styled.div`
  border: none;
  padding: 0;
  margin: 0;
  background: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;

  &:hover {
    cursor: pointer;
  }
  
`

export const TextQuantityController = styled.p`
  border-left: 1px solid #BFBFBF;
  border-right: 1px solid #BFBFBF;
  width: 40%;
  @media (min-width:768px) {
    font-size: .5rem;
  }
`