import React from "react";
import Navbar from "../Components/Navbar";
import HeroImg from "../assets/Hero.jpg";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import DashboardCover from "/Pics/interior images/Dashboard Cover.webp";
import BrakeDrum from "/Pics/breaksystem img/Brake Drum.jpeg";
import HarmonicBalancer from "/Pics/EngineRelated/Harmonic Balancer.jpeg";
import Footer from "../Components/Footer";

const hotSellingProducts = [
  {
    id: "p048",
    name: "Dashboard Cover",
    img: DashboardCover,
    desc: "Heat-resistant dashboard cover.",
    price: "1,800 PKR",
  },
  {
    id: "p096",
    name: "Brake Drum",
    img: BrakeDrum,
    desc: "Rotating drum where brake shoes press to stop vehicle.",
    price: "6,000 PKR",
  },
  {
    id: "p030",
    name: "Harmonic Balancer",
    img: HarmonicBalancer,
    desc: "SFI-certified steel harmonic balancer absorbs engine vibrations for reliability.",
    price: "62,000 PKR",
  },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative flex items-center justify-center h-screen max-h-[700px] px-6 bg-[#0D1B2A]"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 bg-[#0D1B2A]/90"></div>

        <div className="relative max-w-5xl text-center text-white px-4">
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Quality Auto Parts. Delivered Fast.
          </h1>
          <p
            className="max-w-3xl mx-auto text-lg md:text-xl mb-8"
            style={{ color: "#C7C7C7", fontFamily: "'Inter', sans-serif" }}
          >
            Explore premium car components engineered for performance, safety,
            and durability.
          </p>
          <Link to="/body-exterior">
            <button
              className="bg-[#0A84FF] hover:bg-[#0066CC] transition duration-300 rounded-lg px-8 py-3 font-semibold shadow-lg cursor-pointer"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Shop Now
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Hot Selling Products Section */}
      <motion.section
        className="bg-[#F5F7FA] py-16 px-6"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-extrabold text-center mb-12"
            style={{
              color: "#0D1B2A",
              fontFamily: "'Poppins', sans-serif",
              textShadow: "0 0 10px rgba(10, 132, 255, 0.4)",
            }}
          >
            Hot Selling Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {hotSellingProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-xl shadow-md border border-[#E1E5EA] overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-52 overflow-hidden rounded-t-xl">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3
                    className="text-2xl font-semibold text-[#0D1B2A] mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-gray-600 text-sm mb-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {product.desc}
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      className="text-[#0A84FF] font-bold text-lg"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Rs {product.price}
                    </span>
                    <button
                      className="bg-[#0A84FF] text-white px-5 py-2 rounded-lg cursor-pointer font-semibold shadow hover:bg-[#0066CC] transition duration-300"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default Home;
