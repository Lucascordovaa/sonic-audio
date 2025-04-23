import React from 'react'
import ContactForm from "@/components/ContactForm/ContactForm";
import {PiLightbulb, PiChatCenteredText, PiPhone} from "react-icons/pi";
import Link from "next/link";




const Page = () => {
    return (
        <div className="w-full pt-[4vh] md:pt-[12vh] h-auto">
            <div className="flex flex-col lg:flex-row w-[358px] lg:w-[63%] mx-auto mt-[64px] gap-[62px]">
                <div className="flex flex-col mx-auto space-y-8">
                    <div
                        className="flex items-center justify-center text-[#575757] rounded-full w-fit px-2 py-1 bg-transparent border border-[#C3C4C5]">
                        <PiLightbulb className="size-[20px]"/>
                        <p className="text-[16px] leading-[1.5]">Contact us</p>
                    </div>

                    <div>
                        <h2 className="text-[33px] lg:text-[52px] leading-[1.2] font-semibold">24/7 Available</h2>
                    </div>
                    <div>
                        <p className="text-[16px] leading-[1.5] text-[#575757]">You can contact us via email, phone,
                            or by filling out the form on this page. We strive to
                            respond promptly
                            and look forward to connecting with you soon!
                        </p>
                    </div>

                    <Link href="mailto:example@example.com">
                    <div className="flex items-center text-[#575757] rounded-full p-2 bg-[#FAFAFA]">
                        <div
                            className="flex items-center justify-center text-[#575757] rounded-full w-fit p-2 bg-transparent border border-[#C3C4C5]">
                            <PiChatCenteredText className="size-[20px]"/>
                        </div>
                        <p className="text-[20px] leading-[1.6] px-2">example@example.com</p>
                    </div>
                    </Link>

                    <Link href="tel:+1-555-12-345">
                    <div className="flex items-center text-[#575757] rounded-full p-2 bg-[#FAFAFA]">
                        <div
                            className="flex items-center justify-center text-[#575757] rounded-full w-fit p-2 bg-transparent border border-[#C3C4C5]">
                            <PiPhone className="size-[20px]"/>
                        </div>
                        <p className="text-[20px] leading-[1.6] px-2">+1-555-12-345</p>
                    </div>
                    </Link>
                </div>

                <div className="lg:w-full">
                    <ContactForm/>
                </div>
            </div>
        </div>

    )
}
export default Page
