import React from "react";
import Logo from "./../assets/WheelDealLogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Intro */}
        <div>
          <div className="brand flex items-center">
            <img src={Logo} alt="" className="w-12" />
            <h2 className="text-2xl font-bold">WheelDeal</h2>
          </div>
          <p className="text-sm leading-6">
            We provide high-quality auto parts with trust, durability, and
            premium performance. Your satisfaction is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/body-exterior" className="hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/help" className="hover:text-white">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/warranty" className="hover:text-white">
                Warranty
              </Link>
            </li>
            <li>
              <Link to="/refund" className="hover:text-white">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>📍 Karachi, Pakistan</li>
            <li>📞 +92 300 0000000</li>
            <li>📧 wheeldeal.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center border-t border-gray-700 mt-10 pt-5 text-sm text-gray-400">
        © {new Date().getFullYear()} WheelDeal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
