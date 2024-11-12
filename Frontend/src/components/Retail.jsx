import React, { useState } from "react";
import services1 from "../assets/services1.png";
import services2 from "../assets/services2.jpeg";
import services3 from "../assets/services3.png";
import services4 from "../assets/services4.jpeg";

const data = [
    {
        title: "Product Management",
        subtitle: "Streamlining inventory and product displays.",
        image: services1,
        link: "/product-management",
    },
    {
        title: "Customer Engagement",
        subtitle: "Enhancing customer experience and loyalty.",
        image: services2,
        link: "/customer-engagement",
    },
    {
        title: "Sales Optimization",
        subtitle: "Maximizing sales through effective strategies.",
        image: services3,
        link: "/sales-optimization",
    },
    {
        title: "Market Analysis",
        subtitle: "Understanding market trends and customer needs.",
        image: services4,
        link: "/market-analysis",
    },
];

const Retail = () => {
    const [selectedChallenge, setSelectedChallenge] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState('');

    const solutionData = [
        {
            solutionTitle: "Improved Product Visibility",
            solutionContent: "Optimizing product visibility and customer interactions to drive sales.",
        },
        {
            solutionTitle: "Customer-Centric Strategies",
            solutionContent: "Implementing personalized strategies for enhanced customer engagement.",
        },
        {
            solutionTitle: "Sales Data Analytics",
            solutionContent: "Leveraging sales data for better decision-making and performance tracking.",
        },
        {
            solutionTitle: "Efficient Market Analysis",
            solutionContent: "Using data analytics to understand market trends and customer needs.",
        },
    ];

   
 const handleClick = (index) => {
    setSelectedChallenge(selectedChallenge === index ? null : index);
};

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSubmissionStatus("Thank you for contacting us. We will get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
    } catch (error) {
        setSubmissionStatus("Something went wrong. Please try again later.");
    } finally {
        setIsSubmitting(false);
    }
};

    return (
        <div className="w-full h-auto bg-white">
            {/* Hero Section */}
            <div className="relative h-[85vh] mt-16 image-container">
                <img
                    src="/src/assets/retail.jpg"
                    alt="Retail Services"
                    className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-70"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start z-20 px-10 md:px-20">
                    <h2 className="text-sm font-semibold text-white uppercase tracking-widest mb-2">Industries / Retail</h2>
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
                        Empowering Retail with Innovative Solutions
                    </h1>
                    <p className="text-lg lg:text-xl text-white max-w-[80%] lg:max-w-[40%] mb-6 leading-relaxed drop-shadow-xl">
                        Transforming the retail industry through cutting-edge technologies and customer-centric strategies.
                    </p>
                </div>
            </div>

            {/* New Information Section - Retail Innovation */}
            <div className="flex flex-col items-center justify-center h-[80vh] bg-white">
                <div className="max-w-3xl text-center">
                    <h2 className="text-4xl mb-4 text-black font-semibold">Retail Innovation</h2>
                    <p className="text-lg text-black mb-4 leading-relaxed">
                        We help retail businesses innovate and stay ahead of the competition by adopting emerging technologies and enhancing customer experiences.
                    </p>
                </div>
            </div>

            {/* Information Section */}
            <div className="flex flex-col lg:flex-row items-start p-8 text-gray-900 mt-8 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col justify-center w-full lg:w-1/2 pr-6">
                    <h2 className="text-4xl mb-4 text-black">
                        Partner with us for transformative retail solutions.
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
            <div className="bg-gray-800 p-8 rounded-lg mt-16 mx-10">
                <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                {submissionStatus && <div className="bg-green-500 text-white p-2 mb-4 rounded-md">{submissionStatus}</div>}
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label className="text-gray-300 font-semibold mb-2">Your Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="p-2 mb-4 rounded-md bg-gray-700 text-white focus:outline-none" required />

                    <label className="text-gray-300 font-semibold mb-2">Your Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="p-2 mb-4 rounded-md bg-gray-700 text-white focus:outline-none" required />

                    <label className="text-gray-300 font-semibold mb-2">Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="p-2 mb-4 rounded-md bg-gray-700 text-white focus:outline-none" required></textarea>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Retail;
