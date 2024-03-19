import Link from "next/link"
import { NAV_LINKS } from "@/constants"

const NavBar = () => {
    return (
      <nav className="flex flex-row border-2 border-red-500">


        <ul>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="font-bold cursor-pointer px-5">
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    )
  }
  
  export default NavBar