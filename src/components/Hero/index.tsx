import s from "./s.module.css"
import Link from "next/link"

export default function Hero(){
    return (
        <section id='home'>
            <div className="mx-auto max-w-screen-2xl pt-20 pb-40 lg:px-8 bg-secondary-50">
                <div className={`h-[700px] w-full ${s.bgi} relative`}>
                    
                    <div className="border-2 border-primary-600 w-[300px] h-[400px] lg:size-[450px] absolute top-1/2 -translate-y-1/2 left-4 lg:left-9">                    
                    </div>

                    <div className="flex flex-col gap-4 justify-center items-start ps-4 lg:ps-9 text-white absolute top-1/2 -translate-y-1/2 left-4 lg:left-9">
                        <span className={`text-xs md:text-xl font-semibold title`}>SOLUTIONS</span>
                        <h1 className={`text-2xl md:text-[46px] font-semibold tracking-[2px] md:leading-[3rem] ${s.ts} title`}><span className="block text-primary-600">EMPOWERING</span>  COMPANIES</h1>
                        <h2 className={`text-sm md:text-xl ${s.ts} title`}>with precision engineering</h2>
                    </div>
                    <div className="flex flex-col justify-center gap-8 lg:gap-14 bg-secondary-950 px-6 md:px-10 py-10 md:py-16 absolute bottom-0 left-1/2 -translate-x-1/2 md:left-[unset] md:-translate-x-0 md:right-12 translate-y-1/2 md:translate-y-1/3 z-20">
                        <div>
                            <div className="flex flex-row items-center gap-3">
                                <span className="block bg-primary-600 w-6 lg:w-10 h-px"></span>
                                <h3 className="text-primary-600 text-[1rem] lg:text-2xl font-bold">EXPERTISE AND SUPPORT</h3>
                            </div>
                            <p className="text-white text-xs lg:text-[1rem] ps-9 pt-2 lg:ps-[52px]">Development of exclusives products and projects</p>
                        </div>
                        <Link href={"#services"} className="bg-primary-600 hover:text-white min-w-[300px] px-7 md:px-10 py-4 lg:py-5 font-semibold text-secondary-950 text-center transition-colors">
                            EXPLORE OUR SERVICES
                        </Link>                        
                    </div>
                </div> 
            </div>
        </section>
    )
}