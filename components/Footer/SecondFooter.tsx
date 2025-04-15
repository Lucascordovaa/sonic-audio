import React from 'react'
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const SecondFooter = () => {
    return (
        <div className="w-full bg-[#1B1C21]">
            <div className="w-[358px] lg:w-[63%] mx-auto py-[62px]">
                <div className="flex">
                    <div className="flex flex-row items-center">
                        <h1 className="font-bold text-[2rem] text-white">SONIC</h1>
                        <div className="h-7 border-l border-gray-400 mx-4"></div>
                        <p className="text-[16px] leading-[1.5] text-white">The Perfect Sound, Anywhere</p>
                    </div>
                    <div className="flex mx-auto space-x-[230px] ml-[250px]">
                        <div className="flex flex-col">
                            <h1 className="text-[20px] leading-[1.6] text-white pb-[12px]">Company</h1>
                            <Link href="/" className="text-[16px] leading-[1.5] text-white pb-[8px]">Blog</Link>
                            <Link href="/" className="text-[16px] leading-[1.5] text-white">Contact Us</Link>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-[20px] leading-[1.6] text-white pb-[12px]">Legal</h1>
                            <Link href="/" className="text-[16px] leading-[1.5] text-white pb-[8px]">Terms of
                                service</Link>
                            <Link href="/" className="text-[16px] leading-[1.5] text-white">Privacy Policy</Link>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full">
                    <h1 className="text-[380px] font-semibold text-[#313438] -my-14">SONIC</h1>
                </div>

                <div className="flex justify-between">
                    <div>
                        <p className="text-white text-[16px] leading-[1.5]">© 2025. All rights reserved. SONIC Audio inc.</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className="text-white text-[16px] leading-[1.5]">@sonic</p>
                        <FaXTwitter className="size-7 text-white"/>
                        <FaInstagram className="size-7 text-white"/>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SecondFooter
