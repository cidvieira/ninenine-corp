import Image from "next/image";
import imgEng from "../../public/images/engineers.svg"
import imgRenov from "../../public/images/renovation.svg"
import imgTeam from "../../public/images/special-team.svg"
import img3 from "../../public/images/ninenine-corporation-1.jpg"

export default function Services(){
    return (
        <section id="services">
            <div className="mx-auto max-w-screen-2xl mb-10 px-4 lg:px-8 py-20 lg:py-28 bg-white flex flex-col md:flex-row md:items-center gap-32 md:gap-5">
                <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-10">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm md:text-xl font-bold text-secondary-950">SUPPORT IN SERVICES</h4>
                        <h2 className="text-2xl md:text-5xl text-secondary-950">COMMERCIAL <br /> <span className="relative z-20 before:absolute before:left-0 before:bottom-[2px] before:md:bottom-[5px] before:bg-primary-600 before:w-full before:h-2 before:md:h-4 before:-z-10">EXPERTISE</span></h2>
                        <h3 className="max-w-96 text-[1rem] md:text-lg text-secondary-700">Phasellus vitae sapien non felis rhoncus varius id in tortor. Pellentesque non ligula aliquam, consectetur ipsum quis, feugiat orci.</h3>
                    </div>

                    <div 
                        className="
                            max-w-96 md:max-w-full flex flex-col gap-4 px-3 md:px-5 relative z-10
                            before:absolute before:-top-4 before:left-0 before:w-12 before:md:w-[75px] before:h-[calc(100%_+_32px)] before:md:h-[calc(100%_+_48px)] before:border-secondary-200 before:border-[1px] before:-z-10
                        "
                    >
                        <div className="flex items-center gap-3 lg:gap-8 max-w-[590px]">
                            <div className="bg-primary-50 min-w-[70px] h-[70px] md:min-w-28 md:h-28 flex justify-center items-center px-2">
                                <Image src={imgEng} alt="Lorem ipsum" className="w-12 md:w-[90px]"/>
                            </div>
                            <div className="flex flex-col justify-center gap-2">
                                <h3 className="uppercase text-sm lg:text-xl text-secondary-950 font-bold">Lorem ipsum</h3>
                                <p className="text-xs lg:text-[1rem] text-secondary-700">Nam nec lorem non lorem hendrerit efficitur. Aliquam massa ligula, iaculis rhoncus viverra vel, suscipit non augue.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 lg:gap-8 max-w-[590px]">
                            <div className="bg-primary-50 min-w-[70px] h-[70px] md:min-w-28 md:h-28 flex justify-center items-center px-2">
                                <Image src={imgRenov} alt="Lorem ipsum" className="w-12 md:w-[90px]"/>
                            </div>
                            <div className="flex flex-col justify-center gap-2">
                                <h3 className="uppercase text-sm lg:text-xl text-secondary-950 font-bold">Lorem ipsum</h3>
                                <p className="text-xs lg:text-[1rem] text-secondary-700">Nam nec lorem non lorem hendrerit efficitur. Aliquam massa ligula, iaculis rhoncus viverra vel, suscipit non augue.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 lg:gap-8 max-w-[590px]">
                            <div className="bg-primary-50 min-w-[70px] h-[70px] md:min-w-28 md:h-28 flex justify-center items-center px-2">
                                <Image src={imgTeam} alt="Lorem ipsum" className="w-9 md:w-[70px]"/>
                            </div>
                            <div className="flex flex-col justify-center gap-2">
                                <h3 className="uppercase text-sm lg:text-xl text-secondary-950 font-bold">Lorem ipsum</h3>
                                <p className="text-xs lg:text-[1rem] text-secondary-700">Nam nec lorem non lorem hendrerit efficitur. Aliquam massa ligula, iaculis rhoncus viverra vel, suscipit non augue.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-center lg:mt-20">
                    <div className="
                        max-w-96 md:max-w-full flex flex-col gap-4 px-8 md:px-8 relative z-10 
                        before:absolute before:-top-[30px] md:-top-10 before:right-0 before:w-[calc(100%_-_64px)] before:md:w-[calc(100%_-_72px)] before:h-[calc(100%_+_64px)] before:md:h-[calc(100%_+_72px)] before:border-primary-600 before:border-[1px] before:-z-10"
                    >
                        <div>
                            <Image src={img3} alt="Lorem ipsum" className="w-[300px] md:w-[630px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}