import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import countries from "world-countries";

export default function Signup({ isOpen, onClose }) {
    const [data, setData] = useState({
        username: "",
        email: "",
        number: "",
        pincode: "",
        country: "",
        password: "",
        cpassword: ""
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");
    const countryList = countries.map((country) => country.name.common).sort();
    const navigate = useNavigate()
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
        }));
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const postUrl = "https://cervino-ceramix-backend-production.up.railway.app/api/sign-up";


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, number, pincode, password, cpassword, country } = data;
        const newErrors = {};

        if (!username.trim()) newErrors.username = "Full name is required.";
        if (!email.trim()) newErrors.email = "Email is required.";
        else if (!validateEmail(email)) newErrors.email = "Enter a valid email.";
        if (!number.trim()) newErrors.number = "Phone number is required.";
        else if (!/^\d{10}$/.test(number)) newErrors.number = "Must be 10 digits.";
        if (!pincode.trim()) newErrors.pincode = "Correct Pincode required.";
        if (!country) newErrors.country = "Country is required.";
        if (!password.trim()) newErrors.password = "Password is required.";
        if (!cpassword.trim()) newErrors.cpassword = "Confirm password is required.";
        else if (password !== cpassword) newErrors.cpassword = "Passwords do not match.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setSuccess("");
            return;
        }

        setErrors({});
        setSuccess("");
        try {
            const response = await fetch(postUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            console.log("Sending Data:", JSON.stringify(data));

            if (response.ok) {
                setSuccess("Signup successful !!");
                setData({
                    username: "",
                    email: "",
                    number: "",
                    pincode: "",
                    country: "",
                    password: "",
                    cpassword: "",
                });
                setTimeout(() => {
                    onClose()
                    navigate('/');
                }, 1500);
            } else {
                setErrors({ form: "Signup failed. Please try again." });
            }
        } catch (err) {
            console.error("Error:", err);
            setErrors({ form: "Network error. Please try again." });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 p-4 flex items-center justify-center z-60">
            <div className="bg-white w-full max-w-md px-4 py-6 rounded-2xl shadow-lg relative">


                <h1 className="text-2xl text-[var(--var-red-col)] font-bold mb-4 text-center">Create an Account</h1>

                <form onSubmit={handleSubmit} className="space-y-2">
                    {errors.form && <p className="text-red-600 text-sm">{errors.form}</p>}
                    {success && <p className="text-green-600 text-sm">{success}</p>}

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Full name"
                            value={data.username}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@mail.com"
                            value={data.email}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            name="number"
                            placeholder="1234567890"
                            value={data.number}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.number && <p className="text-red-500 text-xs">{errors.number}</p>}
                    </div>
                    <div className="flex items-center gap-2">

                        <div>
                            <label className="block text-sm font-medium text-gray-700">PinCode</label>
                            <input
                                type="text"
                                name="pincode"
                                placeholder="123456"
                                value={data.pincode}
                                onChange={handleChange}
                                className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.pincode && <p className="text-red-500 text-xs">{errors.pincode}</p>}
                        </div>
                        <div className="">
                            <label className="block text-sm font-medium text-gray-700">Country</label>
                            <select
                                name="country"
                                value={data.country}
                                onChange={handleChange}
                                className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
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
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            name="cpassword"
                            placeholder="Confirm Password"
                            value={data.cpassword}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.cpassword && <p className="text-red-500 text-xs">{errors.cpassword}</p>}
                    </div>
                    <div className="flex justify-center gap-4 mt-3">
                        {/* Cancel Button */}
                        <button
                            onClick={onClose}
                            className="text-gray-500 border border-[var(--var-red-col)] rounded-lg hover:text-gray-700 text-base px-4 py-2 font-bold"
                            type="button"
                        >
                            Cancel
                        </button>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="bg-[var(--var-red-col)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
