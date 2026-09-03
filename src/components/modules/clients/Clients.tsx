import {clients} from './clients.config'
import Link from 'next/link'

export default function Clients() {

    return (
        <section className="w-full py-12">
            <div className="layout-container">
                <ul className="flex gap-7.5 items-center justify-between mt-45">
                    {clients.map(e => (
                        <li key={e.name}>
                            <Link href={e.link}>
                                <img src={e.icon} alt="" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}