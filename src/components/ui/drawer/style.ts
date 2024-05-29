import { motion } from "framer-motion";
import styled from "styled-components";

export const DrawerShadow = styled.div`
  position: fixed;
  background-color: rgba(0,0,0,0.8);
  height: 100vh;
  width: 100vw;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Drawer = styled(motion.div)`
  width: 320px;
  height: 100vh;
  background-color:${props => props.theme.blue};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 99999999999;
  @media (min-width:768px) {
    width: 486px;
  }
`

export const CollectionProducts = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media (min-width:768px) {
    overflow-y: scroll;
    max-height: 60vh;
  }
`

export const DrawerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`

export const DrawerHeaderText = styled.p`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${props => props.theme.white};
  width: 60%;
  
`

export const DrawerHeaderCloseButton = styled.button`
  color: ${props => props.theme.blue};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${props => props.theme.black};
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

export const FooterDrawer = styled.footer`
  display: flex;
  flex-direction: column;
`

export const PriceText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-weight: 700;
  color: ${props => props.theme.white};
  padding: 12px;
  font-size: 1.5rem;
`

export const ButtonFinish = styled.button`
  height: 64px;
  background-color: ${props => props.theme.black};
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  width: 100%;
  border: none;
  color: ${props => props.theme.white};

  @media (min-width:768px) {
    height: 97px;
  }

  &:hover {
    opacity: 0.9;
    transition: all;
    animation-duration: 75ms;
    cursor: pointer;
  }
`