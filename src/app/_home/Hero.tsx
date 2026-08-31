import Link from "next/link"

export default function Hero() {

    return (
        <>
            <section id="home" className="section-full-center hero-pattern">
                <div className="container">
                    <h1>Best SEO & Marketing Solutions for You</h1>
                    <div>
                        <Link href="#" className="secondary-btn">
                            Get a free analysis
                        </Link>
                        <dialog open className=" bg-amber-600 backdrop:bg-amber-600">
                            hello im dialog
                        </dialog>
                    </div>
                </div>
                <section id="home" className="section-full-center hero-pattern">
                    <div className="container">
                        <h1>Best SEO & Marketing Solutions for You</h1>
                        <div>
                            <Link href="#" className="secondary-btn">
                                Get a free analysis
                            </Link>

                            {/* 1. Наш ОТЕЦ-ЭКРАН (Заменяет backdrop браузера). 
                Он фиксируется на весь экран (fixed inset-0) и красится в янтарный bg-amber-100 */}
                            <div className="fixed inset-0 bg-amber-100/80 flex items-center justify-center">

                                {/* 2. Наше само окошко (бывший диалог) */}
                                <div className="bg-amber-600 p-6 rounded-lg text-white shadow-xl">
                                    hello im dialog
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}