import React from 'react'
import FaqAccordion from "@/components/FAQ/FaqAccordion";

const Faq = () => {
    return (
        <div className="w-full h-auto mt-[70px] lg:mt-[180px]">
            <div className="flex flex-col lg:flex-row mx-auto w-[358px] lg:w-[63%] gap-12">
                <div className="flex flex-col lg:w-[60%] gap-[62px]">
                    <p className="text-[28px] leading-[1.4]">Welcome to Beyond FAQ!</p>
                    <h1 className="text-[44px] leading-[1.2]">Everything You Need to Know About Our Speakers</h1>
                </div>
                <div>
                    <FaqAccordion />
                </div>
            </div>
        </div>
    )
}
export default Faq
