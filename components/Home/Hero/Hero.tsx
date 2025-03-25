"use client"

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion'; // Added Framer Motion imports
import {Button} from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {

    const { scrollYProgress } = useScroll(); // Track scroll progress

    // Define animation effects
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]); // Scale image from 1 to 1.3


    return (
        <div className="w-full pt-[4vh] md:pt-[12vh] h-screen">
            <div className="flex xl:w-[63%] mx-auto justify-center h-full">
                <div className="flex flex-col lg:w-[68%] text-center mt-[11vh] lg:mt-[8vh]">
                    <h1 data-aos="fade-up" className="font-semibold text-[36px] lg:text-[60px] leading-[1.2]">Immersive Sound, Simplified</h1>
                    <p data-aos="fade-up" data-aos-duration="1500" className="text-[18px] lg:text-[20px] leading-[1.6] pt-7 text-[#575757]">
                        Our most recent breakthrough in audio devices blends exceptional audio performance with
                        unparalleled toughness and elegance.
                    </p>
                    <div data-aos="fade-up" data-aos-duration="1800"  className="flex justify-center pt-7">
                        {/* Buy Now button (hidden on mobile) */}
                        <Button className="flex items-center cursor-pointer px-5 py-7 text-[16px]
                        text-white border border-black rounded-full transition-all
                        duration-400 bg-black hover:border-gray-400 hover:bg-gray-800">
                            <p className="mr-2">Buy now</p>
                            <p>&gt;</p>
                        </Button>
                    </div>
                    <div data-aos="zoom-out-up" className="flex justify-center mt-8">
                        {/* Wrapped Image inside motion.div for animation */}
                        <motion.div style={{ scale}}>
                            <Image src="/images/sonicbox.png" alt="sonicbox" width={700} height={700} />
                        </motion.div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;