import { CartContext } from "@/context/cart-context";
import { useContext } from "react";

export function useCart() {
  const hook = useContext(CartContext)
  return hook
}