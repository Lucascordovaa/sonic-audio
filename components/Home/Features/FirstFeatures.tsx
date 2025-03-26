"use client"
import React, {useRef} from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { PiWaveform } from "react-icons/pi";
import {Button} from "@/components/ui/button";

const FirstFeatures = () => {
    const ref = useRef(null);

// Track scroll progress for this section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"], // Animation starts when div enters viewport
    });

// Move the background image slightly upward
    const backgroundPosition = useTransform(scrollYProgress, [1, 0], ["50% 40%", "50% 0%"]);

    return (
        <div className="w-full h-[920px]">
            <div className="flex xl:w-[63%] mx-auto h-full items-center justify-between">
                {/*left site*/}
                <div className="flex flex-col justify-center gap-[42px] w-[570px] h-[600px]">
                    <div className="flex items-center space-x-2">
                        <PiWaveform className="text-[22px]"/>
                        <p className="text-[19px] leading-[1.6]">The Perfect Sound, Anywhere</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-[33px] leading-[1.2]">
                            Experience crystal-clear audio with deep bass and immersive sound.
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-[16px]">
                        <p className="text-[19px] leading-[1.6]">
                            Our smart speaker is designed to fill your space with rich, high-fidelity sound—whether
                            you&#39;re at home or on the go.
                        </p>
                        <Button className="flex justify-center cursor-pointer px-5 py-7 text-[16px]
                        text-white border border-black rounded-full transition-all
                        duration-400 bg-black hover:border-gray-400 hover:bg-gray-800">
                            <p className="mr-2">Buy now</p>
                            <p>&gt;</p>
                        </Button>
                    </div>
                </div>

                {/* Right Side (Animated Background Image) */}
                <motion.div
                    ref={ref}
                    className="flex flex-col justify-center gap-[42px] w-[569px] h-[600px] rounded-3xl bg-[url('/images/sound1.png')] bg-center"
                    style={{ backgroundPosition }}
                />
            </div>
        </div>
    )
}
export default FirstFeatures
