import Image from "next/image";
import img1 from "../../public/images/ninenine-corporation-3.jpg"
import img2 from "../../public/images/ninenine-corporation-2.jpg"
import ourMission from "../../public/images/our-mission.svg"
import ourValues from "../../public/images/our-vision.svg"

export default function About(){
    return (
        <section id="about">
            <div className="mx-auto max-w-screen-2xl px-4 lg:px-8 py-20 lg:py-28 bg-secondary-50">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:ms-8">
                    <div className="flex flex-col justify-center items-center relative md:w-1/2 mb-16 md:mx-8">
                        <div className=" bg-primary-50 w-72 md:w-[30vw] xl:w-[560px] max-w-[560px] h-[350px] md:h-[60vh] xl:h-[680px] max-h-[680px]"></div>
                        <div className="absolute -top-8 md:-top-12 -right-9 lg:-right-16">
                            <Image src={img2} alt="Fort Corporativo" className="w-64 md:w-[30vw] xl:w-[512px] max-w-[512px]"/>
                        </div>
                        <div className="absolute -bottom-8 md:-bottom-12 -left-9 lg:-left-16">
                            <Image src={img1} alt="Fort Corporativo" className="w-[215px] md:w-[25vw] xl:w-[512px] max-w-[400px] border-[10px] border-secondary-700" />
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-4 lg:ms-24">
                        <h3 className="text-sm md:text-base text-secondary-950 font-bold">ABOUT</h3>
                        <h2 className="text-6xl font-bold">NineNine.<span className="text-primary-700">Corp</span></h2>
                        <p className="text-xs md:text-base lg:text-lg text-secondary-950 leading-4 lg:leading-7 tracking-widest">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sem non elit volutpat iaculis sed eget lorem. Nulla quam tellus, sagittis vel accumsan eu, elementum ut nunc.
                            <br /><br />
                            Morbi molestie eros et nulla ultrices elementum. Suspendisse lorem est, egestas a purus eu, malesuada sollicitudin enim. Duis convallis lacinia condimentum. Nulla dapibus sapien eu tortor scelerisque varius. 
                            <br /><br />
                            Nulla dapibus sapien eu tortor scelerisque varius. Integer rutrum ex erat, eget ultricies arcu ullamcorper in. Aliquam at ultricies nunc. Curabitur pharetra velit nec neque mollis porttitor.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between mt-8 lg:mt-16">
                    <div className="flex flex-row items-center gap-2 my-8 md:my-16">
                        <div className="flex justify-center items-center bg-primary-50 size-28 md:size-32 px-2 md:px-4">
                            <Image src={ourMission} alt="Nossa Missão" className="max-w-28 md:max-w-32"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-base md:text-2xl text-secondary-950 font-bold">OUR MISSION</h3>
                            <p className="text-xs md:text-base text-secondary-950 leading-4 md:leading-5 max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sem non elit volutpat iaculis sed eget lorem.</p>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse md:flex-row items-center gap-2 my-8 md:my-16">
                        <div className="flex justify-center items-center bg-primary-50 size-28 md:size-32 px-2 md:px-4">
                            <Image src={ourValues} alt="Nossos Valores" className="max-w-28 md:max-w-32"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-base md:text-2xl text-secondary-950 font-bold">OUR VISION</h3>
                            <p className="text-xs md:text-base text-secondary-950 leading-4 md:leading-5 max-w-[400px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet sem non elit volutpat iaculis sed eget lorem.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}