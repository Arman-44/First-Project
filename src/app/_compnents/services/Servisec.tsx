'use client'
import { useState } from "react"
import ServiceSmm from "./ServiceSmm"
import ServiceCard from "@/components/modules/services/ServiceCard"
import { serviceNav } from "@/components/modules/services/service.config"

export default function Services() {

    const [change, setChange] = useState('sotial')
    const handleClick = (e:string) => {
        setChange(e)
    }

    return (
        <section>
            <div className="flex flex-col justify-center items-center gap-4 mb-15">
                <h2 className="font-black text-[46px]">Our Services</h2>
                <nav className="w-full mt-10">
                    <ul className="w-full h-15 flex items-center justify-between">
                        {serviceNav.map(e => (
                            <li key={e.name} className="w-min">
                                <button 
                                onClick={() => handleClick(e.change)}
                                className="py-2.5 px-10 cursor-pointer border border-transparent flex hover:border-primary-btn text-nowrap">
                                    {e.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="w-full min-h-125 flex justify-center items-center">
                {change==='sotial'? 
                <ServiceSmm/>
                    : <ServiceCard change={change}/>
                }
            </div>
        </section>
    )
}