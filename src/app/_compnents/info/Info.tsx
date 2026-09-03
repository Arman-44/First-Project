import { awards } from "./awards.config"
import Link from "next/link"


export default function Info() {

    return (
        <section className="py-30">
            <div className="layout-container">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="max-inline-160 font-bold text-2xl leading-normal">
                        Createx SEO Agency is a full-service digital marketing agency.
                        We help businesses make more money through a wealth of performance
                        data and market research. We create science-based SEO strategies to
                        empower our clients.
                    </h2>
                    <ul className="grid grid-cols-[repeat(2,228px)] gap-4 text-[14px]">
                        {awards.map(e => (
                            <li key={e.name}>
                                <Link href={e.link} className="flex icon-container">
                                    <img src={e.icon} alt="" />
                                    <h3 className="max-inline-32">{e.name}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}