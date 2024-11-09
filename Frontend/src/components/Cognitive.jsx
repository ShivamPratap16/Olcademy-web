import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa"; // Ensure you have this import for icons
import services3 from "../assets/services3.png";
import services1 from "../assets/services1.png";
import services5 from "../assets/services5.jpeg";
import services2 from "../assets/services2.jpeg"; // Adjust the path according to your folder structure

const data = [
    {
        title: "Cognitive Business Operations",
        subtitle: "Harnessing AI to enhance operational efficiency and decision-making.",
        image: services3,
        link: "/cognitive-business-operations",
    },
    {
        title: "Artificial Intelligence",
        subtitle: "Transforming industries with intelligent automation and data-driven insights.",
        image: services1,
        link: "/artificial-intelligence",
    },
    {
        title: "Cloud",
        subtitle: "Enabling scalable solutions and seamless collaboration through cloud technology.",
        image: services2,
        link: "/cloud",
    },
    {
        title: "Cybersecurity",
        subtitle: "Protecting organizations from evolving cyber threats and ensuring data integrity.",
        image: services5,
        link: "/cybersecurity",
    },
];

// Sample information data for collapsible items
const infoData = [
    "Our cognitive operations focus on leveraging AI to optimize workflows and enhance productivity.",
    "We integrate intelligent systems to support data-driven decision-making.",
    "Our collaborative approach tailors solutions to align with client objectives.",
    "We emphasize innovation and continuous improvement in our processes.",
];

const Cognitive = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // State for the hovered item
    const [activeItem, setActiveItem] = useState(null); // State for the active info item

    const handleImageClick = (link) => {
        window.location.href = link; // Redirect to link on click
    };

    return (
        <div className="w-full h-auto bg-gray-100">
            {/* Hero Section */}
            <div className="relative h-[88vh] mt-16 group">
                <img
                    src={services3} // Ensure this path is correct; replace with the actual hero image if different
                    alt="Cognitive Business Operations"
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70"></div>
                <div className="absolute inset-0 flex flex-col items-start justify-center z-20 pl-10 md:pl-20 text-left">
                    <h1 className="text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
                        COGNITIVE BUSINESS OPERATIONS
                    </h1>
                    <p className="text-lg lg:text-2xl text-white max-w-[90%] md:max-w-[50%] leading-relaxed animate-slide-in-left">
                        Empowering your organization with AI-driven solutions.
                    </p>
                </div>
            </div>

            {/* Information Section */}
            <div className="flex flex-col lg:flex-row items-start p-8 text-gray-900 mt-8 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col justify-center w-full lg:w-1/2 pl-6">
                    <h2 className="text-4xl font-bold mb-4 text-black border-b-4 border-black inline-block pb-1">
                        Unlock Your Potential with Cognitive Solutions
                    </h2>
                    <ul className="space-y-4 text-lg font-semibold text-gray-800 leading-7 pl-4 border-l-4 border-black">
                        {infoData.map((item, index) => (
                            <li key={index} className="flex flex-col items-start">
                                <span
                                    className="text-black cursor-pointer hover:underline flex items-center space-x-2"
                                    onClick={() => setActiveItem(index === activeItem ? null : index)} // Toggle visibility
                                >
                                    <span className="text-2xl">{activeItem === index ? <FaArrowUp /> : <FaArrowDown />}</span>
                                    <span>{`Our Approach ${index + 1}`}</span>
                                </span>
                                {activeItem === index && (
                                    <span className="mt-2 text-gray-700 transition-all duration-300 ease-in-out max-h-24 overflow-hidden">
                                        {item}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Services Section */}
            <div className="pt-16 pb-4 w-full px-10 bg-[#1E2222]">
                <h2 className="text-3xl font-bold text-white uppercase tracking-wide pt-5">Services</h2>
                <div className="mt-12 grid grid-cols-1 xl:grid-cols-4 gap-4">
                    {data.map((item, index) => (
                        <div
                            className="group mt-2"
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
                            onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
                        >
                            <div
                                className={`relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer transform ${
                                    hoveredIndex === index ? 'translate-y-[-10px]' : 'translate-y-0'
                                }`}
                                onClick={() => handleImageClick(item.link)}
                            >
                                <img
                                    src={item.image}
                                    className={`w-full h-[350px] object-cover rounded-2xl transition-all duration-300 ${hoveredIndex === index ? 'filter blur-sm' : ''}`} // Apply blur based on hovered index
                                    alt={item.title}
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70 flex flex-col justify-end p-4">
                                    <h2 className="text-white text-2xl">{item.title}</h2>
                                    {hoveredIndex === index && ( // Show subtitle only when hovered
                                        <p className="text-gray-300 text-lg transition-opacity duration-300">
                                            {item.subtitle}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="bg-gray-800 p-8 rounded-lg mt-8">
                <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                <form className="flex flex-col">
                    <label className="text-gray-300 mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="p-2 rounded-lg mb-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <label className="text-gray-300 mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        className="p-2 rounded-lg mb-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <label className="text-gray-300 mb-2" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        className="p-2 rounded-lg mb-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Cognitive;
