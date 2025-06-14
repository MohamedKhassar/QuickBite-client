import { AnimatePresence, motion } from 'framer-motion'
import NavLinks from './NavLinks'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useMenu } from '../hooks/useMenu'
import { X } from 'lucide-react'

const MobileMenu = () => {
    const { isMenuOpen, closeMenu } = useMenu()
    const menuRef = useRef<HTMLDivElement>(null);
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            closeMenu();
        }
    };
    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        }
    })
    return (
        <AnimatePresence>
            {isMenuOpen &&
                <section className='bg-black/10 backdrop-blur-xs w-full lg:hidden fixed z-50 top-0'>
                    <motion.div
                        ref={menuRef}
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 1.2 }}
                        className="h-screen w-3/4 bg-primary shadow-lg p-6 flex flex-col items-stretch gap-7 relative"
                    >
                        <Link to={"/"} className="flex items-center gap-2">
                            <img className="md:size-13 size-8" src="/assets/icon.png" loading="lazy" alt="quickbite_icon" />
                            <h1 className="md:text-2xl text-xl font-semibold">Quick<span className="font-extrabold text-yellow-900">Bite</span></h1>
                        </Link>
                        <NavLinks className="!flex !flex-col mb-4" />
                        <div className="flex flex-col gap-2 items-stretch">
                            <Link to={"/signup"}><Button className='w-full'>Sign Up</Button></Link>
                            <Link to={"/login"}><Button className='w-full' variant="solid">Log In</Button></Link>
                        </div>
                        <button onClick={closeMenu} className="bg-amber-500 text-black md:rounded-2xl rounded-xl p-2.5 lg:hidden transition-all duration-300 hover:bg-yellow-600 active:scale-90 scale-100 absolute top-6 right-6">
                            <X className="md:size-5 size-4" />
                        </button>
                    </motion.div>
                </section>
            }
        </AnimatePresence>
    )
}

export default MobileMenu
