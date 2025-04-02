"use client"

import React, {useEffect} from 'react';
import Hero from "@/components/Home/Hero/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Innovation from "@/components/Home/Innovation/Innovation";
import FirstFeatures from "@/components/Home/Features/FirstFeatures";
import SecondFeatures from "@/components/Home/Features/SecondFeatures";
import WhyUs from "@/components/Home/WhyUs/WhyUs";
import ImageHeader from "@/components/Home/ImageGallery/ImageHeader"; // You can also use <link> for styles

const Home = () => {
    useEffect(() => {
        const initAOS = async () => {
            await import("aos");
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom",
            })
        }
        initAOS();
    }, []);

    return (
        <div className="overflow-hidden h-[10000px]">
            <Hero/>
            <Innovation/>
            <FirstFeatures/>
            <SecondFeatures/>
            <WhyUs/>
            <ImageHeader/>
        </div>
    );
};

export default Home;