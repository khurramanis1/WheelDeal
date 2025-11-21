import React, { useState } from "react";
import Navbar from "../../Components/Navbar";

// Pics
import Amplifier from "/Pics/interior images/Amplifier.webp";
import ArmrestConsoleCover from "/Pics/interior images/Armrest Console Cover.webp";
import BlindSpotMirror from "/Pics/interior images/Blind Spot Mirror (Interior Mount).webp";
import CarPerfume from "/Pics/interior images/Car Perfume.webp";
import CarPhoneCharger from "/Pics/interior images/Car Phone Charger (USB).webp";
import CarVacuumCleaner from "/Pics/interior images/Car Vacuum Cleaner (Portable).webp";
import CupHolderInsert from "/Pics/interior images/Cup Holder Insert.webp";
import DashboardCover from "/Pics/interior images/Dashboard Cover.webp";
import DashboardOrganizer from "/Pics/interior images/Dashboard Organizer.webp";
import FloorMats from "/Pics/interior images/Floor Mats.webp";
import GearShiftKnobCover from "/Pics/interior images/Gear Shift Knob Cover.webp";
import HandbrakeCover from "/Pics/interior images/Handbrake Cover.webp";
import InteriorLEDLights from "/Pics/interior images/Interior LED Lights.webp";
import InteriorMirror from "/Pics/interior images/Interior Mirror (Rear View).webp";
import InteriorTrim from "/Pics/interior images/Interior Trim Kit (Decorative).webp";
import KeyHolderHook from "/Pics/interior images/Key Holder Hook.webp";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "p041",
    name: "Amplifier",
    img: Amplifier,
    desc: "High-quality sound amplifier that enhances the audio experience by increasing the power of audio signals to drive speakers, providing clear and powerful sound inside your vehicle.",
    price: "3500 PKR",
  },
  {
    id: "p042",
    name: "Armrest Console Cover",
    img: ArmrestConsoleCover,
    desc: "Soft and durable console cover designed to protect the armrest area of your vehicle’s interior, offering added comfort and preventing wear and tear over time.",
    price: "850 PKR",
  },
  {
    id: "p043",
    name: "Blind Spot Mirror",
    img: BlindSpotMirror,
    desc: "Mini mirror designed to be mounted on the interior side mirror, improving visibility by eliminating blind spots, thereby increasing safety while driving and changing lanes.",
    price: "300 PKR",
  },
  {
    id: "p044",
    name: "Car Perfume",
    img: CarPerfume,
    desc: "Long-lasting fragrance specially formulated to keep your vehicle smelling fresh and pleasant, creating a comfortable and inviting atmosphere inside the car.",
    price: "250 PKR",
  },
  {
    id: "p045",
    name: "Car Phone Charger",
    img: CarPhoneCharger,
    desc: "Fast charging USB adapter for your car that allows you to quickly charge your mobile devices on the go, ensuring your gadgets stay powered during trips.",
    price: "650 PKR",
  },
  {
    id: "p046",
    name: "Car Vacuum Cleaner",
    img: CarVacuumCleaner,
    desc: "Portable mini vacuum cleaner designed for quick and easy cleaning of your car's interior, efficiently removing dust, dirt, and debris from seats, carpets, and crevices.",
    price: "1500 PKR",
  },
  {
    id: "p047",
    name: "Cup Holder Insert",
    img: CupHolderInsert,
    desc: "Universal cup holder insert that fits into most vehicle cup holders, providing stability for cups and bottles to prevent spills while driving.",
    price: "300 PKR",
  },
  {
    id: "p048",
    name: "Dashboard Cover",
    img: DashboardCover,
    desc: "Heat-resistant dashboard cover that protects your dashboard from sun damage and cracking, while reducing glare and enhancing the interior look of your car.",
    price: "1800 PKR",
  },
  {
    id: "p049",
    name: "Dashboard Organizer",
    img: DashboardOrganizer,
    desc: "Multi-slot organizer for your dashboard to keep small items like keys, coins, and phones neatly arranged and easily accessible while driving.",
    price: "750 PKR",
  },
  {
    id: "p050",
    name: "Floor Mats",
    img: FloorMats,
    desc: "Premium non-slip floor mats that protect your vehicle's flooring from dirt, moisture, and wear, providing durability and easy maintenance.",
    price: "2200 PKR",
  },
  {
    id: "p051",
    name: "Gear Shift Knob Cover",
    img: GearShiftKnobCover,
    desc: "Comfortable grip knob cover that enhances the feel and appearance of your gear shift lever, providing a secure hold and protecting the original surface.",
    price: "350 PKR",
  },
  {
    id: "p052",
    name: "Handbrake Cover",
    img: HandbrakeCover,
    desc: "Soft leather grip cover for the handbrake lever, improving comfort and style while protecting the handbrake from wear and tear.",
    price: "300 PKR",
  },
  {
    id: "p053",
    name: "Interior LED Lights",
    img: InteriorLEDLights,
    desc: "Bright LED interior lights designed to improve visibility inside your vehicle, adding style and convenience during night drives or low-light conditions.",
    price: "1200 PKR",
  },
  {
    id: "p054",
    name: "Interior Mirror",
    img: InteriorMirror,
    desc: "Wide-angle rearview mirror providing a broader field of view to enhance driver awareness and improve safety when monitoring traffic behind the vehicle.",
    price: "600 PKR",
  },
  {
    id: "p055",
    name: "Interior Trim Kit",
    img: InteriorTrim,
    desc: "Decorative trim kit that enhances the aesthetics of your car’s interior by adding stylish accents and finishing touches to various interior components.",
    price: "1000 PKR",
  },
  {
    id: "p056",
    name: "Key Holder Hook",
    img: KeyHolderHook,
    desc: "Easy-mount hook designed to securely hold keys inside the vehicle, helping to keep the interior organized and preventing keys from being misplaced.",
    price: "150 PKR",
  },
];

const Interior = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl pt-4 bg-gray-200 font-bold text-gray-700">
        Body Interior Items
      </h1>
      {/* Modal */}
      {selectedProduct && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-sm z-40"
            onClick={() => setSelectedProduct(null)}
          ></div>

          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
                aria-label="Close"
              >
                &times;
              </button>

              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">
                {selectedProduct.name}
              </h2>
              <p className="text-gray-700 mb-4">{selectedProduct.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-red-600 font-bold text-xl">
                  Rs {selectedProduct.price}
                </span>
              </div>
              <button
                onClick={() =>
                  navigate("/order", { state: { product: selectedProduct } })
                }
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md cursor-pointer"
              >
                Order Now
              </button>
            </div>
          </div>
        </>
      )}

      {/* Products Grid */}
      <div className="p-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 bg-gray-200 min-h-screen">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-red-300 transition duration-300 cursor-pointer"
          >
            <div className="w-full h-60 overflow-hidden rounded-t-xl">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-red-500 transition">
                {product.name}
              </h2>

              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {product.desc}
              </p>

              <div className="mt-3 flex justify-between items-center">
                <span className="text-red-600 font-bold text-lg">
                  Rs {product.price}
                </span>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-3 py-1.5 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition text-sm cursor-pointer"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Interior;
