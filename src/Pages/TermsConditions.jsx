import React from "react";
import Navbar from "./../Components/Navbar";
import Footer from "../Components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">

          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Terms & Conditions
          </h1>

          <p className="text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            By accessing or using our services, you agree to the following terms
            and conditions. Please read these guidelines carefully to understand
            your rights and responsibilities.
          </p>

          {/* Use of Website */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              1. Use of Our Website
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You agree to use our website for lawful purposes only. Any attempt
              to harm, modify, or disrupt the website, its servers, or its
              features is strictly prohibited.
            </p>
          </div>

          {/* Product Information */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              2. Product Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We strive to provide accurate product descriptions, images, and
              pricing. However, minor variations may occur due to manufacturer
              updates or technical limitations. We reserve the right to update
              product details at any time without prior notice.
            </p>
          </div>

          {/* Orders */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              3. Orders & Payments
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Once an order is placed, you will receive confirmation via email
              or SMS. We reserve the right to cancel or reject any order due to
              payment issues, stock unavailability, or suspected fraudulent
              activity.
            </p>
          </div>

          {/* Pricing */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              4. Pricing & Availability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All prices listed on our website are subject to change without
              notice. Product availability may vary, and certain items may be
              discontinued based on stock or supplier changes.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              5. Intellectual Property Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content on this website—including logos, text, images, and
              design elements—is our property or licensed to us. Unauthorized
              use, reproduction, or distribution is strictly prohibited.
            </p>
          </div>

          {/* User Accounts */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              6. User Accounts & Responsibilities
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You are responsible for maintaining the confidentiality of your
              account details. Any activity conducted through your account will
              be assumed to be authorized by you.
            </p>
          </div>

          {/* Returns & Refunds */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              7. Returns, Refunds & Warranty
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our return and refund policies are clearly mentioned on the
              dedicated pages. By placing an order, you acknowledge that you
              have read and accepted those policies.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are not responsible for any indirect, incidental, or
              consequential damages resulting from the use of our website or
              products. Users are advised to ensure proper installation and
              handling of auto parts.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              9. Updates to Terms & Conditions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to modify these terms at any time. Updated
              terms will be posted on this page, and continued use of the
              website implies acceptance of the latest version.
            </p>
          </div>

          {/* Contact Support */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Need Assistance?
            </h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about these terms, feel free to reach
              out to our support team.
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 transition text-white font-semibold px-6 py-3 rounded-lg shadow"
            >
              Contact Us
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;