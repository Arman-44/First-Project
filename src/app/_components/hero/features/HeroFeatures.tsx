import Link from "next/link"
import icSpeaker from '@/assets/additional/ic-speaker.svg'
import icChart from '@/assets/additional/ic-chart.svg'
import icComputer from '@/assets/additional/ic-computer.svg'


export default function HeroFeatures() {

    return (
        <ul className="w-full h-10 flex items-center justify-between mt-30 divide-linear">
            <li className="icon-container justify-start">
                <img src={icChart.src} alt="icon chart" />
                <Link href={'#'}>
                    SEO Content Strategy
                </Link>
            </li>
            <hr />
            <li className="icon-container justify-center">
                <img src={icSpeaker.src} alt="icon speaker" />
                <Link href={'#'}>
                    Content Marketing
                </Link>
            </li>
            <hr />
            <li className="icon-container justify-end">
                <img src={icComputer.src} alt="icon computer" />
                <Link href={'#'}>
                    Website & Social Media Marketing
                </Link>
            </li>
        </ul>
    )
}