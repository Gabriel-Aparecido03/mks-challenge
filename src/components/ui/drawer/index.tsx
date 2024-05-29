"use client"

import {
  ButtonFinish,
  CollectionProducts,
  DrawerHeader,
  DrawerHeaderCloseButton,
  DrawerHeaderText,
  DrawerShadow,
  Drawer as DrawerStyled,
  FooterDrawer,
  PriceText
} from "./style";
import { IoClose } from "react-icons/io5";
import { useCart } from "@/hook/use-cart";
import { convertCoin } from "@/utils/convert-coin";
import { ProductCart } from "@/components/product-cart";

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function Drawer({ isOpen, onClose }: DrawerProps) {

  const { products, finalPrice, finishBuy } = useCart()

  return (
    isOpen && <DrawerShadow>
      <DrawerStyled animate={{ x: 0 }} transition={{ ease: "easeOut", duration: .5, from: 500 }}>
        <div>
          <DrawerHeader>
            <DrawerHeaderText>Carrinho de compras</DrawerHeaderText>
            <DrawerHeaderCloseButton onClick={onClose}>
              <IoClose />
            </DrawerHeaderCloseButton>
          </DrawerHeader>
          <CollectionProducts>
            {products.map(i =>
              <ProductCart
                id={i.id}
                name={i.name}
                photo={i.photo}
                price={i.total_price}
                quantity={i.quantity}
                key={i.id}
              />
            )}
          </CollectionProducts>
        </div>
        <FooterDrawer>
          <PriceText>
            <span>Total:</span>
            <span>{convertCoin(finalPrice)}</span>
          </PriceText>
          <ButtonFinish onClick={finishBuy}>
            Finalizar Comprar
          </ButtonFinish>
        </FooterDrawer>
      </DrawerStyled>
    </DrawerShadow>
  )
}