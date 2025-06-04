// context/MenuContext.tsx
import { createContext, useState, type ReactNode } from 'react'
import type { MenuContextType } from '../utils/types'



export const MenuContext = createContext<MenuContextType | undefined>(undefined)

export const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen((prev) => !prev)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu }}>
            {children}
        </MenuContext.Provider>
    )
}


