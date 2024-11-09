import React, { useState } from "react";
import services1 from "../assets/services1.png"; // Adjust the path as needed
import services2 from "../assets/services2.jpeg"; // Adjust the path as needed
import services3 from "../assets/services3.png"; // Adjust the path as needed
import services4 from "../assets/services4.jpeg"; // Adjust the path as needed
// Adjust the path as needed

const servicesData = [
    {
        title: "Network Security",
        subtitle: "Protecting your networks from unauthorized access and attacks.",
        image: services4,
        link: "/network-security",
    },
    {
        title: "Data Protection",
        subtitle: "Ensuring data integrity and security against breaches.",
        image: services1,
        link: "/data-protection",
    },
    {
        title: "Incident Response",
        subtitle: "Rapidly addressing security breaches to minimize damage.",
        image: services2,
        link: "/incident-response",
    },
    {
        title: "Compliance Management",
        subtitle: "Helping organizations comply with security regulations.",
        image: services3,
        link: "/compliance-management",
    },
   
];

const infoData = [
    "Safeguard your sensitive data against evolving cyber threats.",
    "Implement robust security protocols and risk management strategies.",
    "Enhance your organization's resilience against cyber attacks.",
    "Ensure compliance with industry regulations and standards.",
    "Conduct regular security assessments to identify vulnerabilities.",
];

const CyberSecurity = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // State for hovered item
    const [activeItem, setActiveItem] = useState(null); // State for active info item

    const handleImageClick = (link) => {
        window.location.href = link; // Redirect to link on click
    };

    return (
        <div className="w-full h-auto bg-gray-100">
            {/* Hero Section */}
            <div className="relative h-[70vh] mt-16 group">
                <img
                    src="/src/assets/cyber.jpg" // Ensure this path is correct
                    alt="Cybersecurity"
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110 group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h1 className="text-7xl font-bold text-white transition-all duration-300 transform hover:scale-105 hover:text-white">
                        CYBERSECURITY
                    </h1>
                </div>
            </div>

            {/* Text Section */}
            <div className="flex flex-col lg:flex-row items-start p-8 text-black mt-8">
                <div className="flex flex-col justify-center w-full lg:w-1/2 pl-6">
                    <h2 className="text-4xl font-bold mb-6">Protect Your Business with Comprehensive Cybersecurity</h2>
                    <ul className="text-gray-800 leading-relaxed mb-4 list-disc pl-5">
                        {infoData.map((item, index) => (
                            <li key={index} className="cursor-pointer hover:text-blue-600" onClick={() => setActiveItem(index === activeItem ? null : index)}>
                                <span className="font-semibold">{`Approach ${index + 1}: `}</span>
                                {activeItem === index && <span className="text-gray-600">{item}</span>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Services Section */}
            <div className="pt-16 pb-4 w-full px-10 bg-[#1E2222]">
                <h2 className="text-3xl font-bold text-white uppercase tracking-wide pt-5">Our Services</h2>
                <div className="mt-12 grid grid-cols-1 xl:grid-cols-3 gap-4">
                    {servicesData.map((item, index) => (
                        <div
                            className="group mt-2"
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
                            onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
                        >
                            <div
                                className={`relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer transform ${hoveredIndex === index ? 'translate-y-[-10px]' : 'translate-y-0'}`}
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

export default CyberSecurity;
