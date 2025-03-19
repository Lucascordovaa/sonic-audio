import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="w-full pt-[4vh] md:pt-[12vh] h-screen">
            <div className="flex xl:w-[63%] mx-auto justify-center h-full">
                <div className="flex flex-col lg:w-[68%] text-center mt-[11vh] lg:mt-[8vh]">
                    <h1 className="font-semibold text-[36px] lg:text-[60px] leading-[1.2]">Immersive Sound, Simplified</h1>
                    <p className="text-[18px] lg:text-[20px] leading-[1.6] pt-7 text-[#575757]">
                        Our most recent breakthrough in audio devices blends exceptional audio performance with
                        unparalleled toughness and elegance.
                    </p>
                    <div className="flex justify-center pt-7">
                        {/* Buy Now button (hidden on mobile) */}
                        <Button className="flex items-center cursor-pointer px-5 py-7 text-[16px]
                        text-white border border-black rounded-full transition-all
                        duration-400 bg-black hover:border-gray-400 hover:bg-gray-800">
                            <p className="mr-2">Buy now</p>
                            <p>&gt;</p>
                        </Button>
                    </div>
                    <div className="flex justify-center pt-7">
                        <Image src="/images/sonicbox.png" alt="sonicbox" width={800} height={600} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;