import React, { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider } from 'react-query'
import { CartContextProvicer } from '@/context/cart-context'
import { queryClient } from '@/lib'
import { theme } from '@/styles/theme'

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CartContextProvicer>
          {children}
        </CartContextProvicer>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
const customRender = (ui: any, options?: any) => render(ui, { wrapper: AllTheProviders, ...options })
export * from '@testing-library/react'
export { customRender as render }