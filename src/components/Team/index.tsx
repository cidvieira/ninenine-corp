"use client"

import { team } from "./Team.data"
import Slider from "react-slick"
import s from "./s.module.css"
import Image from "next/image"

export default function Team(){

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 4,
        arrows: false,
        responsive: [
          {
            breakpoint: 1536,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
    }

    return (
      <section id="team">
          <div className={`mx-auto max-w-screen-2xl px-4 lg:px-8 py-20 lg:py-28 ${s.bgi}`}>
            <div className="flex flex-col justify-center items-center gap-3 lg:gap-4 pb-8 lg:pb-10">
              <h2 className="text-white text-sm lg:text-xl font-semibold">MEET</h2>
              <h3 className="text-white text-2xl lg:text-5xl text-center">OUR DEDICATED TEAM</h3>
            </div>                
            <Slider { ...settings }>
              {team.map((team, index) => (
                <div key={index}>
                  <div className="flex flex-col gap-7 justify-center px-2">
                    <Image src={team.photo} alt={`${team.name} | ${team.professional}`} width={300} height={300}  className="border-[10px] border-primary-600 w-full h-auto"/>
                    <div>
                      <div className="flex flex-row items-center gap-3">
                        <span className="block bg-primary-600 w-6 lg:w-10 h-px"></span>
                        <h3 className="text-white text-sm lg:text-2xl">{team.name}</h3>
                      </div>
                      <p className="text-white text-xs lg:text-[1rem] ps-9 py-2 lg:ps-[52px]">{team.professional}</p>
                    </div>
                  </div>
                </div>
              ))}                
            </Slider>
          </div>
          
          <div className="mx-auto max-w-screen-2xl px-4 lg:px-8 py-20 lg:py-28 bg-secondary-950">
            <p className="uppercase text-base lg:text-4xl text-primary-600 text-center max-w-lg lg:max-w-4xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci turpis, dignissim sit amet massa in, vestibulum feugiat lectus. Donec a elementum sem.
            </p>
          </div>
      </section>
        
    )
}