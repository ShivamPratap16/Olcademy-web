import React, { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";

const Insights = () => {
    const [selectedTab, setSelectedTab] = useState('Overview');

    const tabs = [
        { name: "Overview", content: true },
        { name: "Customer Stories", content: false },
        { name: "Perspectives", content: false },
        { name: "Global Studies", content: false },
        { name: "Topics", content: true },
    ];

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    const renderContent = () => {
        switch (selectedTab) {
            case 'Overview':
                return <Overview />;
            case 'Topics':
                return <Topics />;
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

export default Insights;


export const Overview = () => {
    return (
        <div className=' ml-10 text-white w-[80%] '>
            <h2 className=' text-4xl '>Extraordinary expertise leads to remarkable results.</h2>
            <p className=' mt-5 leading-8 text-gray-400 font-[200] tracking-[0.15em] '>We share news, insights, analysis and research - tailored to your unique interests - to help you deepen your knowledge and impact. </p>
            
        </div>
    )
}
export const Topics = () => {
    return (
        <div className=' ml-10 text-white w-[80%] flex gap-28 '>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Insights</p>
                <p>Cybersecurity</p>

            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Olcademy.AI</p>
                <p>Blockchain</p>
                <p>Cloud</p>
                <p>Future of Work</p>

            </div>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-60 '>
                <p>Health & Wellness</p>
                <p>IoT</p>
                <p>Data Analytics and Storage</p>

            </div>
        </div>
    )
}
