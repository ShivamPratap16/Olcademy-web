import React, { useState } from "react";
import services3 from "../assets/cognitive.jpg";
import services1 from "../assets/services1.jpg";
import services5 from "../assets/services5.jpg";
import services2 from "../assets/services2.jpeg";

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

const Olcademy = () => {
    const [selectedChallenge, setSelectedChallenge] = useState(null);

    const solutionData = [
        {
            solutionTitle: "Reimagining the learning experience",
            solutionContent:
                "We innovate in education through AI-powered tools that facilitate personalized learning, enhancing engagement and student success across diverse learning environments.",
        },
        {
            solutionTitle: "Data-driven education solutions",
            solutionContent:
                "Our AI and analytics-based platforms provide real-time insights to educators, helping them make informed decisions to improve teaching outcomes and student progress.",
        },
        {
            solutionTitle: "Building the future of education",
            solutionContent:
                "By combining emerging technologies like AI and virtual learning environments, we create impactful solutions that transform educational institutions into digital-first organizations.",
        },
        {
            solutionTitle: "Empowering students for success",
            solutionContent:
                "Our student-focused tools support learning on a global scale, with interactive content, real-time feedback, and seamless access to resources from anywhere in the world.",
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
                    src="/src/assets/olcademy.jpg"
                    alt="Olcademy"
                    className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start z-20 px-10 md:px-20">
                    <h2 className="text-sm font-semibold text-white uppercase tracking-widest mb-2">Industries / Education</h2>
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        Olcademy: Transforming Education
                    </h1>
                    <p className="text-lg lg:text-xl text-white max-w-[80%] lg:max-w-[40%] mb-6 leading-relaxed">
                        Olcademy empowers educational institutions to create personalized, data-driven learning experiences for students worldwide.
                    </p>
                </div>
            </div>

            {/* New Information Section - Empowering Education */}
            <div className="flex flex-col items-center justify-center h-[80vh] bg-white">
                <div className="max-w-3xl text-center">
                    <h2 className="text-4xl mb-4 text-gray-800 font-semibold">
                        Empowering Education for the Future
                    </h2>
                    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                        The education sector is rapidly evolving with the help of AI and other advanced technologies. Olcademy leads this transformation by providing tools that foster personalized learning, greater accessibility, and data-driven decisions.
                    </p>
                </div>
            </div>

            {/* Information Section */}
            <div className="flex flex-col lg:flex-row items-start p-8 text-gray-900 mt-8 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col justify-center w-full lg:w-1/2 pr-6">
                    <h2 className="text-4xl mb-4 text-black">
                        Partner with Olcademy for the Future of Learning
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
                <h2 className="text-3xl font-bold text-white uppercase tracking-wide pt-5">Our Services</h2>
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
                        className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Olcademy;
