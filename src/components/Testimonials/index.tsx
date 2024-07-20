"use client"

import Slider from "react-slick"
import Image from "next/image"
import quote from "../../../public/images/quote-testimonial.svg"
import { NextArrow, PrevArrow } from "../SliderArrows"
import { TestimonialsContent } from "./Testimonials.data"


export default function Testimonials(){

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        nextArrow: <NextArrow type="next"/>,
        prevArrow: <PrevArrow type="prev" />
    }

    return (
        <section>
          <div className={`mx-auto max-w-screen-2xl px-4 lg:px-8 py-20 lg:py-28`}>
            <div className="flex flex-col justify-center items-center gap-3 lg:gap-4 pb-8 lg:pb-10">
              <h2 className="text-secondary-950 text-2xl text-center lg:text-5xl font-semibold max-w-80 lg:max-w-full">WHAT OUR <span className="relative z-20 before:absolute before:left-0 before:bottom-[2px] before:md:bottom-[5px] before:bg-primary-600 before:w-full before:h-2 before:md:h-4 before:-z-10">CUSTOMERS</span> SAY ABOUT US</h2>
            </div>                
            <Slider { ...settings }>
              {TestimonialsContent.map((testimonial, index) => (
                <div key={index}>
                    <div className="relative flex items-center">
                        <Image src={quote} alt="" className="absolute top-1/2 left-14 lg:left-40 transform -translate-y-1/2 w-36 md:w-64 -z-10" />
                        <p className="text-base lg:text-3xl text-secondary-950 text-center max-w-lg lg:max-w-4xl mx-auto my-20 px-8">{testimonial.content}</p>
                    </div>
                </div>
              ))}                
            </Slider>
          </div>
      </section>
    )
}