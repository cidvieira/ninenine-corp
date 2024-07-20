import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { FC } from "react"

interface SliderArrows {
    onClick?: () => void
    type: 'next' | 'prev'
}

export const NextArrow: FC<SliderArrows> = (props) => {
    const { onClick, type } = props
    return (
        <div className="absolute top-1/2 -right-4 xl:right-0 transform -translate-y-1/2 z-20">
            <button
                onClick={onClick}
                className="text-secondary-950"
            >
                <ChevronRightIcon className="h-8 md:h-16"/>  
            </button>
        </div>
    ) 
}

export const PrevArrow: FC<SliderArrows> = (props) => {
    const { onClick, type } = props
    return (
        <div className="absolute top-1/2 -left-4 xl:left-0 transform -translate-y-1/2 z-20">
            <button
                onClick={onClick}
                className="text-secondary-950"
            >
                <ChevronLeftIcon className="h-8 md:h-16"/>
            </button>
        </div>
    ) 
}