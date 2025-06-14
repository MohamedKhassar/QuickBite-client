import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useCart } from '../hooks/useCart'
import { ShoppingCartIcon, X } from 'lucide-react'
import emtyCart from "/assets/empty_cart.png"
const CartSwiper = () => {
    const { isCartOpen, closeCart } = useCart()
    const cartRef = useRef<HTMLDivElement>(null);
    const handleClickOutside = (event: MouseEvent) => {
        if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
            closeCart();
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
            {isCartOpen &&
                <section className='bg-black/10 backdrop-blur-xs w-full fixed z-50 top-0'>
                    <motion.section
                        ref={cartRef}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 1.2 }}
                        className='lg:w-90 w-3/4 transition-[width] h-screen bg-primary shadow-2xl float-end'
                    >
                        <div>
                            <div className='flex items-center justify-between border-b border-amber-900 bg-orange-300 px-6 py-4'>
                                <h2 className="lg:text-xl text-lg font-bold flex items-center gap-2">Your <span className='font-extrabold text-amber-900'>Cart</span> <ShoppingCartIcon className='size-5 text-amber-900' /></h2>
                                <button onClick={closeCart} className="bg-amber-500 text-black rounded-xl p-2.5 transition-all duration-300 hover:bg-yellow-600 active:scale-90 scale-100">
                                    <X className="size-4" />
                                </button>
                            </div>
                            <div className='flex items-center justify-center h-full p-3'>
                                <div className='flex flex-col items-center gap-4 justify-center'>
                                    <img src={emtyCart} alt="empty_cart" className='w-1/2' />
                                    <h3 className='text-lg font-semibold text-gray-700'>Your cart is empty</h3>
                                    <p className='text-gray-500 text-center'>Add some items to your cart to get started!</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </section>
            }
        </AnimatePresence>
    )
}

export default CartSwiper
