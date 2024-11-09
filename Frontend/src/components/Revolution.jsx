import React from "react";


const Revolution = () => {
    return (
        <div className="w-full h-auto">
            {/* Image Section */}
            <div className="relative h-[70vh] mt-16 group">
                {/* Background Image */}
                <img
                    src="/src/assets/ai-in.jpg" // Adjust the image path accordingly
                    alt="Revolutionizing Education with AI"
                    className="absolute inset-0 object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110 group-hover:blur-sm"
                />

                {/* Title Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h1 className="text-7xl font-bold text-white transition-all duration-300 transform hover:scale-105 hover:text-white">
                        EDUCATION WITH AI
                    </h1>
                </div>
            </div>

            {/* Text Section */}
            <div className="flex flex-col lg:flex-row items-start p-8 text-white mt-8">
                <div className="flex flex-col justify-center w-full lg:w-1/2 pl-6">
                    <h2 className="text-4xl font-bold mb-6">Transforming Learning Experiences with Olcademy</h2>
                    <ul className="text-gray-300 leading-relaxed mb-4 list-disc pl-5">
                        <li>Utilizing AI to tailor educational content to individual student needs.</li>
                        <li>Implementing data analytics to enhance learning outcomes and engagement.</li>
                        <li>Creating immersive learning environments through AI-driven simulations.</li>
                        <li>Empowering educators with advanced tools to facilitate personalized learning.</li>
                        <li>Driving innovation in teaching methodologies through intelligent technologies.</li>
                    </ul>
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

export default Revolution;
