import type { HTMLAttributes, ReactNode } from "react"

export type MenuContextType = {
    isMenuOpen: boolean
    toggleMenu: () => void
    closeMenu: () => void
}
export type CartContextType = {
    isCartOpen: boolean
    toggleCart: () => void
    closeCart: () => void
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  children: ReactNode;
}