import React from 'react'
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const SecondFooter = () => {
    return (
        <div className="w-full bg-[#1B1C21]">
            <div className="w-[358px] lg:w-[63%] mx-auto py-[62px]">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">

                    <div className="flex flex-row items-center">
                        <h1 className="font-bold text-[2rem] text-white">SONIC</h1>
                        <div className="h-7 border-l border-gray-400 mx-4"></div>
                        <p className="text-[16px] leading-[1.5] text-white">The Perfect Sound, Anywhere</p>
                    </div>

                    <div className="flex lg:mx-auto space-x-[58px] lg:space-x-[230px] lg:ml-[250px]">
                        <div className="flex flex-col">
                            <h1 className="text-[20px] leading-[1.6] text-white pb-[12px]">Company</h1>

                            <Link href="/">
                                <p className="text-[16px] leading-[1.5] text-white pb-[8px]">
                                    Blog
                                </p>
                            </Link>

                            <Link href="/contact">
                                <p className="text-[16px] leading-[1.5] text-white">
                                    Contact Us
                                </p>
                            </Link>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="text-[20px] leading-[1.6] text-white pb-[12px]">Legal</h1>

                            <Link href="/legal/terms-of-service">
                                <p className="text-[16px] leading-[1.5] text-white pb-[8px]">Terms of service</p>
                            </Link>

                            <Link href="/legal/privacy-policy"><p className="text-[16px] leading-[1.5] text-white">
                                Privacy Policy
                            </p>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full h-[180px] lg:h-full items-center overflow-hidden">
                    <p className="text-[100px] lg:text-[380px] font-semibold text-[#313438] -my-14">SONIC</p>
                </div>
                <div>
                    <p className="text-white text-[16px] leading-[1.5] mb-6"><span className="font-semibold">Please note: </span>
                        This website is a mockup project and does not represent a real business or product.</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
                    <div>
                        <p className="text-white text-[16px] leading-[1.5]">© 2025. All rights reserved. SONIC Audio
                            inc.</p>
                    </div>
                    <div className="flex items-center space-x-2 justify-end">
                        <p className="text-white text-[16px] leading-[1.5]">@sonic</p>
                        <Link href="https://twitter.com">
                            <FaXTwitter className="size-7 text-white"/>
                        </Link>
                        <Link href="https://instagram.com">
                            <FaInstagram className="size-7 text-white"/>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SecondFooter
