import React from 'react'
import { PiDiamond } from "react-icons/pi";
import WhyUsCard from "@/components/Home/WhyUs/WhyUsCard";
import { PiShoppingBag } from "react-icons/pi";
import { PiStar } from "react-icons/pi";
import { PiFlag } from "react-icons/pi";

const WhyUs = () => {
    return (
        <div className="w-full h-auto mt-[64px] lg:mt-0">
            <div className="flex flex-col mx-auto w-[358px] lg:w-[63%]">
                <div
                    className="flex items-center justify-center text-[#575757] rounded-full w-[114px] h-[36px] bg-transparent border border-[#C3C4C5]">
                    <PiDiamond className="size-[20px]"/>
                    <p className="text-[16px] leading-[1.5] ml-1">Why us?</p>
                </div>

                <div className="flex flex-col lg:flex-row mt-[12px]">
                    <div className="w-full">
                        <h3 className="text-[42px] leading-[1.2]">Trusted by Thousands, Engineered for Excellence</h3>
                    </div>
                    <div>
                        <p className="text-[19px] leading-[1.6] lg:text-right">Our commitment to innovation and quality has earned the
                            trust of customers worldwide. Sleek design, our products are built to impress.
                        </p>
                    </div>
                </div>

                <div className="my-12 flex flex-col gap-10 lg:flex-row lg:justify-center lg:gap-10">
                    <WhyUsCard title={"60K+ Units Sold"} description={"Our speakers have reached over 60,000 satisfied customers."} Icon={PiShoppingBag} />
                    <WhyUsCard title={"4.9/5 Average Rating"} description={"Thousands of reviews praise our unmatched sound quality"} Icon={PiStar}/>
                    <WhyUsCard title={"100+ Countries"} description={"Our products are loved and shipped across more than 100 countries."} Icon={PiFlag}/>
                </div>
            </div>
        </div>
    )
}
export default WhyUs
