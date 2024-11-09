import React from 'react';
import spotlight1 from "../assets/innovation.jpg";
import spotlight2 from "../assets/networking.jpg";
import spotlight3 from "../assets/funding.jpg";
import { LuNewspaper } from "react-icons/lu";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Spotlight = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const data = [
        {
            title: "Olcademy Launchpad: Empowering Startups for Success",
            tag: "Innovation",
            image: spotlight1,
            link: '/launchpad' // Add the link property for routing
        },
        {
            title: "Olcademy Connect: Building Networks for Growth",
            tag: "Networking",
            image: spotlight2,
            link: '/connect' // Add the link property for routing
        },
        {
            title: "Olcademy Fundraise: Helping Startups Secure Funding",
            tag: "Funding",
            image: spotlight3,
            link: '/fundraise' // Add the link property for routing
        }
    ];

    const handleNavigation = (link) => {
        navigate(link); // Navigate to the corresponding page on image click
    };

    return (
        <div className='bg-black xl:px-10 px-5 pt-5 pb-5 w-[100dvw]'>
              <h2 className='text-3xl font-bold text-white uppercase tracking-wide pt-5'>spotlight on olcademy</h2>

            <div className='grid xl:grid-cols-3 grid-cols-1 gap-3'>
                {data.map((item, index) => {
                    return (
                        <div className='group' key={index}>
                            <div 
                                className='relative xl:w-[300px] h-72 my-5 overflow-hidden cursor-pointer' 
                                onClick={() => handleNavigation(item.link)} // Add onClick for navigation
                            >
                                <img 
                                    src={item.image} 
                                    className='w-full h-full object-cover object-center brightness-75 group-hover:scale-110 transition-all duration-300' 
                                    alt={item.title} 
                                />
                                <div className='bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.7)] hover:to-[rgba(0,0,0,1)] transition-all duration-300 absolute top-0 flex flex-col h-full w-full justify-between left-0 p-4'>
                                    <p className='bg-white rounded-xl w-fit py-1 px-1 text-center text-sm'>{item.tag}</p>
                                    <div className='mt-2'>
                                        <p className='text-white text-lg font-bold'>{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Spotlight;
