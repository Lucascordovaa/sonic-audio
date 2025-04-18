import React from 'react';
import AOSWrapper from './AOSWrapper';
import Hero from "@/components/Home/Hero/Hero";
import Innovation from "@/components/Home/Innovation/Innovation";
import FirstFeatures from "@/components/Home/Features/FirstFeatures";
import SecondFeatures from "@/components/Home/Features/SecondFeatures";
import WhyUs from "@/components/Home/WhyUs/WhyUs";
import ImageHeader from "@/components/Home/ImageGallery/ImageHeader";
import FAQ from "@/components/Home/FAQ/FAQ";

const Home = () => {
    return (
        <AOSWrapper>
            <div className="overflow-x-hidden">
                <Hero />
                <Innovation />
                <FirstFeatures />
                <SecondFeatures />
                <WhyUs />
                <ImageHeader />
                <FAQ />
            </div>
        </AOSWrapper>
    );
};

export default Home;
