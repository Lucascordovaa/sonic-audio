import React from 'react'
import {PiCalendarBlank} from "react-icons/pi";
import {Sections} from "@/components/TosSections/Sections";

const Page = () => {
    return (
        <div className="w-full pt-[4vh] md:pt-[12vh] h-auto">
            <div className="xl:w-[63%] mx-auto">
                <div className="xl:w-[67%] mx-auto justify-center space-y-[32px]">
                    <div
                        className="flex mx-auto items-center justify-center text-[#575757] rounded-full w-[114px] h-[36px] bg-transparent border border-[#C3C4C5]">
                        <PiCalendarBlank className="size-[20px]"/>
                        <p className="text-[16px] leading-[1.5] ml-1">1 Jan 2025</p>
                    </div>
                    <div
                        className="flex mx-auto items-center justify-center">
                        <h1 className="text-[60px] leading-[1.2] font-semibold">Terms of Service</h1>
                    </div>

                    <p><span className="font-semibold">Please note:</span> This Terms of Service page is part of a fictional project created for demonstration and mockup purposes only.
                        The company, services, and terms described here are not real, and no actual agreement or legal obligation is intended or required.
                        Users are not expected to follow, accept, or be bound by any of the content presented on this page.</p>

                    <p className="text-[23px] leading-[1.6] text-[#575757]">
                        Welcome to <span className="font-semibold">Sonic</span>. By accessing or using our website,
                        products, or services, you agree to be bound by the following Terms and Conditions.
                        If you do not agree to these terms, please refrain from using our platform.
                    </p>

                    <Sections/>

                </div>
            </div>
        </div>
    )
}
export default Page
