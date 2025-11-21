import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import bodycladding from "../../../public/Pics/body exterior img/Body Cladding.webp";
import BumperReinforcement from "../../../public/Pics/body exterior img/Bumper Reinforcement Bar.webp";
import DoorMoulding from "../../../public/Pics/body exterior img/Door Moulding.webp";
import DoorShell from "../../../public/Pics/body exterior img/Door Shell.webp";
import DoorSeal from "../../../public/Pics/body exterior img/Door Weatherstrip Seal.webp";
import FogLightCover from "../../../public/Pics/body exterior img/Fog Light Cover.webp";
import FrontBumper from "../../../public/Pics/body exterior img/Front Bumper.webp";
import FrontWindShield from "../../../public/Pics/body exterior img/Front WindShield.webp";
import MudFlaps from "../../../public/Pics/body exterior img/Mud Flaps.webp";
import QuarterPanel from "../../../public/Pics/body exterior img/Quarter Panel.webp";
import RearBumper from "../../../public/Pics/body exterior img/Rear Bumper.webp";
import RearWindshield from "../../../public/Pics/body exterior img/Rear Windshield.webp";
import RockerPanel from "../../../public/Pics/body exterior img/Rocker Panel.webp";
import RoofPanel from "../../../public/Pics/body exterior img/Roof Panel.webp";
import SideSkirts from "../../../public/Pics/body exterior img/Side Skirts.webp";
import SideWindowGlass from "../../../public/Pics/body exterior img/Side Window Glass.webp";

import Footer from "../../Components/Footer";

// Product list
const products = [
  { id: "p001", name: "Body Cladding", image: bodycladding, description: "...", price: "17,000" },
  { id: "p002", name: "Bumper Reinforcement Bar", image: BumperReinforcement, description: "...", price: "3,000" },
  { id: "p003", name: "Door Moulding", image: DoorMoulding, description: "...", price: "17,000" },
  { id: "p004", name: "Door Shell", image: DoorShell, description: "...", price: "15,000" },
  { id: "p005", name: "Door Weatherstrip Seal", image: DoorSeal, description: "...", price: "2,800" },
  { id: "p006", name: "Fog Light Cover", image: FogLightCover, description: "...", price: "7,500" },
  { id: "p007", name: "Front Bumper", image: FrontBumper, description: "...", price: "15,000" },
  { id: "p008", name: "Front Windshield", image: FrontWindShield, description: "...", price: "13,500" },
  { id: "p009", name: "Mud Flaps", image: MudFlaps, description: "...", price: "6,000" },
  { id: "p010", name: "Quarter Panel", image: QuarterPanel, description: "...", price: "15,000" },
  { id: "p011", name: "Rear Bumper", image: RearBumper, description: "...", price: "8,600" },
  { id: "p012", name: "Rear Windshield", image: RearWindshield, description: "...", price: "14,000" },
  { id: "p013", name: "Rocker Panel", image: RockerPanel, description: "...", price: "20,000" },
  { id: "p014", name: "Roof Panel", image: RoofPanel, description: "...", price: "25,000" },
  { id: "p015", name: "Side Skirts", image: SideSkirts, description: "...", price: "25,000" },
  { id: "p016", name: "Side Window Glass", image: SideWindowGlass, description: "...", price: "5,000" },
];

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

// Modal background
const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

// Modal animation
const modalVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function BodyExterior() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="body-exterior-page"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar />

        <h1 className="text-center text-4xl pt-4 bg-gray-200 font-bold text-gray-700">
          Body Exterior Items
        </h1>

        <motion.div
          className={`p-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ${
            selectedProduct ? "blur-sm" : ""
          }`}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
              variants={cardVariants}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="w-full h-60 overflow-hidden rounded-t-xl">
                <img
                  src={product.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-red-500 transition">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-3 flex justify-between items-center">
                  <span className="text-red-500 font-bold text-lg">
                    Rs {product.price}
                  </span>

                  <button
                    className="px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProduct && (
            <>
              <motion.div
                onClick={() => setSelectedProduct(null)}
                className="fixed inset-0 bg-black/50 z-40"
                variants={modalBackdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />

              <motion.div
                className="fixed inset-0 flex items-center justify-center z-50 p-4"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-3 right-3 text-gray-700 hover:text-red-500 text-3xl"
                  >
                    &times;
                  </button>

                  <img
                    src={selectedProduct.image}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />

                  <h2 className="text-2xl font-bold mb-2">
                    {selectedProduct.name}
                  </h2>

                  <p className="text-gray-700 mb-4">{selectedProduct.description}</p>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-red-600 font-bold text-xl">
                      Rs {selectedProduct.price}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      navigate("/order", { state: { product: selectedProduct } })
                    }
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg"
                  >
                    Order Now
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default BodyExterior;