"use client"

import Image from "next/image";
import { projects } from "./Projects.data"
import iconArc from "../../../public/images/projects/architecture.svg"
import iconEng from "../../../public/images/projects/engineering.svg"
import iconMeter from "../../../public/images/projects/meters.svg"
import iconLocal from "../../../public/images/projects/local.svg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { NextArrow, PrevArrow } from "../SliderArrows";

export default function Projects(){

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow type="next" />,
        prevArrow: <PrevArrow type="prev" />
    }
    
    return (
        <section id="projects">
            <div className="mx-auto max-w-screen-2xl px-4 lg:px-8 py-20 lg:py-28 bg-secondary-50">
                <div className="flex flex-col justify-center items-center gap-5 mx-auto lg:gap-4 pb-8 lg:pb-10 max-w-[50rem]">
                    <h2 className="text-secondary-950 text-xl lg:text-4xl font-semibold">OUR PROJECTS</h2>
                    <h3 className="text-secondary-950 text-sm lg:text-xl text-center max-w-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>
                </div>
                
                <Slider {...settings}>                      
                    {projects.map((project) => (                                        
                        <div key={project.id}>
                            <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-4 xl:gap-8 px-4 xl:px-12 py-5 md:py-10">                                     
                                
                                <div className="relative">
                                    <Image src={project.image} alt={project.company} width={875} height={550} />
                                    <h4 className="uppercase text-sm lg:text-[28px] text-secondary-950 font-bold bg-primary-600/50 backdrop-blur-sm px-[14px] lg:px-8 py-4 lg:py-10 absolute top-4 lg:top-10 right-0 lg:right-8">{project.company}</h4>
                                </div>
                                
                                <div className="flex flex-col md:grid md:grid-cols-2 xl:flex gap-5 xl:py-12">
                                    <div className="flex flex-row gap-3">
                                        <Image src={iconArc} alt="" width={32} height={32} className="w-auto h-auto"/>
                                        <span className="text-lg text-secondary-950">{project.architecture}</span>
                                    </div>
                                    <div className="flex flex-row gap-3">
                                        <Image src={iconEng} alt="" width={32} height={32} className="w-auto h-auto"/>
                                        <span className="text-lg text-secondary-950">{project.engineering}</span>
                                    </div>
                                    <div className="flex flex-row gap-3">
                                        <Image src={iconMeter} alt="" width={32} height={32} className="w-auto h-auto"/>
                                        <span className="text-lg text-secondary-950">{project.meters}</span>
                                    </div>
                                    <div className="flex flex-row gap-3">
                                        <Image src={iconLocal} alt="" width={32} height={32} className="w-auto h-auto"/>
                                        <span className="text-lg text-secondary-950">{project.local}</span>
                                    </div>
                                </div>
                            </div>
                        </div>                                        
                    ))}
                </Slider>                    
            </div>
        </section>
        
    )
}