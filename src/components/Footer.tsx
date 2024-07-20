import Link from "next/link";
import Contact from "./Contact";

export default function Footer(){
    return(
        <footer>

            <Contact />

            <div className="bg-secondary-950 px-4 lg:px-8 py-5">
                <p className="text-[10px] text-white">
                    ©2024 NineNine.Corp | All Rights Reserved | Designed & Built by <Link href="https://cidvieira.com/" className="text-primary-600 font-bold">Cid Vieira</Link>
                </p>
            </div>
            
        </footer>
    )
}