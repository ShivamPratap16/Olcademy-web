import emailjs from '@emailjs/browser';
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // EmailJS service for sending the email
        emailjs
            .sendForm(
                'service_xefhsud',        // Replace with your service ID
                'template_qgff6za',       // Replace with your template ID
                e.target,
                'AdxATJBB5sW0BQeVI'            // Replace with your user ID
            )
            .then(
                (result) => {
                    setSubmissionStatus('Message sent successfully!');
                    setIsSubmitting(false);
                    setFormData({ name: '', email: '', message: '' }); // Reset form
                },
                (error) => {
                    setSubmissionStatus('There was an error sending your message.');
                    setIsSubmitting(false);
                }
            );
    };

    return (
        <div className="bg-gray-800 p-8 rounded-lg mt-16 mx-10 h-screen">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
            {submissionStatus && (
                <div className="bg-green-500 text-white p-2 mb-4 rounded-md">
                    {submissionStatus}
                </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label className="text-gray-300 mb-2" htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="p-2 rounded-lg mb-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <label className="text-gray-300 mb-2" htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="p-2 rounded-lg mb-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

                <label className="text-gray-300 mb-2" htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Your Message"
                    className="p-2 rounded-lg mb-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                ></textarea>

                <button
                    type="submit"
                    className={`py-2 px-6 rounded-lg text-white font-bold transition duration-300 ${
                        isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default Contact;
