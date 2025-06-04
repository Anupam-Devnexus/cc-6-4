import React, { useState } from "react";
import countries from "world-countries";
import { Helmet } from "react-helmet";

export default function ContactPage() {
    const [data, setData] = useState({
        username: "",
        email: "",
        number: "",
        address: "",
        pincode: "",
        country: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const countryList = countries.map((country) => country.name.common).sort();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validateNumber = (number) => /^\d{10}$/.test(number);
    const validatePincode = (pincode) => /^\d{4,10}$/.test(pincode);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!data.username.trim()) newErrors.username = "Full name is required.";
        if (!data.email.trim()) newErrors.email = "Email is required.";
        else if (!validateEmail(data.email)) newErrors.email = "Invalid email address.";

        if (!data.number.trim()) newErrors.number = "Contact number is required.";
        else if (!validateNumber(data.number)) newErrors.number = "Phone number must be 10 digits.";

        if (!data.address.trim()) newErrors.address = "Address is required.";

        if (!data.pincode.trim()) newErrors.pincode = "Pincode is required.";
        else if (!validatePincode(data.pincode)) newErrors.pincode = "Pincode must be 4 to 10 digits.";

        if (!data.country) newErrors.country = "Please select a country.";

        if (!data.message.trim()) newErrors.message = "Message cannot be empty.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSuccess("");
            return;
        }

        setErrors({});
        setSuccess("Sending...");

        try {
            const response = await fetch("", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess("Thank you for contacting us!");
                setData({
                    username: "",
                    email: "",
                    number: "",
                    address: "",
                    pincode: "",
                    country: "",
                    message: "",
                });
            } else {
                throw new Error("Failed to send message.");
            }
        } catch (err) {
            setSuccess("");
            setErrors({ form: "Network or server error. Please try again." });
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | YourSiteName</title>
                <meta
                    name="description"
                    content="Reach out to YourSiteName for inquiries, feedback, or support. Our team is ready to assist you."
                />
                <meta name="keywords" content="Contact, Help, Support, Feedback, Customer Service" />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <section className="min-h-screen flex items-center rounded-2xl justify-center bg-gray-200 px-4 py-4">
                <div className="w-full max-w-2xl p-8 bg-white rounded-2xl shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

                    <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact Form">
                        {success && (
                            <p className="text-green-600 text-sm" role="status">
                                {success}
                            </p>
                        )}
                        {errors.form && (
                            <p className="text-red-600 text-sm" role="alert">
                                {errors.form}
                            </p>
                        )}

                        {/* Full Name */}
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="John Doe"
                                value={data.username}
                                onChange={handleChange}
                                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@mail.com"
                                value={data.email}
                                onChange={handleChange}
                                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        </div>

                        {/* Contact Number */}
                        <div>
                            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                                Contact Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="number"
                                name="number"
                                placeholder="1234567890"
                                value={data.number}
                                onChange={handleChange}
                                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {errors.number && <p className="text-red-500 text-xs">{errors.number}</p>}
                        </div>

                        {/* Address */}
                        {/* <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Your Full Address"
                                value={data.address}
                                onChange={handleChange}
                                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
                        </div> */}

                        {/* Pincode */}
                        <div>
                            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                                Pincode <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="pincode"
                                name="pincode"
                                placeholder="Postal Code"
                                value={data.pincode}
                                onChange={handleChange}
                                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {errors.pincode && <p className="text-red-500 text-xs">{errors.pincode}</p>}
                        </div>

                        {/* Country */}
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="country"
                                name="country"
                                value={data.country}
                                onChange={handleChange}
                                className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">-- Select a country --</option>
                                {countryList.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                            {errors.country && <p className="text-red-500 text-xs">{errors.country}</p>}
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Write your message here..."
                                value={data.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full p-2 mt-1 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[var(--var-red-col)] cursor-pointer text-white py-2 rounded-lg transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
