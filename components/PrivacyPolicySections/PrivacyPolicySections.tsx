import React from 'react'
import {privacyPolicySections} from "@/constant/Constant";

const PrivacyPolicySections = () => {
    return (
        <div>
            <div className="counter-section space-y-[48px]">
                {privacyPolicySections.map((section, index) => (
                    <section className="countered-section" key={index}>
                        <h5 className="section-heading text-[28px] leading-[1.4] font-semibold mb-4">
                            {section.title}
                        </h5>
                        <p className="text-[23px] leading-[1.6] text-[#575757] mb-4">{section.subtitle}</p>
                        <div className="space-y-4">
                            {section.points.map((point, i) => (
                                <p
                                    key={i}
                                    className="pl-[2.5rem] text-[23px] leading-[1.1] text-[#575757] mb-4"
                                >
                                    • {point}
                                </p>
                            ))}
                        </div>
                        <p className="text-[23px] leading-[1.6] text-[#575757] mb-4">{section.extra}</p>
                    </section>
                ))}
            </div>
        </div>
    )
}
export default PrivacyPolicySections
