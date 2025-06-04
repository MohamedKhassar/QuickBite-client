import { Link } from "react-router-dom"
import NavLinks from "../UI/NavLinks"
import Button from "../UI/Button"
import { Menu } from "lucide-react"
import { useMenu } from "../hooks/useMenu"

const Navbar = () => {
  const { toggleMenu } = useMenu()
  return (
    <header className="bg-white/10 backdrop-blur-3xl rounded-full px-9 py-3 mt-4 flex justify-between items-center shadow-xl sticky top-0 z-40">

      <Link to={"/"} className="flex items-center gap-2">
        <img className="md:size-13 size-8" src="/assets/icon.png" loading="lazy" alt="quickbite_icon" />
        <h1 className="md:text-2xl text-xl font-semibold">Quick<span className="font-extrabold text-yellow-900">Bite</span></h1>
      </Link>
      <NavLinks className="hidden lg:block" />
      <div className="space-x-5 hidden lg:block">
        <Button>sign up</Button>
        <Button variant="solid">login In</Button>
      </div>
      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="bg-amber-500 text-black rounded-2xl p-2.5 lg:hidden transition-all duration-300 hover:bg-yellow-600 active:scale-90 scale-100">
        <Menu className="size-5" />
      </button>
    </header>
  )
}

export default Navbar