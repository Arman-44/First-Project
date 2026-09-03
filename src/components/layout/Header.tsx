import Logo from "../ui/Logo"
import { navigationLinks } from "@/config/navigation"
import Link from "next/link"

export default function Header() {

    return (
        <>
            <header className="text-white absolute w-full py-7.5 font-bold">
                <div className="layout-container flex gap-[60] items-center justify-between">
                    <Logo />
                    <nav className="w-full flex items-center justify-between">
                        <ul className="flex justify-between gap-10">
                            {navigationLinks.map((e) => (
                                <li key={e.name}>
                                    <Link href={e.href}>
                                        {e.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href='/contact'
                            className="primary-btn">
                            Talk to humman
                        </Link>
                    </nav>
                </div>
            </header>
        </>
    )
}