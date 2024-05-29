import '@testing-library/jest-dom'
import { fireEvent, getByRole, getByText, render, screen } from '@/test/util'
import { Product } from '..'
import { convertCoin } from '@/utils/convert-coin'
import { CartContext, CartContextProvicer } from '@/context/cart-context'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/lib'

describe('<Product />', () => {
  it('should be render correctly', () => {
    const { container } = render(<Product description='' id={0} name='' photo='' price={0} />)
    expect(container).toBeInTheDocument()
  })

  it('should be render correctly with right props', () => {
    const { getByText } = render(
      <Product
        description='description-test'
        id={0}
        name='name-test'
        photo='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp'
        price={1337}
      />
    )

    const description = getByText('description-test')
    const title = getByText('name-test')
    
    expect(description).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })

  it('should be add to card when click at the button', () => {

    const addToCart = jest.fn()

    const cx = {
      addToCart,
      remove: jest.fn(),
      updateQuantity: jest.fn(),
      finishBuy: jest.fn(),
      products: [],
      isShowCart: false,
      openCart: jest.fn(),
      closeCart: jest.fn(),
      count: 0,
      finalPrice: 0,
    }

    const { getByRole } = render(
      <CartContext.Provider value={cx}>
        <Product
          description='description-test'
          id={0}
          name='name-test'
          photo='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp'
          price={1337}
        />
      </CartContext.Provider>
    )

    const button = getByRole('button')
    fireEvent.click(button)

    expect(addToCart).toHaveBeenCalled()
  })
})