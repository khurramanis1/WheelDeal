import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields.");
      return;
    }

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-200 min-h-screen py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">

          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Contact Us
          </h1>

          {/* Success Message */}
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg">
              Your message has been sent successfully!
            </div>
          )}

          {/* Layout */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Contact Information */}
            <div className="p-6 bg-gray-50 rounded-xl shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Get in Touch
              </h2>

              <p className="text-gray-700 leading-7 mb-4">
                If you have questions about our automotive parts, need help choosing
                the right component, or want support with your order — feel free to
                reach out anytime. Our team is always ready to assist you.
              </p>

              <div className="space-y-3 text-gray-700">
                <p>📍 <strong>Location:</strong> Karachi, Pakistan</p>
                <p>📞 <strong>Phone:</strong> +92 300 0000000</p>
                <p>📧 <strong>Email:</strong> khurram@autoparts.com</p>
                <p>🕒 <strong>Hours:</strong> 10:00 AM – 10:00 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="p-6 bg-gray-50 rounded-xl shadow space-y-5"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Send a Message
              </h2>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                  placeholder="example@mail.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-red-400 focus:outline-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg shadow transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;