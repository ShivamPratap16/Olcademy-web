import React, { useState } from "react";
import services1 from "../assets/services1.png"; 
import services2 from "../assets/services2.jpeg";
import services3 from "../assets/services3.png"; 
import services4 from "../assets/services4.jpeg"; 

const data = [
    {
        title: "Next-Gen Robotics",
        subtitle: "Innovating automation through advanced robotics technology.",
        image: services1,
        link: "/next-gen-robotics", 
    },
    {
        title: "Artificial Intelligence",
        subtitle: "Leveraging AI to drive efficiency and productivity across industries.",
        image: services2,
        link: "/artificial-intelligence", 
    },
    {
        title: "Internet of Things (IoT)",
        subtitle: "Connecting devices for smarter solutions and enhanced data analytics.",
        image: services3,
        link: "/iot", 
    },
    {
        title: "Blockchain Technology",
        subtitle: "Enhancing security and transparency through decentralized systems.",
        image: services4,
        link: "/blockchain", 
    },
];

const Manufacturing = () => {
    const [selectedChallenge, setSelectedChallenge] = useState(null);

    const solutionData = [
        {
            solutionTitle: "Accelerating Production Efficiency",
            solutionContent:
                "We optimize manufacturing workflows to enhance throughput and reduce waste.",
        },
        {
            solutionTitle: "Smart Automation Solutions",
            solutionContent:
                "Our advanced automation technologies increase productivity while reducing manual labor costs.",
        },
        {
            solutionTitle: "Data-Driven Supply Chain Optimization",
            solutionContent:
                "Leverage IoT and big data to streamline supply chain management and improve resource allocation.",
        },
        {
            solutionTitle: "Sustainability and Green Manufacturing",
            solutionContent:
                "We offer sustainable manufacturing solutions that minimize environmental impact.",
        },
    ];

    const handleClick = (index) => {
        setSelectedChallenge(selectedChallenge === index ? null : index);
    };

    return (
        <div className="w-full h-auto bg-white">
            {/* Hero Section */}
            <div className="relative h-[85vh] mt-16 image-container">
    <img
        src="/src/assets/manufacturing'.jpg"
        alt="Manufacturing"
        className="absolute inset-0 object-cover w-full h-full"
    />
    {/* Stronger background overlay with gradient for better contrast */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-70"></div>
    <div className="absolute inset-0 flex flex-col justify-center items-start z-20 px-10 md:px-20">
        <h2 className="text-sm font-semibold text-white uppercase tracking-widest mb-2">Industries / Manufacturing</h2>
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
            Innovating for Greater Manufacturing Efficiency
        </h1>
        <p className="text-lg lg:text-xl text-white max-w-[80%] lg:max-w-[40%] mb-6 leading-relaxed drop-shadow-xl">
            Driving advancements in manufacturing technology to enhance operational productivity.
        </p>
    </div>
</div>



            {/* New Information Section - Manufacturing Innovation */}
            <div className="flex flex-col items-center justify-center h-[80vh] bg-white">
                <div className="max-w-3xl text-center">
                    <h2 className="text-4xl mb-4 text-black font-semibold">
                        Manufacturing Innovation
                    </h2>
                    <p className="text-lg text-black mb-4 leading-relaxed">
                        We empower manufacturers with cutting-edge technology to improve production processes, reduce costs, and drive sustainable growth.
                    </p>
                </div>
            </div>

            {/* Information Section */}
            <div className="flex flex-col lg:flex-row items-start p-8 text-gray-900 mt-8 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col justify-center w-full lg:w-1/2 pr-6">
                    <h2 className="text-4xl mb-4 text-black">
                        Partner with us for innovative manufacturing solutions.
                    </h2>
                    <h3 className="text-sm font-bold uppercase mb-2 text-gray-500">Your Challenge</h3>
                    <div className="space-y-4">
                        {solutionData.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center p-4 rounded-lg border transition-all duration-300 ${
                                    selectedChallenge === index ? "bg-white border-[#15a7e7]" : "bg-gray-50 border-gray-300"
                                }`}
                            >
                                <button
                                    className={`text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                                        selectedChallenge === index ? "bg-[#15a7e7] text-white" : "bg-gray-300 text-black"
                                    }`}
                                    onClick={() => handleClick(index)}
                                >
                                    {index + 1}
                                </button>
                                <div className="ml-4">
                                    <h4
                                        className="text-lg font-semibold cursor-pointer"
                                        onClick={() => handleClick(index)}
                                    >
                                        {item.solutionTitle}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Solutions Section */}
                <div className="flex flex-col justify-center w-full lg:w-1/2 pl-6 mt-8 lg:mt-0">
                    <h3 className="text-sm font-bold uppercase mb-2 text-gray-500">Our Solutions</h3>
                    {selectedChallenge !== null && (
                        <>
                            <div className="text-2xl font-semibold text-black mb-2">
                                {solutionData[selectedChallenge].solutionTitle}
                            </div>
                            <p className="text-gray-700 mb-4">
                                {solutionData[selectedChallenge].solutionContent}
                            </p>
                        </>
                    )}
                </div>
            </div>

            {/* Services Section */}
            <div className="pt-16 pb-4 w-full px-10 bg-[#1E2222]">
                <h2 className="text-3xl font-bold text-white uppercase tracking-wide pt-5">Services</h2>
                <div className="mt-12 grid grid-cols-1 xl:grid-cols-4 gap-4">
                    {data.map((item, index) => (
                        <div
                            className="group mt-2 relative cursor-pointer"
                            key={index}
                            onClick={() => (window.location.href = item.link)}
                        >
                            <div className="relative rounded-2xl overflow-hidden transition-all duration-300 transform group-hover:-translate-y-2">
                                <img
                                    src={item.image}
                                    className="w-full h-[350px] object-cover rounded-2xl transition-all duration-300 group-hover:blur-sm"
                                    alt={item.title}
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70">
                                    <h2 className="text-white text-2xl">{item.title}</h2>
                                    <p className="text-gray-300 text-lg">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-800 p-8 rounded-lg mt-8 mx-10">
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
                        rows="4"
                        className="p-2 rounded-lg mb-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Manufacturing;
