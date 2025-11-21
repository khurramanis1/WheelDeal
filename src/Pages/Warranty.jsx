import React from "react";
import Navbar from "./../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Warranty = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">

          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Warranty Information
          </h1>

          <p className="text-gray-600 text-center leading-relaxed max-w-2xl mx-auto">
            We provide transparent and reliable warranty coverage for all automotive
            parts to ensure customer confidence and long-term satisfaction. Please
            review the details below to understand your coverage.
          </p>

          {/* Warranty Types */}
          <div className="mt-10 grid md:grid-cols-2 gap-8">

            {/* Part Warranty */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Parts Warranty
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All products purchased from us carry a standard warranty of 
                <span className="font-semibold text-gray-800"> 6 months</span>,
                covering manufacturing defects and internal faults.  
                Physical damage or improper installation is not covered.
              </p>
            </div>

            {/* Replacement Policy */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Replacement Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If a purchased product fails within the warranty period, we offer 
                free replacement after inspection.  
                Replacement time may vary based on availability.
              </p>
            </div>

            {/* No Warranty Items */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Items Not Covered
              </h2>
              <ul className="text-gray-600 leading-relaxed list-disc pl-6">
                <li>Burnt or tampered products</li>
                <li>Improper installation or misuse</li>
                <li>Electrical short circuits caused externally</li>
                <li>Damage caused by vehicle accidents</li>
              </ul>
            </div>

            {/* Claim Process */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                Warranty Claim Process
              </h2>
              <ol className="text-gray-600 leading-relaxed list-decimal pl-6">
                <li>Send us your purchase receipt or order ID.</li>
                <li>Describe the issue with pictures/videos if possible.</li>
                <li>Our technician will inspect the fault.</li>
                <li>A replacement will be provided if eligible.</li>
              </ol>
            </div>

          </div>

          {/* Contact Support */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Need Help With a Warranty Claim?
            </h3>
            <p className="text-gray-600 mb-4">
              Our support team is available to assist you anytime.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 transition text-white font-semibold px-6 py-3 rounded-lg shadow"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Warranty;