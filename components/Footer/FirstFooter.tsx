import React from 'react'
import {Button} from "@/components/ui/button";
import {IoChevronForwardCircle} from "react-icons/io5";

const FirstFooter = () => {
    return (
        <div className="w-full bg-[#FAFAFA]">

            <div className="flex flex-col lg:flex-row w-[358px] lg:w-[63%] mx-auto bg-[#FAFAFA] justify-between">

                <div className="flex flex-col gap-[32px] my-[62px] lg:w-[520px] items-start">
                    <h1 className="text-[40px] lg:text-[60px] leading-[1.2] font-semibold">Get your perfect speaker
                        now!</h1>
                    <Button className="flex justify-center cursor-pointer px-6 py-8 text-[20px]
                        text-white border border-black rounded-full transition-all
                        duration-400 bg-[#262628] hover:border-gray-400 hover:bg-gray-800">
                        <p className="mr-2">Get yours - 30% off</p>
                        <IoChevronForwardCircle className="size-10"/>
                    </Button>
                </div>

                <div className="flex flex-col gap-[16px] my-[62px] lg:w-[520px]">
                    <h1 className="text-[28px] leading-[1.4] font-semibold">Bring every room together</h1>
                    <p className="text-[20px] leading-[1.6]">
                        Experience our latest portable speaker innovation, delivering exceptional sound quality,
                        unbeatable durability, and sleek design.
                    </p>
                </div>

            </div>
        </div>
    )
}
export default FirstFooter
