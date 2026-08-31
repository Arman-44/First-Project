import Logo from "../ui/Logo"
import { navigationLinks } from "@/config/navigation"
import Link from "next/link"

export default function Header() {

    return (
        <>
            <header>
                <div className="layout-container flex gap-[60] items-center">
                    <Logo />
                    <nav className="w-[40%]">
                        <ul className="flex justify-between gap-4">
                            {navigationLinks.map((e) => (
                                <li key={e.name}>
                                    <Link href={e.href}>
                                        {e.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Link 
                    href='/contact'
                    className="primary-btn">
                        Talk to humman
                    </Link>
                </div>
            </header>
        </>
    )
}