import React, { type ReactNode } from 'react'

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className='lg:max-w-5xl xl:max-w-screen-2xl md:max-w-3xl sm:max-w-xl max-w-s md:mx-auto mx-3 relative'>
                {children}
        </div>
    )
}

export default Container