import styled from "styled-components";

export const ProductCart = styled.div`
  position: relative;
  border-radius: 8px;
  width: 250px;
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-direction: column;

  background-color: ${props => props.theme.white};
  padding: 6px;

  @media (min-width:768px) {
    flex-direction: row;
    width: 385px;
    margin-top: 12px;
    gap: 16px;
  }
`

export const ProductCartTitle = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.zinc[700]};
  font-weight: 400;
  text-align: center;

  @media (min-width:768px) {
    font-size: .9rem;
    min-width: 60px;
  }
`

export const ProductCartQuantityAndPrice = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width:768px) {
    align-items: center;
  }
`

export const ProductCartHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`

export const ProductCartHeaderDeleteProduct = styled.button`
  all: unset;
  position: absolute;
  top: 5%;
  right: 10%;

  &:hover {
    cursor: pointer;
  }

  @media (min-width:768px) {
    top: -9%;
    right: -3%;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
`

export const ProductCartPrice = styled.span`
  background-color: ${props => props.theme.zinc[700]};
  border-radius: 6px;
  text-align: center;
  height: 30px;
  font-weight: 900;
  color: ${props => props.theme.white} ;
  padding: 6px 12px;
  display: flex;
  align-items: center;

  @media (min-width:768px) {
    background-color: ${props => props.theme.white} ;
    color: ${props => props.theme.zinc[700]};
  }
`