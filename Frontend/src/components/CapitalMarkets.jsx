import React, { useState } from "react";
import services1 from "../assets/services1.jpg"; // Update with appropriate images
import services2 from "../assets/services2.jpeg";
import services3 from "../assets/cognitive.jpg";
import services4 from "../assets/services5.jpg"; // Update as needed

const data = [
    {
        title: "Market Analytics",
        subtitle: "Leveraging data to uncover market trends and insights.",
        image: services1,
        link: "/market-analytics",
    },
    {
        title: "Risk Management",
        subtitle: "Mitigating risks with advanced analytics and strategies.",
        image: services2,
        link: "/risk-management",
    },
    {
        title: "Investment Solutions",
        subtitle: "Tailored investment strategies for optimal returns.",
        image: services3,
        link: "/investment-solutions",
    },
    {
        title: "Financial Advisory",
        subtitle: "Guiding your financial decisions with expert advice.",
        image: services4,
        link: "/financial-advisory",
    },
];

const CapitalMarkets = () => {
    const [selectedChallenge, setSelectedChallenge] = useState(null);

    const solutionData = [
        {
            solutionTitle: "Enhancing Market Competitiveness",
            solutionContent:
                "We provide innovative solutions that enhance your market position by leveraging real-time data analytics and insights, allowing you to make informed decisions swiftly.",
        },
        {
            solutionTitle: "Streamlined Trading Operations",
            solutionContent:
                "Our solutions facilitate seamless trading operations, enabling better execution and reduced transaction costs, enhancing overall trading performance.",
        },
        {
            solutionTitle: "Regulatory Compliance Simplified",
            solutionContent:
                "We ensure your operations comply with the latest regulations through our advanced monitoring systems, minimizing risks of non-compliance and financial penalties.",
        },
        {
            solutionTitle: "Dynamic Portfolio Management",
            solutionContent:
                "Utilizing advanced algorithms, we optimize portfolio management to maximize returns while effectively managing risks in fluctuating markets.",
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
                    src="/src/assets/capital-markets.png" // Update with appropriate hero image
                    alt="Capital Markets"
                    className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start z-20 px-10 md:px-20">
                    <h2 className="text-sm font-semibold text-white uppercase tracking-widest mb-2">Industries / Capital Markets</h2>
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        Capital Markets
                    </h1>
                    <p className="text-lg lg:text-xl text-white max-w-[80%] lg:max-w-[40%] mb-6 leading-relaxed">
                        Empowering your financial strategy through innovation and expertise.
                    </p>
                </div>
            </div>

            {/* New Information Section - Capital Markets Innovation */}
            <div className="flex flex-col items-center justify-center h-[80vh] bg-white">
            <div className="max-w-3xl text-center">
                    <h2 className="text-4xl mb-4 text-black ">
                        Capital Markets Innovation
                    </h2>
                    <p className="text-lg text-black mb-4 leading-relaxed">
                        The capital markets are evolving, driven by technology and innovative strategies. Our solutions provide the tools you need to navigate this dynamic landscape effectively.
                    </p>
                </div>
            </div>

    


            {/* Information Section */}
            <div className="flex flex-col lg:flex-row items-start p-8 text-gray-900 mt-8 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col justify-center w-full lg:w-1/2 pr-6">
                    <h2 className="text-4xl mb-4 text-black">
                        Partner with us for innovative capital market solutions.
                    </h2>
                    <h3 className="text-sm font-bold uppercase mb-2 text-gray-500">Your Challenge</h3>
                    <div className="space-y-4">
                        {solutionData.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center p-4 rounded-lg border transition-all duration-300 ${
                                    selectedChallenge === index ? "bg-blue-100 border-[#15a7e7]" : "bg-gray-50 border-gray-300"
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

            {/* Contact Us Section */}
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
                        rows="4"
                        placeholder="Your Message"
                        className="p-2 rounded-lg mb-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CapitalMarkets;
