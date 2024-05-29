import { cleanLocalStorage, readItemAtLocalStorage, saveItemsAtLocalStorage } from "@/utils/local-storage";
import { createContext, ReactNode, useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
  quantity: number;
  total_price: number;
}

interface CartContextProvicer {
  children: ReactNode
}

interface CartContextProps {
  addToCart: (product: Product) => void
  remove: (id: number) => void
  updateQuantity: ({ id, quantity }: { id: number, quantity: number }) => void
  finishBuy: () => void
  products: Product[]
  isShowCart: boolean
  openCart: () => void
  closeCart: () => void
  count: number
  finalPrice: number
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvicer({ children }: CartContextProvicer) {

  const [products, setProducts] = useState([] as Product[])
  const [isShowCart, setIsShowCart] = useState(false)
  const [count, setCount] = useState(0)
  const [finalPrice, setFinalPrice] = useState(0)

  function calculateFinalPrice(items : Product[]) {
    let final = 0
    items.forEach(i => {
      final += i.price * i.quantity;
    })
    setFinalPrice(final)
  }

  function addToCart(product: Product) {
    const isAlreadyExists = products.find(i => i.id === product.id)
    if (isAlreadyExists) updateQuantity({ id: product.id, quantity: isAlreadyExists.quantity + 1 })
    else {
      saveItemsAtLocalStorage([...products, product])
      setProducts(prev => [...prev, product])
      setCount(products.length + 1)
      calculateFinalPrice([...products, product])
    }
  }

  function updateQuantity({ id, quantity }: { id: number, quantity: number }) {
    const index = products.findIndex(i => i.id === id)
    if (index >= 0) {
      const item = products[index]
      item.quantity = quantity
      item.total_price = quantity * item.price

      const copy = products
      copy[index] = item

      setProducts(copy)
      calculateFinalPrice(copy)
      saveItemsAtLocalStorage(copy)
      setCount(copy.length)
    }
  }

  function remove(id: number) {
    const index = products.findIndex(i => i.id === id)
    if (index >= 0) {
      const copy = products.filter(item => item.id !== id)
      setProducts(copy)
      saveItemsAtLocalStorage(copy)
      calculateFinalPrice(copy)
      setCount(copy.length)
    }
  }

  function finishBuy() {
    setProducts([])
    setFinalPrice(0)
    cleanLocalStorage()
    setCount(0)
  }

  function closeCart() {
    setIsShowCart(false)
  }

  function openCart() {
    setIsShowCart(true)
  }

  async function initializeWithLocalStorage() {
    const response = await readItemAtLocalStorage()
    if (response.length > 0) {
      setProducts(response)
      setCount(response.length)
      calculateFinalPrice(response)
    }
  }

  useEffect(() => {
    initializeWithLocalStorage()
  }, [])

  return (
    <CartContext.Provider value={{ addToCart, finishBuy, products, remove, updateQuantity, isShowCart, closeCart, openCart, count, finalPrice }} >
      {children}
    </CartContext.Provider>
  )
}