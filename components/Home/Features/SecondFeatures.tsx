"use client"
import React, {useRef} from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { PiDeviceMobileSpeaker } from "react-icons/pi";
import {Button} from "@/components/ui/button";

const SecondFeatures = () => {
    const ref2 = useRef(null);

// Track scroll progress for this section
    const { scrollYProgress } = useScroll({
        target: ref2,
        offset: ["start end", "end start"], // Animation starts when div enters viewport
    });

// Move the background image slightly upward
    const backgroundPosition = useTransform(scrollYProgress, [1, 0], ["50% 40%", "50% 0%"]);

    return (
        <div className="w-full h-[920px] mt-[32px]">
            <div className="flex flex-col h-full lg:flex-row w-[63%] mx-auto items-center lg:items-start justify-between gap-[32px]">
                {/* Right Side (Animated Background Image) */}
                <motion.div
                    ref={ref2}
                    className="flex flex-col justify-center lg:gap-[42px] w-[358px] h-[776px] lg:w-[569px] lg:h-[600px] rounded-3xl bg-[url('/images/sound2.png')] bg-center"
                    style={{ backgroundPosition }}
                />

                {/*left site*/}
                <div className="flex flex-col justify-center gap-[42px] w-[358px] h-[776px] lg:w-[570px] lg:h-[600px]">
                    <div className="flex items-center space-x-2">
                        <PiDeviceMobileSpeaker className="text-[22px]"/>
                        <p className="text-[19px] leading-[1.6]">Smart. Sleek. Powerful.</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-[33px] leading-[1.2]">
                            Seamless connectivity, voice control, and a sleek, modern design make this speaker the perfect addition to any room.
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-[16px]">
                        <p className="text-[19px] leading-[1.6]">
                            Designed for modern living, this speaker blends premium sound with intuitive controls.
                        </p>
                        <Button className="flex justify-center cursor-pointer px-5 py-7 text-[16px]
                        text-white border border-black rounded-full transition-all
                        duration-400 bg-black hover:border-gray-400 hover:bg-gray-800">
                            <p className="mr-2">Buy now</p>
                            <p>&gt;</p>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default SecondFeatures
