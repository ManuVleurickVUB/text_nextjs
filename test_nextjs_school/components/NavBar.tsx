import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"

const NavBar = () => {
    return (
      <div className="flex flex-row gap-28 border-2 border-yellow-500">
        {/* LOGO */}
        <div className="self-center">
          <Link href="/">
            <Image src="/nav_logo.jpg" alt="logo" width={80} height={80} />
          </Link>
        </div>

        <nav className="flex flex-row flex-nowrap border-2 border-red-500">
          <ul className="flex flew-row self-center">
            {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="font-bold cursor-pointer px-5">
                <Image src={link.icon} alt={link.label} width={48} height={48} />
                <label>{link.label}</label>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
  
  export default NavBar