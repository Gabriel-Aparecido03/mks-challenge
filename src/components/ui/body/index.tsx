"use client"

import { HTMLAttributes, ReactNode } from "react";
import { Body as BodyStyled } from './style'


export function Body(props: HTMLAttributes<HTMLBodyElement>) {
  return (
    <BodyStyled {...props}>
      {props.children}
    </BodyStyled>
  )
}