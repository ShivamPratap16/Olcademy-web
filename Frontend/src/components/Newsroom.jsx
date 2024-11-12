import { content } from 'flowbite-react/tailwind';
import React from 'react';
import  { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";

const Newsroom = () => {
    const [selectedTab, setSelectedTab] = useState('Overview');

    const tabs = [
        { name: "Overview", content: true },
        { name: "Press releases", content: true },
        { name: "News alerts", content: true },
        { name: "Analyst recognition", content: true },
        { name: "Media kit", content: false },
    ];

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const renderContent = () => {
        switch (selectedTab) {
            case 'Overview':
                return <Overview />;
            case 'Press releases':
                return <PressReleases />;
            case 'News alerts':
                return <NewsAlerts />;
            case 'Analyst recognition':
                return <AnalystRecognition />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className='w-[20vw] '>
                {tabs.map(tab => (
                    <div
                        key={tab.name}
                        className='group text-white cursor-pointer'
                        onMouseEnter={() => setSelectedTab(tab.name)}
                    >
                        <div
                            className={`flex w-full justify-between items-center h-16 border-b-2 ${selectedTab === tab.name ? 'border-b-white bg-gray-800' : 'border-b-gray-600'
                                } group-hover:border-b-white group-hover:bg-gray-800`}
                            onClick={() => handleTabClick(tab.name)}
                        >
                            <p className={`text-xl ${selectedTab === tab.name ? 'text-white' : 'text-[#9E9FA3]'
                                } group-hover:text-white`}>
                                {tab.name}
                            </p>
                            {tab.content ? <FaChevronRight /> : null}
                        </div>
                    </div>
                ))}
            </div>
            <div className='ml-10'>
                {renderContent()}
            </div>
        </>
    );
}

export default Newsroom;

export const Overview = () => {
    return (
        <div className='text-white w-[80%]'>
            <p className='text-4xl'>Find the latest news about Olcademy in our Newsroom</p>
            <p className='mt-5 leading-8 text-gray-400 font-[200] tracking-[0.15em]'>
                Get access to a catalog of the latest news stories from across Olcademy. Discover our press releases, reports, and company announcements.
            </p>
           
        </div>
    )
}

export const PressReleases = () => {
    return (
        <div className='text-white'>
            <div className='h-[80%] flex flex-col gap-5 w-full'>
                <h2 className='text-xl font-bold'>RECENT PRESS RELEASES</h2>

                <div>
                    <p className='text-gray-400 font-[600]'>11 Jul 2024</p>
                    <p className='text-gray-300 font-bold'>Olcademy Starts FY2025 on a Strong Note with Broad-Based Growth</p>
                </div>
                <div>
                    <p className='text-gray-400 font-[600]'>02 Jul 2024</p>
                    <p className='text-gray-300 font-bold'>Olcademy Signs Title Partnership with Sydney Marathon, Australia's Largest and Most Iconic Race</p>
                </div>
                <div>
                    <p className='text-gray-400 font-[600]'>21 June 2024</p>
                    <p className='text-gray-300 font-bold'>Xerox Signs Deal with Olcademy to Transform its IT Technology Using Cloud and GenAI</p>
                </div>
              
            </div>
        </div>
    )
}

export const NewsAlerts = () => {
    return (
        <div className='text-white'>
            <div className='h-[80%] flex flex-col gap-5 w-full'>
                <h2 className='text-xl font-bold'>RECENT NEWS</h2>

                <div>
                    <p className='text-gray-400 font-[600]'>10 Jul 2024</p>
                    <p className='text-gray-300 font-bold'>Olcademy Kicks off 2024 Edition of InQuizitive</p>
                </div>
                <div>
                    <p className='text-gray-400 font-[600]'>29 May 2024</p>
                    <p className='text-gray-300 font-bold'>Olcademy Wins Gold Stevie® for Innovative Marathon App that Highlights History of Australia’s Indigenous People</p>
                </div>
                <div>
                    <p className='text-gray-400 font-[600]'>14 May 2024</p>
                    <p className='text-gray-300 font-bold'>Olcademy Named One of the 50 Most Community-Minded Companies in the US</p>
                </div>
            
            </div>
        </div>
    )
}

export const AnalystRecognition = () => {
    return (
        <div className='text-white'>
            <div className='h-[80%] flex flex-col gap-5 w-full'>
                <h2 className='text-xl font-bold'>RECENT RECOGNITIONS</h2>

                <div>
                    <p className='text-gray-400 font-[600]'>03 Jul 2024</p>
                    <p className='text-gray-300 font-bold'>Olcademy Named a Market Leader Among Retail and CPG Service Providers by HFS Research</p>
                </div>
                <div>
                    <p className='text-gray-400 font-[600]'>20 Jun 2024</p>
                    <p className='text-gray-300 font-bold'>Olcademy Positioned as a Leader in the IDC MarketScape for Worldwide Microsoft Implementation Services</p>
                </div>
                <div>
                    <p className='text-gray-400 font-[600]'>06 Jun 2024</p>
                    <p className='text-gray-300 font-bold'>Olcademy Recognized as a Leader in Software Product Engineering Services by Everest Group</p>
                </div>
                
            </div>
        </div>
    )
}

