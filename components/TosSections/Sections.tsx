import React from 'react'
import {tosSections} from "@/constant/Constant";

export const Sections = () => {
    return (
        <div>
            <div className="counter-section space-y-[48px]">
                {tosSections.map((section, index) => (
                    <section className="countered-section" key={index}>
                        <h5 className="section-heading text-[28px] leading-[1.4] font-semibold mb-4">
                            {section.title}
                        </h5>
                        <div className="space-y-4">
                            {section.points.map((point, i) => (
                                <p
                                    key={i}
                                    className="counter-subitem text-[23px] leading-[1.6] text-[#575757]"
                                >
                                    {point}
                                </p>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}
