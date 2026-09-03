import Link from "next/link"
import Image from "next/image"
import { serviceContent } from "./service.config"


export default function ServiceCard({ change }: { change: string }) {

    const content = serviceContent.find(e => e.change === change)

    return (
        <section className="w-full h-125 flex items-center justify-center">
            {content ?
                <>
                    <div className="max-w-xl grid grid-cols-[180px_180px] gap-x-5 gap-y-12">
                        <h2 className="col-span-2 text-2xl font-black">{content.title}</h2>
                        <p className="col-span-2 font leading-[130%]">{content.text}</p>
                        <Link href={'#'} className="border-primary-btn ">
                            Learn More
                        </Link>
                        <Link href={'#'} className="primary-btn">
                            Try SEO Toolkit
                        </Link>
                    </div>
                    <div className="w-full max-w-178 h-120 ">
                        <Image 
                        src={content.image} alt={`image ${content.title}`} 
                        className="max-h-120 object-contain"
                        />
                    </div>
                </>
                : ''}

        </section>
    )
}