"use client"

import { CartContextProvicer } from "@/context/cart-context";
import { queryClient } from "@/lib";
import { theme } from "@/styles/theme";
import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

export function Provider({ children }: { children: ReactNode }) {
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