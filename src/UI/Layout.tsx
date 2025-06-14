import React, { type ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout