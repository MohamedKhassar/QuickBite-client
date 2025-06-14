import { Link } from "react-router-dom"
import NavLinks from "../UI/NavLinks"
import Button from "../UI/Button"
import { Menu, ShoppingBag } from "lucide-react"
import { useMenu } from "../hooks/useMenu"
import { useCart } from "../hooks/useCart"

const Navbar = () => {
  const { toggleMenu } = useMenu()
  const { toggleCart } = useCart()
  return (
    <header className="bg-white/10 backdrop-blur-3xl rounded-full lg:px-9 px-5 py-3 md:mx-auto mt-4 flex justify-between items-center shadow-xl sticky top-0 z-40">

      <Link to={"/"} className="flex items-center gap-2">
        <img className="md:size-13 size-8" src="/assets/icon.png" loading="lazy" alt="quickbite_icon" />
        <h1 className="md:text-2xl text-xl font-semibold">Quick<span className="font-extrabold text-yellow-900">Bite</span></h1>
      </Link>
      <NavLinks className="hidden lg:block" />
      <div className="flex items-center gap-x-3">
        <div className="gap-x-5 flex items-center">
          <Button className="!p-2 !rounded-xl" variant="solid" onClick={toggleCart}>
            <ShoppingBag className="lg:size-5 size-4" />
          </Button>
          <Link className="hidden lg:flex" to="/signup">
            <Button>sign up</Button>
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="bg-amber-500 text-primary rounded-xl p-2 lg:hidden transition-all duration-300 hover:bg-yellow-600 active:scale-90 scale-100">
          <Menu className="size-4" />
        </button>
      </div>
    </header>
  )
}

export default Navbar