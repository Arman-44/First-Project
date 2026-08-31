import Logo from "../ui/Logo"
import { navigationLinks } from "@/config/navigation"
import Link from "next/link"

export default function Header() {

    return (
        <>
            <header>
                <div className="container">
                    <Logo />
                    <nav>
                        <ul>
                            {navigationLinks.map((e) => (
                                <li key={e.name}>
                                    <Link href={e.href}>
                                        {e.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}