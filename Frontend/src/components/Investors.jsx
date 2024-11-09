import { content } from 'flowbite-react/tailwind';
import React from 'react';
import { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Investors = () => {
    const [selectedTab, setSelectedTab] = useState('Overview');

    const tabs = [
        { name: "Overview", content: true },
        { name: "Management Commentary", content: true },
        { name: "Financials", content: true },
        { name: "News and Events", content: true },
        { name: "ESG", content: true },
        { name: "Resources", content: true },
    ];

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const renderContent = () => {
        switch (selectedTab) {
            case 'Overview':
                return <Overview />;
            case 'Management Commentary':
                return <Management />;
            case 'Financials':
                return <Financials />;
            case 'News and Events':
                return <News />;
            case 'ESG':
                return <ESG />;
            case 'Resources':
                return <Resources />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className='w-[20%]'>
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
            <div>
                {renderContent()}
            </div>
        </>
    );
}

export default Investors;

export const Overview = () => {
    return (
        <div className='ml-10 text-white w-[80%]'>
            <h2 className='text-4xl '>Olcademy works hand in hand with world-leading investors.</h2>
            <div className='border-2 rounded-md flex mt-5'>
                <div className='w-1/4 p-3 border-r-[1px] '>
                    <p className='text-lg'>Olcademy Limited</p>
                    <p className='text-sm text-gray-300'>NSE:OLC</p>
                </div>
                <div className='w-3/4 p-3 '>
                    <p className='text-3xl'>4.183.95 <sub className='text-lg'>INR</sub></p>
                    <p className='flex items-center gap-2'>+260.25(6.63%) <FaArrowUp className='text-green-500' /> </p>
                </div>
            </div>
            <button className='border-2 border-white rounded-3xl px-5 py-3 mt-10 hover:underline'> Discover More </button>
        </div>
    )
}

export const Management = () => {
    return (
        <div className='ml-10 text-white w-[80%] flex gap-28 '>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Latest Quarter Commentary</p>
                <p>Annual Report Section</p>
            </div>
        </div>
    )
}

export const Financials = () => {
    return (
        <div className='ml-10 text-white w-[80%] flex gap-28 '>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Quarterly Earnings Reports</p>
                <p>Download Olcademy Data Sheet</p>
            </div>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Erstwhile CMC Financials</p>
            </div>
        </div>
    )
}

export const News = () => {
    return (
        <div className='ml-10 text-white w-[80%] flex gap-28 '>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Press Releases</p>
                <p>Corporate Actions</p>
            </div>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Events</p>
                <p>Calendar</p>
            </div>
        </div>
    )
}

export const ESG = () => {
    return (
        <div className='ml-10 text-white w-[80%] flex gap-28 '>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Environment</p>
                <p>Social</p>
            </div>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Governance</p>
                <p>Policies and Reports</p>
            </div>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Stakeholder Engagement and Identification of Material Issues</p>
            </div>
        </div>
    )
}

export const Resources = () => {
    return (
        <div className='ml-10 text-white w-[80%] flex gap-28 '>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Investor FAQs</p>
                <p>eTDS Portal</p>
                <p>Stock Information</p>
            </div>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Analyst Coverage</p>
                <p>Subsidiaries</p>
            </div>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Subscribe to Investor Updates</p>
                <p>Unclaimed Dividend Information</p>
            </div>
        </div>
    )
}
