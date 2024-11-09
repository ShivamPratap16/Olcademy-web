import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";

const Careers = () => {
    const [selectedTab, setSelectedTab] = useState('Overview');

    const tabs = [
        { name: "Overview", content: true },
        { name: "India", content: true },
        { name: "Americas", content: true },
        { name: "Asia Pecific", content: true },
        { name: "Europe and UK", content: true },
        { name: "Middle East and Africa", content: true },
    ];

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const renderContent = () => {
        switch (selectedTab) {
            case 'Overview':
                return <Overview />;
            case 'India':
                return <India />;
            case 'Americas':
                return <Americas />;
            case 'Asia Pecific':
                return <AsiaPecific />;
            case 'Europe and UK':
                return <EuropeUK />;
            case 'Middle East and Africa':
                return <MiddleEastAfrica />;
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

export default Careers;


export const Overview = () => {
    return (
        <div className=' ml-10 text-white w-[80%] '>
            <h2 className=' text-4xl '>Want to be a global change-maker? Join our team.</h2>
            <p className=' mt-5 leading-8 text-gray-400 font-[200] tracking-[0.15em] '>At Olcademy, we belive exceptional work begins with hiring, celebrating and nurturing the best people - form all walks of life </p>
            <button className=' border-2 border-white rounded-3xl px-5 py-3 mt-16 hover:underline '> Join us </button>
        </div>
    )
}
export const India = () => {
    return (
        <div className=' ml-10 text-white w-[80%] flex gap-28 '>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>India</p>

            </div>
        </div>
    )
}

export const Americas = () => {
    return (
        <div className=' ml-10 text-white w-[80%] flex gap-28 '>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Argentina</p>
                <p>Brazil</p>
                <p>Canada</p>
                <p>Chile</p>

            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Colombia</p>
                <p>Ecuador</p>
                <p>Mexico</p>
                <p>Peru</p>

            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Uruguay</p>
                <p>USA</p>

            </div>
        </div>
    )
}

export const AsiaPecific = () => {
    return (
        <div className=' ml-10 text-white w-[80%] flex gap-28 '>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Australia</p>
                <p>Minland China</p>
                <p>Hong Kong SAR</p>
                <p>Indonesia</p>

            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Japan</p>
                <p>Malaysia</p>
                <p>New Zealand</p>
                <p>Philippines</p>

            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Republic of Korea</p>
                <p>Singapore</p>
                <p>Chinese Taipei</p>
                <p>Thailand</p>

            </div>
        </div>
    )
}

export const EuropeUK = () => {
    return (
        <div className=' ml-10 text-white w-[80%] flex gap-28 '>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Belgium</p>
                <p>Denmark</p>
                <p>Estonia</p>
                <p>Finland</p>
                <p>France</p>
                <p>Germany</p>

            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Hungary</p>
                <p>Ireland</p>
                <p>Italy</p>
                <p>Luxembourg</p>
                <p>Nethelands</p>
                <p>Norway</p>

            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Poland</p>
                <p>Portugal</p>
                <p>Spain</p>
                <p>Sweden</p>
                <p>Switzerland</p>
                <p>United Kingdom</p>

            </div>
        </div>
    )
}

export const MiddleEastAfrica = () => {
    return (
        <div className=' ml-10 text-white w-[80%] flex gap-28 '>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Bahrain</p>
                <p>Israel</p>
                <p>Kuwait</p>

            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Qatar</p>
                <p>Saudi Arabia</p>

            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>South Africa</p>
                <p>United Arab Emirates</p>
            </div>
        </div>
    )
}
