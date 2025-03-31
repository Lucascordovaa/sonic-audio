import React from 'react'
import { PiDiamond } from "react-icons/pi";

const WhyUs = () => {
    return (
        <div className="w-full h-auto">
            <div className="flex flex-col mx-auto w-[358px] lg:w-[63%]">
                <div
                    className="flex items-center justify-center text-[#575757] rounded-full w-[114px] h-[36px] bg-transparent border border-[#C3C4C5]">
                    <PiDiamond className="size-[20px]"/>
                    <p className="text-[16px] leading-[1.5] ml-1">Why us?</p>
                </div>

                <div className="flex flex-row mt-[12px]">
                    <div className="w-full">
                        <h3 className="text-[42px] leading-[1.2]">Trusted by Thousands, Engineered for Excellence</h3>
                    </div>
                    <div>
                        <p className="text-[19px] leading-[1.6] text-right">Our commitment to innovation and quality has earned the
                            trust of customers worldwide. Sleek design, our products are built to impress.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default WhyUs
