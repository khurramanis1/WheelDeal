import React from "react";
import Navbar from "./../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">

          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Refund Policy
          </h1>

          <p className="text-gray-600 text-center leading-relaxed max-w-2xl mx-auto">
            We aim to provide a smooth and transparent shopping experience.
            Please read the refund conditions carefully before submitting a request.
          </p>

          {/* Refund Eligibility */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Eligibility for Refund
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Customers are eligible for a refund only under the following
              conditions:
            </p>

            <ul className="list-disc pl-6 text-gray-600 leading-relaxed mt-3">
              <li>The product received is incorrect or damaged.</li>
              <li>The item delivered does not match the description.</li>
              <li>The product is unused and in its original packaging.</li>
              <li>Refund request is made within 7 days of delivery.</li>
            </ul>
          </div>

          {/* Non-Refundable Items */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Non-Refundable Items
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The following items are not eligible for a refund:
            </p>

            <ul className="list-disc pl-6 text-gray-600 leading-relaxed mt-3">
              <li>Electrical parts that have been installed.</li>
              <li>Used or damaged items due to misuse.</li>
              <li>Products purchased on special sale or clearance.</li>
              <li>Incorrect order placement by the customer.</li>
            </ul>
          </div>

          {/* Refund Process */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Refund Process
            </h2>

            <ol className="list-decimal pl-6 text-gray-600 leading-relaxed">
              <li>Submit your order ID and refund request through our Contact Page.</li>
              <li>Provide clear pictures or videos of the issue (if applicable).</li>
              <li>Our team will inspect your request within 2–4 working days.</li>
              <li>Once approved, your refund will be processed within 5–7 days.</li>
            </ol>
          </div>

          {/* Mode of Refund */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Refund Method
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Refunds are issued through the same payment method used during
              purchase. Cash-on-delivery orders will be refunded via bank transfer
              or Easypaisa/JazzCash.
            </p>
          </div>

          {/* Support */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Need Help With a Refund?
            </h3>
            <p className="text-gray-600 mb-4">
              Our customer support team is always ready to assist you.
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

export default RefundPolicy;