import React from 'react';
import  { useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const WhoWeAre = () => {
    const [selectedTab, setSelectedTab] = useState('Overview');
    const tabs = [
        { name: "Overview", content: true },
        { name: "About Us", content: true },
        { name: "Leadership", content: false },
        { name: "Events", content: false },
    ];

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const renderContent = () => {
        switch (selectedTab) {
            case 'Overview':
                return <Overview />;
            case 'About Us':
                return <AboutUs />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className='w-[20%] '>
                {tabs.map(tab => (
                    <div key={tab} className='group text-white cursor-pointer' onMouseEnter={() => setSelectedTab(tab.name)}>
                        <div
                            className={`flex w-full justify-between items-center h-16 border-b-2 ${selectedTab === tab.name ? 'border-b-white bg-gray-800' : 'border-b-gray-600'} group-hover:border-b-white group-hover:bg-gray-800`}
                            onClick={() => handleTabClick(tab.name)}
                        >
                            <p className={`text-xl ${selectedTab === tab.name ? 'text-white' : 'text-[#9E9FA3]'} group-hover:text-white`}>{tab.name}</p>
                            {tab.content ? <FaChevronRight /> : null}
                        </div>
                    </div>
                ))}
            </div>
            <div>
                {renderContent()}
            </div>
        </>
    );
}

export default WhoWeAre

export const Overview = () => {
    return (
        <div className=' ml-10 text-white w-[80%] '>
            <h2 className=' text-4xl '>We're in it for good, driving positive change for the benefit of all</h2>
            <p className=' mt-5 leading-8 text-gray-400 font-[200] tracking-[0.15em] '>Our expert, committed team put our shared beliefs into action – every day. Together, we combine innovation and collective knowledge to create the extraordinary. </p>
         
        </div>
    )
}
export const AboutUs = () => {
    return (
        <div className=' ml-10 text-white w-[80%] flex gap-28 '>
           <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60'>
                <Link
                    to="/services/corporate-sustainability"
                    className='cursor-pointer hover:text-blue-400 transition duration-300'
                    onClick={() => handleLinkClick("/services/corporate-sustainability")}
                >
                    Corporate Sustainability
                </Link>
                <Link
                    to="/services/diversity-equity-inclusion"
                    className='cursor-pointer hover:text-blue-400 transition duration-300'
                    onClick={() => handleLinkClick("/services/diversity-equity-inclusion")}
                >
                    Diversity, Equity, and Inclusion
                </Link>
            </div>
            
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60'>
                <Link
                    to="/services/corporate-social-responsibility"
                    className='cursor-pointer hover:text-blue-400 transition duration-300'
                    onClick={() => handleLinkClick("/services/corporate-social-responsibility")}
                >
                    Corporate Social Responsibility
                </Link>
                <Link
                    to="/services/olcademy-way"
                    className='cursor-pointer hover:text-blue-400 transition duration-300'
                    onClick={() => handleLinkClick("/services/olcademy-way")}
                >
                    The Olcademy Way
                </Link>
            </div>

            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60'>
                <Link
                    to="/services/sports-sponsorships"
                    className='cursor-pointer hover:text-blue-400 transition duration-300'
                    onClick={() => handleLinkClick("/services/sports-sponsorships")}
                >
                    Sports Sponsorships
                </Link>
                <Link
                    to="/services/alliances"
                    className='cursor-pointer hover:text-blue-400 transition duration-300'
                    onClick={() => handleLinkClick("/services/alliances")}
                >
                    Alliances
                </Link>
            </div>
        </div>
    )
}
