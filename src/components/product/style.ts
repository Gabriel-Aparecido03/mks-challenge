import styled from "styled-components";

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);
  border-radius: 8px 8px 0 0 ;
  height: 440px;

  @media (min-width: 768px) {
    width: 282px;
    height: 400px;
  }
`

export const ProductContent = styled.div`
  padding: 12px;
  text-align: center;
`

export const ProductPriceAndTitle = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  height: 80px;
`

export const ProductTitle = styled.p`
  font-size: 1.32rem;
  font-weight: 400;
  color: ${props => props.theme.zinc[700]};
  text-align: start;
`

export const ProductPrice = styled.span`
  background-color: ${props => props.theme.zinc[700]};
  border-radius: 6px;
  text-align: center;
  height: 26px;
  font-weight: 900;
  color: ${props => props.theme.white} ;
  padding: 4px 8px;
  display: flex;
  align-items: center;
`

export const ProductDescription = styled.p`
  font-weight: 300;
  line-height: 140%;
  color: ${props => props.theme.zinc[700]};
  font-size: 0.85rem;
  text-align: start;
`

export const ButtonAddToCard = styled.button`
  border-radius: 0 0 8px 8px;
  background-color:${props => props.theme.blue};
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  gap: 6px;
  align-items: center;

  font-size: 1em;
  color : ${props => props.theme.white};
  width: 100%;
  height: 40px;
  border: none;

  &:hover {
    opacity: .8;
    cursor: pointer;
    transition: all;
    animation-duration: 75ms;
  }
`