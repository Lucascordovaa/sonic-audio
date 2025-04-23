import React from 'react'
import {PiAirplay} from "react-icons/pi";
import ImageGallery from "@/components/Home/ImageGallery/ImageGallery";

const ImageHeader = () => {
    return (
        <div className="w-full h-auto mt-[64px]">
            <div className="flex flex-col mx-auto w-[358px] lg:w-[63%]">
                <div
                    className="flex items-center justify-center text-[#575757] rounded-full w-[114px] h-[36px] bg-transparent border border-[#C3C4C5]">
                    <PiAirplay className="size-[20px]"/>
                    <p className="text-[16px] leading-[1.5] ml-1">In reality</p>
                </div>

                <div className="flex flex-col lg:flex-row mt-[12px] gap-[24px]">
                    <div className="w-full">
                        <h3 className="text-[33px] lg:text-[42px] leading-[1.2]">Timeless Elegance</h3>
                    </div>
                    <div className="w-full">
                        <p className="text-[19px] leading-[1.6] lg:text-right">
                            Enhance your space with a perfect blend of modern design and warm ambiance. Our speaker bring style and sophistication
                        </p>
                    </div>
                </div>

                <ImageGallery/>
            </div>
        </div>
    )
}
export default ImageHeader
