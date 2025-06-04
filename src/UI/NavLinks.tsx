import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { links } from "../utils/data";
const NavLinks = ({ className }: { className?: string }) => {

    const { pathname, hash } = useLocation()
    return (
        <nav className={className}>
            <ul className="flex lg:flex-row flex-col w-fit gap-6">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link to={link.path} className={cn("flex flex-col group w-min transition-all duration-300",
                            pathname === link.path ? "font-medium" : "font-normal"
                        )}>
                            {link.name}
                            <span className={cn("group-hover:w-full w-0 h-1 transition-all rounded-full bg-yellow-800",
                                (pathname === link.path && hash == "") ? "w-full" : "w-0"
                            )}></span>
                        </Link>
                    </li>
                ))}
                <li className={cn(pathname !== "/" && "hidden",
                    hash === "#reviews" ? "font-medium" : "font-normal")}>
                    <a href="#reviews" className={cn("flex flex-col group w-min transition-all duration-300")}>
                        Reviews
                        <span className={cn("group-hover:w-full w-0 h-1 transition-all rounded-full bg-yellow-800",
                            hash === "#reviews" ? "w-full" : "w-0"
                        )}></span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks