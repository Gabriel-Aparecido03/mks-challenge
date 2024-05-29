import '@testing-library/jest-dom'
import { fireEvent, render } from '@/test/util'
import { ProductCart } from '..'
import { CartContext } from '@/context/cart-context'

describe('<ProductCart />', () => {
  it('should be render correctly', () => {
    const { container } = render(
      <ProductCart
        id={0}
        name='name-test'
        photo='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp'
        price={1337}
        quantity={1}
      />
    )
    expect(container).toBeInTheDocument()
  })

  it('should be render correctly and open cart when clicked', () => {

    const updateQuantity = jest.fn()

    const cx = {
      addToCart: jest.fn(),
      remove: jest.fn(),
      updateQuantity,
      finishBuy: jest.fn(),
      products: [],
      isShowCart: false,
      openCart: jest.fn(),
      closeCart: jest.fn(),
      count: 0,
      finalPrice: 0,
    }

    const { getByTestId } = render(
      <CartContext.Provider value={cx}>
        <ProductCart
          id={0}
          name='name-test'
          photo='https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp'
          price={1337}
          quantity={1}
        />
      </CartContext.Provider>
    )

    const buttonLess = getByTestId('quantity-less')
    fireEvent.click(buttonLess)

    const buttonPlus = getByTestId('quantity-plus')
    fireEvent.click(buttonPlus)

    expect(updateQuantity).toHaveBeenCalled()
  })
})