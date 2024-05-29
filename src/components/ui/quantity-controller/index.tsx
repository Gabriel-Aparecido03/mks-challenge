"use client"

import { ButtonQuantityController, QuantityController as QuantityControllerStyled, TextQuantityController } from "./style";

import { FaPlus, FaMinus } from "react-icons/fa6";

interface QuantityControllerProps {
  quantity: number
  onAdd: () => void
  onRemove: () => void
}

export function QuantityController({ onAdd, onRemove, quantity }: QuantityControllerProps) {
  return (
    <QuantityControllerStyled>
      <ButtonQuantityController data-testid="quantity-less" onClick={onRemove}>
        <FaMinus size={12} />
      </ButtonQuantityController>
      <TextQuantityController>{quantity}</TextQuantityController>
      <ButtonQuantityController data-testid="quantity-plus" onClick={onAdd}>
        <FaPlus size={12} />
      </ButtonQuantityController>
    </QuantityControllerStyled>
  )
}