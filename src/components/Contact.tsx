import Image from "next/image"
import building from "../../public/images/building.svg"
import email from "../../public/images/email.svg"
import facebook from "../../public/images/f.svg"
import instagram from "../../public/images/i.svg"
import linkedin from "../../public/images/l.svg"
import phone from "../../public/images/p.svg"
import Link from "next/link"

export default function Contact(){
    return(
        <section id="contact">
            <div className="mx-auto max-w-screen-2xl bg-secondary-950">
                <div>
                    <div className="flex flex-col lg:grid lg:grid-cols-3">
                        <div className="flex flex-col gap-4 justify-center items-center lg:items-start px-12 py-12 md:py-24 border-b lg:border-e border-primary-600">
                            <h2 className="text-white text-5xl font-bold">NineNine.<span className="text-primary-700">Corp</span></h2>
                            <p className="text-base md:text-lg text-white">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="flex flex-row gap-3 justify-center items-center px-12 py-12 md:py-24 border-b lg:border-e border-primary-600 ">
                            <Image src={building} alt="" className="w-12 md:w-20"/>
                            <div>
                                <h4 className="text-xs md:text-xl font-bold text-primary-600">Address</h4>
                                <Link href="#" target="_blank" aria-label="Address"><address className="text-xs md:text-base text-white hover:text-primary-100 transition-colors not-italic">99 North Street, World</address></Link>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 justify-center items-center px-12 py-12 md:py-24 border-b border-primary-600 ">
                            <Image src={email} alt="" className="w-11 md:w-16" />
                            <div>
                                <h4 className="text-xs md:text-xl font-bold text-primary-600">EMAIL</h4>
                                <Link href="#" target="_blank" aria-label="Email"><span className="text-xs md:text-base text-white hover:text-primary-100 transition-colors">info@ninenine-corp.com</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 justify-center items-center border-b border-primary-600">
                        <div className="flex justify-center py-8 md:py-24 border-e border-primary-600">                            
                            <div className="flex flex-col gap-3">
                                <h4 className="text-xs md:text-xl font-bold text-primary-600">FOLLOW US</h4>
                                <div className="flex flex-row gap-4">
                                    <Link href="https://www.facebook.com/" target="_blank" aria-label="Facebook" className="size-8 md:size-28 bg-white hover:bg-primary-100 rounded-full flex place-content-center items-center transition-colors"><Image src={facebook} alt="" className="w-auto h-4 md:h-12 " /></Link>
                                    <Link href="https://www.instagram.com/" target="_blank" aria-label="Instagram" className="size-8 md:size-28 bg-white hover:bg-primary-100 rounded-full flex place-content-center transition-colors"><Image src={instagram} alt="" className="w-4 md:w-12" /></Link>
                                    <Link href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn" className="size-8 md:size-28 bg-white hover:bg-primary-100 rounded-full flex place-content-center transition-colors"><Image src={linkedin} alt="" className="w-4 md:w-12" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center gap-3 py-8 md:py-24">
                            <Link href="#" target="_blank" aria-label="Contact us" className="size-8 md:size-28 bg-white hover:bg-primary-100 rounded-full flex place-content-center transition-colors">
                                <Image src={phone} alt="Contact us" className="w-4 md:w-12" />
                            </Link>
                            <div>
                                <h4 className="text-xs md:text-xl font-bold text-primary-600">CONTACT US</h4>
                                <Link href="#" target="_blank" aria-label="Phone"><span className="text-xs md:text-base text-white hover:text-primary-100 transition-colors">+123-456-7890</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}