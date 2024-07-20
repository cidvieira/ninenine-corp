interface ProductsData {
    image: string
    title: string
    subtitle: string
    border: string
}


export const products: Array<ProductsData> = [
    {
        image: "/images/products/icon-ninenine-corporation-1.svg", 
        title: "Lorem ipsum", 
        subtitle: "consectetur adipiscing elit", 
        border: "border-b border-r"
    },
    {
        image: "/images/products/icon-ninenine-corporation-2.svg", 
        title: "Lorem ipsum", 
        subtitle: "consectetur adipiscing elit", 
        border: "border-b md:border-r"
    },
    {
        image: "/images/products/icon-ninenine-corporation-3.svg", 
        title: "Lorem ipsum", 
        subtitle: "consectetur adipiscing elit", 
        border: "border-b border-r md:border-r"
    },
    {
        image: "/images/products/icon-ninenine-corporation-4.svg", 
        title: "Lorem ipsum", 
        subtitle: "consectetur adipiscing elit", 
        border: "border-b"
    },
    {
        image: "/images/products/icon-ninenine-corporation-5.svg", 
        title: "Lorem ipsum", 
        subtitle: "consectetur adipiscing elit", 
        border: "border-b border-r md:border-b-0 md:border-r"
    },
    {
        image: "/images/products/icon-ninenine-corporation-6.svg", 
        title: "Lorem ipsum", 
        subtitle: "consectetur adipiscing elit", 
        border: "border-b md:border-b-0 md:border-r"
    },
    {
        image: "/images/products/icon-ninenine-corporation-7.svg", 
        title: "Lorem ipsum", 
        subtitle: "consectetur adipiscing elit", 
        border: "border-r"
    },
    {
        image: "/images/products/icon-ninenine-corporation-8.svg", 
        title: "Lorem ipsum", 
        subtitle: "consectetur adipiscing elit", 
        border: ""
    }
]