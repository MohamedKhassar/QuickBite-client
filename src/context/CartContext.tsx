// context/MenuContext.tsx
import { createContext, useState, type ReactNode } from 'react'
import type { CartContextType } from '../utils/types'



export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)

    const toggleCart = () => setIsCartOpen((prev) => !prev)
    const closeCart = () => setIsCartOpen(false)

    return (
        <CartContext.Provider value={{isCartOpen, toggleCart, closeCart }}>
            {children}
        </CartContext.Provider>
    )
}


