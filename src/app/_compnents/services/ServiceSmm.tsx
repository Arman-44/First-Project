import Link from "next/link"
import Image from "next/image"
import bgIllustration from '@/assets/bg-services/bg-smm.svg'

const achivments = [
    {
        achivment: 'Aenean enim tellus morbi nisl vulputate dictumst.',
        check: 'before-mark',
    },
    {
        achivment: 'Nibh sapien volutpat lacus augue.',
        check: 'before-mark',
    },
    {
        achivment: 'Vel in amet, placerat adipiscing est pharetra.',
        check: 'before-mark',
    },
    {
        achivment: 'Gravida ornare sit in et ut sit sem id.',
        check: 'before-mark',
    },
    {
        achivment: 'Ultrices pellentesque dictum enim egestas ac diam.',
        check: 'before-mark',
    },
    {
        achivment: 'Sit semper enim senectus integer ut turpis et.',
        check: 'before-mark',
    },
]

export default function ServiceSmm() {

    return (
        <section className="flex justify-between">
            <div className="max-w-98 grid grid-cols-[180px_180px] gap-y-12 gap-x-4">
                <h2 className="col-span-2 font-black text-2xl">
                    Complete Worflow For Any SEO Professional
                </h2>
                <ul className="col-span-2 flex flex-col gap-4">
                    {achivments.map(e => (
                        <li
                            className={`${e.check} flex items-center gap-4`}
                            key={e.achivment}>
                            {e.achivment}
                        </li>
                    ))}
                </ul>
                <Link href={'#'} className="border-primary-btn col-span-1">
                    Learn More
                </Link>
                <Link href={'#'} className="primary-btn col-span-1">
                    Try Seo Toolkit
                </Link>
            </div>
            <Image 
            className="w-full h-full object-contain"
            src={bgIllustration} alt="" width={712} height={404}/>
        </section>
    )
}