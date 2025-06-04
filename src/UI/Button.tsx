import React, { type ReactNode } from 'react'
import { cn } from '../utils/cn'

const Button = ({ variant = "outline", children }: { variant?: "solid" | "outline", children: ReactNode }) => {
    return (
        <button className={cn("lg:px-6 lg:py-3 px-4 py-2.5 rounded-full lg:w-fit w-full transition-all duration-300 capitalize",
            variant === "solid" ? "bg-yellow-600 text-primary hover:bg-yellow-700" : "border border-yellow-400 hover:border-yellow-900 text-yellow-950 hover:bg-yellow-800 hover:text-white")}>
            {children}
        </button>
    )
}

export default Button