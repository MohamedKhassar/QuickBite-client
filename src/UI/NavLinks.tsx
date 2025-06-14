import { useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { links } from "../utils/data";
import { HashLink } from "react-router-hash-link";
const NavLinks = ({ className }: { className?: string }) => {

    const { hash, pathname } = useLocation()
    console.log(pathname, links[3].path)
    return (
        <nav className={className}>
            <ul className="flex lg:flex-row flex-col w-fit gap-6">
                {links.map((link) => (
                    <li key={link.name}>
                        <HashLink to={link.path} className={cn("flex flex-col group w-min transition-all duration-300",
                            (hash === link.path.replace("/", "")) || (pathname === link.path) ? "font-medium" : "font-normal"
                        )}>
                            {link.name}
                            <span className={cn("group-hover:w-full w-0 h-1 transition-all rounded-full bg-yellow-800",
                                (hash === link.path.replace("/", "")) || (pathname === link.path) ? "w-full" : "w-0"
                            )}></span>
                        </HashLink>
                    </li>
                ))}
                <li className={cn(pathname === "/contact" && "hidden",
                    hash === "#reviews" ? "font-medium" : "font-normal")}>
                    <HashLink to="#reviews" className={cn("flex flex-col group w-min transition-all duration-300")}>
                        Reviews
                        <span className={cn("group-hover:w-full w-0 h-1 transition-all rounded-full bg-yellow-800",
                            hash === "#reviews" ? "w-full" : "w-0"
                        )}></span>
                    </HashLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks