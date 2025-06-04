import React, { type ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='h-[200vh]'>
            {children}
        </div>
    )
}

export default Layout