import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar"
import Link from "next/link"

const Topbar = () => {
    return (
        <Navbar>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link href='/'>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href='/epoch'>
                        Epoch
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

export default Topbar