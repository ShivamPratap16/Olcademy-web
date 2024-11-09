import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiPagesLine } from "react-icons/ri";
import { Link } from 'react-router-dom'; // Import Link for routing
import "./hero.css";

import card1 from "../assets/small.jpg";
import card2 from "../assets/smart.jpg";
import card3 from "../assets/staffing.jpg";
import card4 from "../assets/social.jpg";
import card5 from "../assets/card-5.jpeg";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
    {
        title: "Revolutionizing Education with AI",
        image: card1,
        link: "/revolutionizing-education", // Add specific route for navigation
    },
    {
        title: "Empowering Small Businesses",
        image: card2,
        link: "/empowering-small-businesses", // Add specific route for navigation
    },
    {
        title: "The Future of Learning",
        image: card3,
        link: "/future-of-learning", // Add specific route for navigation
    },
    {
        title: "Smart Solutions for Every Classroom",
        image: card4,
        link: "/smart-solutions", // Add specific route for navigation
    },
];

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function HeroSmallCarousel() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
    const [isEditing, setIsEditing] = useState(false); // Track editing state
    const [websiteData, setWebsiteData] = useState({
        title: "Revolutionizing Education with AI",
        subtitle: "A comprehensive solution to enhance learning with AI.",
        content: "We aim to revolutionize education by providing AI-driven tools for a better learning experience.",
    }); // Track content being edited

    // Check if user is logged in when the component mounts
    useEffect(() => {
        const user = localStorage.getItem("Users");
        if (user) {
            setIsLoggedIn(true); // If user is logged in, show the Edit button
        }
    }, []);

    // Handle the "Edit" button click
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // Handle saving content after editing
    const handleSaveClick = () => {
        setIsEditing(false);
        // Logic to save the data (e.g., making an API call)
        console.log('Saving changes:', websiteData);

        // Optionally save changes to local storage or call an API
        localStorage.setItem("websiteData", JSON.stringify(websiteData));
    };

    // Handle input change in the website content (edit mode)
    const handleInputChange = (e) => {
        setWebsiteData({
            ...websiteData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="relative">
            {/* Conditionally render the "Edit" button */}
            {isLoggedIn && !isEditing && (
                <button
                    onClick={handleEditClick}
                    className="absolute bottom-5 right-5 bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
                >
                    Edit
                </button>
            )}

            {/* Swiper Carousel */}
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                spaceBetween={50}
                keyboard={true}
                breakpoints={{
                    1280: {
                        slidesPerView: 3
                    },
                    0: {
                        slidesPerView: 1
                    }
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper text-white w-full h-full"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className="text-center text-lg overflow-hidden flex justify-center items-center">
                        <div className="overflow-hidden group">
                            <img src={item.image} alt="" className="relative bg-cover brightness-50 group-hover:scale-150 transition-all duration-500 w-full h-full inline-block" />
                            <div className="p-5 gap-5 flex flex-col items-start absolute bottom-0 left-0 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-black">
                                <h3 className="text-4xl text-start">{item.title}</h3>
                                <p className="text-start w-4/5">{item.subtitle}</p>
                                <p className="flex gap-2 items-center">
                                    <Link to={item.link} className="bg-[#15a7e7] text-white font-bold py-2 px-4 rounded-full bg-[#15a7e7] transition duration-300">
                                        Read
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Editable Content */}
            {isEditing && (
                <div className="mt-8">
                    <h3>Edit the Website Content:</h3>

                    {/* Editable Title */}
                    <div className="mt-4">
                        <label htmlFor="title" className="block">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={websiteData.title}
                            onChange={handleInputChange}
                            className="w-full p-4 border rounded-md"
                            placeholder="Edit the title..."
                        />
                    </div>

                    {/* Editable Subtitle */}
                    <div className="mt-4">
                        <label htmlFor="subtitle" className="block">Subtitle</label>
                        <input
                            type="text"
                            name="subtitle"
                            value={websiteData.subtitle}
                            onChange={handleInputChange}
                            className="w-full p-4 border rounded-md"
                            placeholder="Edit the subtitle..."
                        />
                    </div>

                    {/* Editable Content */}
                    <div className="mt-4">
                        <label htmlFor="content" className="block">Content</label>
                        <textarea
                            name="content"
                            value={websiteData.content}
                            onChange={handleInputChange}
                            className="w-full p-4 border rounded-md"
                            rows="6"
                            placeholder="Edit the content..."
                        ></textarea>
                    </div>

                    {/* Save Changes Button */}
                    <button
                        onClick={handleSaveClick}
                        className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Save Changes
                    </button>
                </div>
            )}
        </div>
    );
}
