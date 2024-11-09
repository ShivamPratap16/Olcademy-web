import React from 'react';
import  { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const WhatWeDo = () => {
    const [selectedTab, setSelectedTab] = useState('Overview');
    const [isNavbarOpen, setIsNavbarOpen] = useState(true); // State to manage navbar visibility
    const navigate = useNavigate();

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
        setIsNavbarOpen(false); // Close the navbar when changing tabs
    };

    const handleLinkClick = (path) => {
        navigate(path);
        setIsNavbarOpen(false); // Close the navbar on link click
    };

    const renderContent = () => {
        switch (selectedTab) {
            case 'Overview':
                return <Overview />;
            case 'Industries':
                return <Industries handleLinkClick={handleLinkClick} />;
            case 'Services':
                return <Services />;
            case 'Products and Platforms':
                return <ProductsAndPlatforms />;
            case 'Research & Innovations':
                return <ResearchAndInnovations />;
            default:
                return null;
        }
    };

    return (
        <>
            {isNavbarOpen && ( // Render the navbar only if it's open
                <div className='w-[20%] '>
                    {['Overview', 'Industries', 'Services', 'Products and Platforms', 'Research & Innovations'].map(tab => (
                        <div key={tab} className='group text-white cursor-pointer' onMouseEnter={() => setSelectedTab(tab)}>
                            <div
                                className={`flex w-full justify-between items-center h-16 border-b-2 ${selectedTab === tab ? 'border-b-white bg-gray-800' : 'border-b-gray-600'} group-hover:border-b-white group-hover:bg-gray-800`}
                                onClick={() => handleTabClick(tab)} // Close navbar on tab click
                            >
                                <p className={`text-xl ${selectedTab === tab ? 'text-white' : 'text-[#9E9FA3]'} group-hover:text-white`}>{tab}</p>
                                <FaChevronRight />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div>
                {renderContent()}
            </div>
        </>
    );
};

export default WhatWeDo;

export const Overview = () => {
    return (
        <div className=' ml-10 text-white w-[80%] '>
            <h2 className=' text-4xl '>Olcademy is here to make a difference through technology.</h2>
            <p className=' mt-5 leading-8 text-gray-400 font-[200] tracking-[0.15em] '>Olcademy as global consulting firm partners with leaders in business and society to tackle their most important challenges and capture their greatest opportunities. At Olcademy, we have one simple statement that encapsulates our broader purpose as a global business consulting firm.</p>
        </div>
    );
};

export const Industries = ({ handleLinkClick }) => {
    return (
        <div className='ml-10 text-white w-[80%] flex gap-28'>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60'>
                <Link to="/industries/banking" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/industries/banking")}>Banking</Link>
                <Link to="/industries/capital-markets" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/industries/capital-markets")}>Capital Markets</Link>
                <Link to="/industries/consumer-goods" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/industries/consumer-goods")}>Consumer Goods and Distribution</Link>
                <Link to="/industries/communication" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/industries/communication")}>Communication, Media, and Informational Services</Link>
            </div>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60'>
                <Link to="/industries/education" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/industries/education")}>Education</Link>
                <Link to="/industries/healthcare" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/industries/healthcare")}>Healthcare</Link>
                <Link to="/industries/high-tech" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/industries/high-tech")}>High Tech</Link>
                <Link to="/industries/insurance" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/industries/insurance")}>Insurance</Link>
            </div>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60'>
                <Link to="/industries/life-science" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/industries/life-science")}>Life Science</Link>
                <Link to="/industries/manufacturing" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/industries/manufacturing")}>Manufacturing</Link>
                <Link to="/industries/public-services" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/industries/public-services")}>Public Services</Link>
                <Link to="/industries/retail" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/industries/retail")}>Retail</Link>
            </div>
        </div>
    );
};

export const Services = ({ handleLinkClick }) => {
    return (
        <div className='ml-10 text-white w-[80%] flex gap-28'>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60'>
                <Link to="/services/artificial-intelligence" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/services/artificial-intelligence")}>Artificial Intelligence</Link>
                <Link to="/services/cloud" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/services/cloud")}>Cloud</Link>
                <Link to="/services/cognitive-business-operations" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/services/cognitive-business-operations")}>Cognitive Business Operations</Link>
                <Link to="/services/consulting" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/services/consulting")}>Consulting</Link>
            </div>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60'>
                <Link to="/services/cybersecurity" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/services/cybersecurity")}>Cybersecurity</Link>
                <Link to="/services/data-and-analytics" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/services/data-and-analytics")}>Data and Analytics</Link>
                <Link to="/services/enterprise-solutions" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/services/enterprise-solutions")}>Enterprise Solutions</Link>
                <Link to="/services/iot-and-digital-engineering" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/services/iot-and-digital-engineering")}>IoT and Digital Engineering</Link>
            </div>
            <div className='text-gray-300 h-[80%] flex flex-col gap-5 w-60'>
                <Link to="/services/network-solutions" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/services/network-solutions")}>Network Solutions and Services</Link>
                <Link to="/services/management-consulting" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/services/management-consulting")}>Management Consulting</Link>
                <Link to="/services/staffing" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/services/staffing")}>Staffing</Link>
                <Link to="/services/outsourcing-services" className='cursor-pointer hover:text-blue-400 transition duration-300' onClick={() => handleLinkClick("/services/outsourcing-services")}>Outsourcing Services</Link>
            </div>
        </div>
    );
};

export const ProductsAndPlatforms = ({ handleLinkClick }) => {
    const data = [
        { id: 1, title: "Olcademy Launchpad", link: "/launchpad" },
        { id: 2, title: "Olcademy CloudSync", link: "/cloudsync" },
        { id: 3, title: "Olcademy MarketSense", link: "/marketsense" },
        { id: 4, title: "Olcademy Innovate", link: "/innovate" },
        { id: 5, title: "Olcademy ScaleUp", link: "/scaleup" },
        { id: 6, title: "Olcademy Connect", link: "/connect" },
        { id: 7, title: "Olcademy Fundraise", link: "/fundraise" },
        { id: 8, title: "Olcademy Agile", link: "/agile" },
        { id: 9, title: "Olcademy BrandLift", link: "/brandlift" },
        { id: 10, title: "Olcademy Talent Hub", link: "/talenthub" }
    ];

    return (
        <div className='ml-10 text-white w-[80%] flex gap-28'>
            <div className='text-gray-300 flex flex-col gap-5 w-60'>
                {data.slice(0, 5).map((product) => (
                    <Link 
                        key={product.id} 
                        to={product.link} 
                        className='cursor-pointer hover:text-blue-400 transition duration-300' 
                        onClick={() => handleLinkClick(product.link)}
                    >
                        {product.title}
                    </Link>
                ))}
            </div>
            <div className='text-gray-300 flex flex-col gap-5 w-60'>
                {data.slice(5).map((product) => (
                    <Link 
                        key={product.id} 
                        to={product.link} 
                        className='cursor-pointer hover:text-blue-400 transition duration-300' 
                        onClick={() => handleLinkClick(product.link)}
                    >
                        {product.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export const ResearchAndInnovations = () => {
    return (
        <div className=' ml-10 text-white w-[80%] flex gap-28 '>
            <div className=' text-gray-300 h-[80%] flex flex-col gap-5 w-80 '>
                <p>Olcademy is a global consulting firm.</p>
                <p>Provides IT solutions</p>
            </div>
        </div>
    );
};

