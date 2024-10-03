import Link from "next/link"

const Navbar = () => { 
    return (
        <>
            <ul>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/epoch'>
                        Epoch
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar