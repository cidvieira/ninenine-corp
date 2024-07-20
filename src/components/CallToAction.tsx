import Link from "next/link";

export function FirstCTA(){
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-8 px-4 lg:px-8 py-16 bg-primary-400">
            <h3 
                className="
                    uppercase text-center md:text-start text-[1rem] lg:text-2xl text-secondary-950 font-medium relative z-10
                    before:absolute before:-top-5 before:-right-4 before:md:-left-8 before:w-3/5 before:md:w-1/3 before:h-[calc(100%_+_36px)] before:border-primary-950 before:border-[1px] before:border-r-0 before:md:border-r before:md:border-l-0 before:-z-10
                "
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat nunc sed magna porttitor, eu sagittis nunc semper. Nam ac egestas dui. Morbi eget nulla lobortis, efficitur ipsum vitae, luctus mi. Nunc auctor elit nec consequat laoreet. 
            </h3>
            <div className="flex w-full relative z-10 before:absolute before:-top-4 before:-left-4 before:md:left-[unset] before:md:-right-8 before:w-3/5 before:h-[calc(100%_+_2rem)] before:bg-primary-700 before:-z-10">                
                <Link href="#contact" className="bg-secondary-950 hover:bg-secondary-700 text-sm lg:text-[1rem] font-semibold text-white mx-auto px-10 py-7 max-w-64 md:max-w-72 max-h-20 transition-colors">
                    CONTACT US
                </Link>                
            </div>
        </div>
    )
}

export function SecondCTA(){
    return (
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 px-4 lg:px-8 py-16 lg:py-28 bg-primary-600">
            <h4 className="text-sm lg:text-lg text-white font-semibold text-center">LOREM IPSUM</h4>
            <h3 className="uppercase text-[22px] lg:text-[42px] text-secondary-950 font-bold text-center max-w-72 lg:max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <Link href="#contact" className="bg-secondary-950 hover:bg-secondary-700 text-sm lg:text-[1rem] font-semibold text-white mx-auto px-12 lg:px-24 py-4 lg:py-5 transition-colors">
                CONTACT US
            </Link>
        </div>
    )
}