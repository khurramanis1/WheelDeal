import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-200 min-h-screen py-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">

          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
            About Us
          </h1>

          {/* Intro */}
          <p className="text-gray-700 text-lg leading-7 mb-6">
            We are committed to providing high-quality automotive parts with a wide
            range of components suitable for different vehicle models. Our goal is to
            make car maintenance easier, more reliable, and more affordable for
            everyone. Whether you're a mechanic, a workshop owner, or a car
            enthusiast, we proudly offer a trusted collection of premium parts backed
            by tested performance and durability.
          </p>

          {/* Line */}
          <div className="w-full h-[2px] bg-gray-200 my-8"></div>

          {/* Mission + Vision */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Mission */}
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-7">
                Our mission is to deliver reliable automotive parts at fair prices
                while maintaining superior quality standards. We aim to simplify the
                parts-buying experience by offering a smooth, user-friendly platform
                where customers can explore detailed product descriptions, sharp
                images, and accurate specifications before making a choice.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-7">
                Our long-term vision is to become one of the most trusted automotive
                parts providers in the region, offering a complete range of
                engine, fuel system, electrical, suspension, and body components — all
                under one unified platform. We aim to empower our customers with
                convenience, authenticity, and a seamless shopping experience.
              </p>
            </div>

          </div>

          {/* Why Choose Us */}
          <div className="mt-12 p-6 bg-red-50 rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h2>

            <ul className="space-y-3 text-gray-700 leading-7">
              <li>✔ High-quality and durable auto parts</li>
              <li>✔ Accurate product details with long descriptions</li>
              <li>✔ Trusted and tested components for multiple vehicle types</li>
              <li>✔ Easy navigation and modern user interface</li>
              <li>✔ Affordable prices with genuine reliability</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;