import { products } from './Products.data';
import Image from "next/image"


export default function Products(){
    return (
        <section id="products">
            <div className="mx-auto max-w-screen-2xl px-4 lg:px-8 py-20 lg:py-28 bg-white">
                <div className="flex flex-col justify-center items-center gap-5 mx-auto lg:gap-4 pb-8 lg:pb-10 max-w-[50rem]">
                    <h2 className="text-secondary-950 text-xl lg:text-4xl font-semibold">OUR PRODUCTS</h2>
                    <h3 className="text-secondary-950 text-sm lg:text-xl text-center">
                        At <strong className="relative z-20 before:absolute before:left-0 before:bottom-1 before:bg-primary-600 before:w-full before:h-[3px] before:-z-10">NineNine.Corp</strong>, consectetur ipsum quis, feugiat orci. Suspendisse pretium, quam vel tincidunt ullamcorper, quam enim interdum felis, ac tempor quam diam eget felis.
                    </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {products.map((product, index) => (
                        <div key={index} className={`flex flex-col justify-center items-center gap-4 px-2 py-5 md:py-10 border-secondary-200 ${product.border}`}>
                            <div className="w-20 md:w-32 mx-auto">
                                <Image src={product.image} alt={`${product.title} ${product.subtitle}`} width={120} height={120} />
                            </div>
                            <div className="text-center">
                                <h4 className="uppercase text-secondary-950 text-sm md:text-xl">{product.title}</h4>
                                <h5 className="text-secondary-700 text-xs md:text-[1rem]">{product.subtitle}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}