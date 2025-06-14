import type { FC } from 'react'
import { cn } from '../utils/cn'
import type { ButtonProps } from '../utils/types'


const Button:FC<ButtonProps> = ({className, variant = "outline", children ,...rest }) => {
    return (
        <button  className={cn(className,"lg:px-6 lg:py-3 px-4 py-2.5 rounded-full transition-all duration-300 capitalize cursor-pointer",
            variant === "solid" ? "bg-yellow-600 text-primary hover:bg-yellow-700" : "border border-yellow-400 hover:border-yellow-900 text-yellow-950 hover:bg-yellow-800 hover:text-white")} {...rest}>
            {children}
        </button>
    )
}

export default Button