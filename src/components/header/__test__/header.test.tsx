import '@testing-library/jest-dom'
import { fireEvent, render } from '@/test/util'
import { Header } from '..'
import { CartContext } from '@/context/cart-context'

describe('<Header />', () => {
  it('should be render correctly', () => {
    const { container } = render(<Header />)
    expect(container).toBeInTheDocument()
  })

  it('should be render correctly and open cart when clicked', () => {

    const openCart = jest.fn()

    const cx = {
      addToCart: jest.fn(),
      remove: jest.fn(),
      updateQuantity: jest.fn(),
      finishBuy: jest.fn(),
      products: [],
      isShowCart: false,
      openCart,
      closeCart: jest.fn(),
      count: 0,
      finalPrice: 0,
    }

    const { getByRole } = render(
      <CartContext.Provider value={cx}>
        <Header />
      </CartContext.Provider>
    )

    const button = getByRole('button')
    fireEvent.click(button)

    expect(openCart).toHaveBeenCalled()
  })
})