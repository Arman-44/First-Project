import Link from "next/link";
import Image from "next/image";


export default function About() {

    return (
        <section className="layout-section flex gap-33.75">
            <div className="w-97.5 flex flex-col gap-10 shrink-0">
                <h2 className="font-black text-[46px]">Createx Agency </h2>
                <p className="leading-normal">
                    Lacus ac mollis vitae viverra. Tincidunt est, feugiat
                    montes, viverra ullamcorper mi dui, nulla pharetra.
                    Sapien urna nullam elit diam mauris orci. Volutpat
                    quam tempus justo, aliquam. Tortor ultrices mattis
                    eget orci eu nisi sed augue odio. Et senectus risus,
                    pharetra, tristique libero. Dolor risus ac quam dictum
                    mattis ultrices laoreet sapien. Feugiat lacus,
                    suscipit eu sociis et quis hendrerit. Cras at acmagna ultricies orci.
                </p>
                <Link href={'#'} className="primary-btn">
                    More about us
                </Link>
            </div>
            <Image 
            className="w-auto h-auto rounded-sm"
            src={'/illustrations/about-bg.png'}
            alt="Createx Agency illustration"
            width={705}
            height={560}
            ></Image>
        </section>
    )
}