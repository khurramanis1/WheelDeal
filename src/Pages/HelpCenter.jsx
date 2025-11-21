import React from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Help Center</h1>
        <p className="text-gray-600 mb-12 max-w-2xl leading-7">
          Need assistance? You're in the right place. Browse the most frequently
          asked questions or reach out for support. We are here to help you with
          anything related to orders, products, delivery, or account issues.
        </p>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all border">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              🔧 Product & Warranty
            </h2>
            <p className="text-gray-600 text-sm leading-6 mb-4">
              Information about product quality, returns, warranty periods, and
              replacements.
            </p>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• How to check product compatibility?</li>
              <li>• Warranty claim procedure</li>
              <li>• Faulty or damaged item guidelines</li>
              <li>• Replacement time & rules</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all border">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              🚚 Orders & Delivery
            </h2>
            <p className="text-gray-600 text-sm leading-6 mb-4">
              Details regarding order processing, delivery times, and tracking
              updates.
            </p>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• Order tracking status</li>
              <li>• Late or missing delivery</li>
              <li>• Changing delivery address</li>
              <li>• Courier delay reasons</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all border">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              💳 Payment & Refunds
            </h2>
            <p className="text-gray-600 text-sm leading-6 mb-4">
              Everything related to digital payments, COD, refund timelines, and
              failed orders.
            </p>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• Payment failed but money deducted</li>
              <li>• How refunds work</li>
              <li>• Refund duration</li>
              <li>• COD order issues</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all border">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              👤 Account & Security
            </h2>
            <p className="text-gray-600 text-sm leading-6 mb-4">
              Manage your account details, password recovery, and security
              settings.
            </p>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>• Resetting your password</li>
              <li>• Changing profile info</li>
              <li>• Account verification</li>
              <li>• Securing your account</li>
            </ul>
          </div>
        </div>

        {/* Contact Box */}
        <div className="bg-gray-900 text-white rounded-xl p-10 mt-16 text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">Still need help?</h3>
          <p className="text-gray-300 mb-6">
            Our support team is available 24/7 to assist you.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpCenter;
