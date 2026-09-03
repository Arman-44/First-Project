import Link from "next/link"
import VideoBtn from "./videoModal/VideoBtn"
import HeroFeatures from "./features/HeroFeatures"
import Image from "next/image"

export default function Hero() {

    return (
        <>
            <section className="layout-section bg-hero-pattern bg-cover bg-no-repeat text-white">
                <div className="layout-container">
                    <div className="flex mt-30">
                        <div className="max-inline-200 max-w-200 flex flex-col gap-[60]">
                            <h1 className="text-[4.2rem] font-black">
                                Best <span className="text-primary">SEO & Marketing</span> Solutions for You
                            </h1>
                            <div className="w-full flex gap-6.25">
                                <Link
                                    className="border-white-btn"
                                    href='#'>
                                    Get a free analysis
                                </Link>
                                <VideoBtn></VideoBtn>
                            </div>
                        </div>
                        <Image 
                        src={'/illustrations/hero-bg.svg'} 
                        className="w-auto h-auto"
                        alt="" 
                        width={590} 
                        height={530} 
                        loading="eager"/>
                    </div>
                    <HeroFeatures />
                </div>
            </section>
        </>
    )
}