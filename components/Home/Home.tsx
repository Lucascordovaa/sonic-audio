"use client"

import React, {useEffect} from 'react';
import Hero from "@/components/Home/Hero/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Innovation from "@/components/Home/Innovation/Innovation";
import FirstFeatures from "@/components/Home/Features/FirstFeatures"; // You can also use <link> for styles

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
        <div className="overflow-hidden h-[5000px]">
            <Hero/>
            <Innovation/>
            <FirstFeatures/>
        </div>
    );
};

export default Home;