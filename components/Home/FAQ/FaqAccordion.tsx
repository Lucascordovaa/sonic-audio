"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import {faqData} from "@/constant/Constant";


export default function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index))
    }

    return (
        <div className="mx-auto pt-4">
            {faqData.map((item, i) => {
                const isOpen = openIndex === i
                return (
                    <div key={i} className="border-b border-black/10 last:border-b-0">
                        <button
                            onClick={() => toggle(i)}
                            className="w-full flex items-start justify-between text-left text-[28px] leading-[1.4] group cursor-pointer py-8"
                        >
                            <span>{item.question}</span>
                            <ChevronDown
                                className={`transition-transform duration-300 mt-1 ${
                                    isOpen ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                                isOpen ? "max-h-96" : "max-h-0"
                            }`}
                        >
                            <div className="pt-3 text-[16px] leading-[1.5]">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
