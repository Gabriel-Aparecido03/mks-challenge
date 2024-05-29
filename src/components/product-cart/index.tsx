"use client"

import Image from 'next/image'
import {
  ProductCart as ProductCartStyled,
  ProductCartPrice,
  ProductCartQuantityAndPrice,
  ProductCartTitle,
  ProductCartHeader,
  ProductCartHeaderDeleteProduct
} from './style'
import { QuantityController } from '../ui'
import { convertCoin } from '@/utils/convert-coin';
import { useCart } from '@/hook/use-cart';
import { IoClose } from "react-icons/io5";
interface ProductCartProps {
  id: number;
  name: string;
  photo: string;
  price: number;
  quantity: number;
}

export function ProductCart({ id, name, photo, price, quantity }: ProductCartProps) {

  const { updateQuantity,remove } = useCart()

  function handleIncreaseQuantity() {
    updateQuantity({ id, quantity: quantity + 1 })
  }

  function handleDecreaseQuantity() {
    if (quantity === 1) return
    updateQuantity({ id, quantity: quantity - 1 })
  }

  return (
    <ProductCartStyled>
      <ProductCartHeader>
        <Image
          alt=''
          width={80}
          height={96}
          src={photo}
        />
        <ProductCartHeaderDeleteProduct onClick={() => {
          remove(id)
        }}>
          <IoClose size={32} />
        </ProductCartHeaderDeleteProduct>
      </ProductCartHeader>
      <ProductCartTitle>{name}</ProductCartTitle>
      <ProductCartQuantityAndPrice>
        <QuantityController
          onAdd={handleIncreaseQuantity}
          onRemove={handleDecreaseQuantity}
          quantity={quantity}
        />
        <ProductCartPrice>
          {convertCoin(price)}
        </ProductCartPrice>
      </ProductCartQuantityAndPrice>

    </ProductCartStyled>
  )
}