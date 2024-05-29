import Image from 'next/image';
import {
  ButtonAddToCard,
  ProductContent,
  ProductDescription,
  ProductPrice,
  ProductPriceAndTitle,
  Product as ProductStyled,
  ProductTitle
} from './style'

import { LuShoppingBag } from "react-icons/lu";
import { convertCoin } from '@/utils/convert-coin';
import { useCart } from '@/hook/use-cart';

interface ProductProps {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
}

export function Product({ description, id, name, photo, price }: ProductProps) {

  const { addToCart, openCart } = useCart()

  return (
    <ProductStyled>
      <ProductContent>
        <Image
          width={150}
          height={150}
          alt=''
          src={photo}
        />
        <ProductPriceAndTitle>
          <ProductTitle>{name}</ProductTitle>
          <ProductPrice> {convertCoin(price)} </ProductPrice>
        </ProductPriceAndTitle>
        <ProductDescription>{description}</ProductDescription>
      </ProductContent>
      <ButtonAddToCard
        onClick={() => {
          addToCart({ description, id, name, photo, price, quantity: 1, total_price: price })
          openCart()
        }}
      >
        <LuShoppingBag />
        <p>Comprar</p>
      </ButtonAddToCard>
    </ProductStyled>
  )
}