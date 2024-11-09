import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../assets/fy2.jpg';
import img2 from "../assets/luca-bravo-XJXWbfSo2f0-unsplash.jpg";
import img3 from "../assets/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg";
import img4 from "../assets/ai-study.jpeg";
import img5 from "../assets/luca-bravo-XJXWbfSo2f0-unsplash.jpg";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const initialData = [
    {
        title: "Olcademy Starts FY2025 on a Strong Note",
        subtitle: "A strong start with broad-based growth across industries and markets",
        image: img,
        route: "/fy2025-start"
    },
    {
        title: "Olcademy is here to bring difference",
        subtitle: "A Partnership with Big Stakeholders",
        image: img2,
        route: "/partnership-stakeholders"
    },
    {
        title: "Olcademy GenAI Hub",
        subtitle: "Pioneering the first-ever GenAI aggregation platform for industry innovation",
        image: img3,
        route: "/genai-hub"
    },
    {
        title: "The Power of Olcademy AI",
        subtitle: "Turning potential into performance with intelligent design",
        image: img4,
        route: "/ai-power"
    },
    {
        title: "Olcademy Talks Tech - Podcast Series",
        subtitle: "Discover how GenAI is reshaping customer experiences worldwide",
        image: img5,
        route: "/tech-talks"
    }
];

export default function HeroBigCarousel() {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(initialData); // Initialize with initialData
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const swiperRef = useRef(null); 

    useEffect(() => {
        const user = localStorage.getItem("Users");
        if (user) setIsLoggedIn(true);

        // Fetch data from backend (database or any persistent storage)
        fetch('/api/carousel')
            .then(response => response.json())
            .then(data => {
                // Update state only if backend data exists
                if (data && data.length) {
                    setContent(data);
                } else {
                    // Fallback to localStorage if no backend data
                    const localCarouselData = localStorage.getItem('carouselData');
                    if (localCarouselData) {
                        setContent(JSON.parse(localCarouselData));
                    }
                }
            })
            .catch(error => console.error("Error fetching carousel data:", error));
    }, []);

    const handleReadMoreClick = (route) => {
        navigate(route);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);

        // Send updated content to the backend for permanent storage
        fetch('/api/carousel/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(content),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Data saved:", data);

            // Store the updated content in localStorage as well
            localStorage.setItem('carouselData', JSON.stringify(content));
        })
        .catch(error => console.error("Error saving carousel data:", error));
    };

    const handleInputChange = (e, index, field) => {
        const newContent = [...content];
        newContent[index][field] = e.target.value;
        setContent(newContent);
    };

    const handleImageChange = (e, index) => {
        const newContent = [...content];
        newContent[index].image = e.target.value;
        setContent(newContent);
    };

    const stopSwiper = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.stop();
            swiperRef.current.swiper.loopDestroy();
        }
    };

    return (
        <div className="h-[73vh] w-full relative">
            {isLoggedIn && !isEditing && (
                <button
                    onClick={handleEditClick}
                    className="absolute bottom-5 right-5 bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
                >
                    Edit
                </button>
            )}

            <Swiper
                ref={swiperRef}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                spaceBetween={100}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={!isEditing}
                pagination={true}
                autoplay={isEditing ? false : { delay: 3000, disableOnInteraction: false }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
                onSlideChange={() => { if (isEditing) stopSwiper(); }}
                onSwiper={() => { if (isEditing) stopSwiper(); }}
            >
                {content.map((item, index) => (
                    <SwiperSlide key={index} className="group">
                        <div className="text-white slide-content">
                            <div className="relative flex flex-col mt-10 items-center">
                                <div className="relative h-100 w-100">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={item.image}
                                            onChange={(e) => handleImageChange(e, index)}
                                            className="hero-home-gradient h-full w-full"
                                        />
                                    ) : (
                                        <img
                                            src={item.image}
                                            className="hero-home-gradient h-full w-full position-relative"
                                            alt={item.title}
                                        />
                                    )}
                                    <div className="absolute -top-20 left-0 z-20 text-left">
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={item.title}
                                                onChange={(e) => handleInputChange(e, index, 'title')}
                                                className="m-4 text-4xl"
                                            />
                                        ) : (
                                            <h2 className="m-4 text-4xl">{item.title}</h2>
                                        )}
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={item.subtitle}
                                                onChange={(e) => handleInputChange(e, index, 'subtitle')}
                                                className="ml-4 text-2xl text-gray-300"
                                            />
                                        ) : (
                                            <p className="ml-4 text-2xl text-gray-300 hidden group-hover:block">
                                                {item.subtitle}
                                            </p>
                                        )}
                                        <button
                                            className="mt-4 px-2 py-2 bg-[#15a7e7] text-white font-semibold rounded-full hover:bg-[#15a7e7] transition duration-300 text-lg group-hover:block hidden"
                                            onClick={() => handleReadMoreClick(item.route)}
                                        >
                                            Read
                                        </button>
                                    </div>
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent hover:bg-black hover:bg-opacity-60 transition-all duration-200"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {isEditing && (
                <button
                    onClick={handleSaveClick}
                    className="absolute bottom-5 right-5 bg-green-500 text-white font-bold py-2 px-4 rounded-full"
                >
                    Save Changes
                </button>
            )}
        </div>
    );
}
