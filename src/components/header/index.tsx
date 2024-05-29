'use client'
import Image from 'next/image'
import logoSvg from '../../assets/logo-mks.svg'
import { Header as HeaderStyled } from './style'
import { CartButton } from '@/components/cart-button'
import { Drawer } from '../ui/drawer'
import { useCart } from '@/hook/use-cart'

export function Header() {

  const { isShowCart, closeCart } = useCart()

  return (
    <HeaderStyled>
      <Image src={logoSvg} alt="" />
      <CartButton />
      <Drawer isOpen={isShowCart} onClose={closeCart}/>
    </HeaderStyled>
  )
}