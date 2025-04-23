import React from 'react'
import {PiCalendarBlank} from "react-icons/pi";
import PrivacyPolicySections from "@/components/PrivacyPolicySections/PrivacyPolicySections";


const Page = () => {
    return (
        <div className="w-full pt-[4vh] md:pt-[12vh] h-auto">
            <div className="lg:w-[63%] mx-auto">
                <div className="w-[90%] lg:w-[67%] mx-auto justify-center space-y-[32px]">
                    <div
                        className="flex mx-auto items-center justify-center text-[#575757] rounded-full w-[114px] h-[36px] bg-transparent border border-[#C3C4C5] mt-14">
                        <PiCalendarBlank className="size-[20px]"/>
                        <p className="text-[16px] leading-[1.5] ml-1">1 Jan 2025</p>
                    </div>
                    <div
                        className="flex mx-auto items-center justify-center">
                        <h1 className="text-[60px] leading-[1.2] font-semibold">Privacy Policy</h1>
                    </div>

                    <p><span className="font-semibold">Please note:</span> This Privacy Policy page is part of a
                        fictional project created for demonstration and mockup purposes only.
                        The company, services, and terms described here are not real, and no actual agreement or legal
                        obligation is intended or required.
                        Users are not expected to follow, accept, or be bound by any of the content presented on this
                        page.</p>

                    <p className="text-[23px] leading-[1.6] text-[#575757]">
                        At <span className="font-semibold">Sonic</span>, we are committed to protecting your privacy and ensuring the security of your personal information.
                        This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website, services, and products.
                        By using our platform, you consent to the practices described in this policy.
                    </p>

                    <PrivacyPolicySections/>

                </div>
            </div>
        </div>
    )
}
export default Page
