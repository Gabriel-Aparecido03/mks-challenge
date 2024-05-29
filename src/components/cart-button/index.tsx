import { useCart } from "@/hook/use-cart";
import { CardButton as CartButtonStyled, TextCardButton } from "./style";
import { FaShoppingCart } from "react-icons/fa";

export function CartButton() {

  const { openCart, count } = useCart()

  return (
    <CartButtonStyled onClick={openCart}>
      <FaShoppingCart />
      <TextCardButton>{count}</TextCardButton>
    </CartButtonStyled>
  )
}