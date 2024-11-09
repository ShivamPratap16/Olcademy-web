import React from 'react';
import img from '../assets/fy2025.jpeg';
import HeroBigCarousel from './HeroBigCarousel';
import HeroSmallCarousel from './HeroSmallCarousel';

const HeroSection = () => {
    return (
        <div className='flex flex-col  overflow-x-auto absolute bg-black w-[100dvw] pt-28 scroll-snap-type-x mandatory'>
            <HeroBigCarousel />
            <HeroSmallCarousel />
        </div>
    );
};

export default HeroSection;



