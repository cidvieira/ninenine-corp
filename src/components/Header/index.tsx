"use client"

import Link from "next/link";
import { useState } from "react";
import HandleScroll from "./HandleScroll";
import { titleLink } from './TitleLinkMenu.data';
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/16/solid";

export default function Header(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { activeSection } = HandleScroll()

  return (    
    <header className="bg-white fixed w-full z-40 h-12 lg:h-20">
        <nav className="mx-auto max-w-screen-2xl p-4 lg:px-8 lg:py-4 flex items-center justify-between relative" aria-label="Global">
            <div className="flex lg:flex-1">
                <Link href="/" className="text-4xl font-bold">NineNine.<span className="text-primary-700">Corp</span></Link>
            </div>
            <div className="hidden lg:block">
                <ul className="flex">
                    {titleLink.map((item, index) => (
                        <li key={index} className="px-3">
                            <Link 
                                href={item.path} 
                                className={`
                                text-secondary-700 relative z-20 hover:text-secondary-950
                                before:-z-10 before:absolute before:w-full before:h-[5px] before:left-0 before:bottom-1 hover:before:bg-primary-100
                                ${activeSection === item.path.substring(1) ? "text-secondary-950 before:bg-primary-100" : ""}
                                `}
                            >  
                                {item.title}
                            </Link>
                        </li>  
                    ))}
                    <li className="ps-12">
                        <Link 
                            href="#contact" 
                            className='
                                bg-primary-600 text-secondary-950 font-bold py-4 px-10
                                hover:bg-primary-100
                            '
                        >
                            CONTACT US
                        </Link>
                    </li>                 
                </ul>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-700"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Abrir menu</span>
                    <Bars3CenterLeftIcon className="size-6 rotate-180 text-secondary-950" aria-hidden="true" />            
                </button>
            </div>
        </nav>
        <div style={{transition: "all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s"}} className={`bg-white z-10 w-screen h-screen inset-y-0 absolute ${mobileMenuOpen ? "z-50 visible opacity-100 right-0" : "-right-full opacity-0 invisible" }`}>            
            <div className="flex items-center justify-between p-4">                
                <Link href="/" className="h-12 w-auto">NineNine.<span>Corp</span></Link>
                <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-secondary-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <span className="sr-only">Fechar menu</span>
                    <XMarkIcon className="size-6" aria-hidden="true" />
                </button>
            </div>
            <nav className="grid justify-center place-content-center h-[calc(100vh_-_5rem)]">
                <ul className="flex flex-col items-center gap-8 my-8 ">
                    {titleLink.map((item, index) => (
                        <li key={index} className="px-2">
                            <Link 
                                href={item.path} 
                                className={`
                                    text-secondary-700
                                    ${activeSection === item.path.substring(1) ? "relative text-secondary-950 before:bg-primary-100 before:-z-10 before:absolute before:w-full before:h-[5px] before:left-0 before:bottom-1" : ""}
                                `}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        </li>  
                    ))}
                    <li className="pt-4">
                        <Link 
                            href="#contact" 
                            className='bg-primary-600 text-secondary-950 font-bold py-4 px-12'
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            CONTACT US
                        </Link>
                    </li> 
                </ul>
            </nav>           
        </div>
    </header>
  )
}