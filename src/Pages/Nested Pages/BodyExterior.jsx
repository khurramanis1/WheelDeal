import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import bodycladding from "/Pics/body-exterior-img/Body Cladding.webp";
import BumperReinforcement from "/Pics/body-exterior-img/Bumper Reinforcement Bar.webp";
import DoorMoulding from "/Pics/body-exterior-img/Door Moulding.webp";
import DoorShell from "/Pics/body-exterior-img/Door Shell.webp";
import DoorSeal from "/Pics/body-exterior-img/Door Weatherstrip Seal.webp";
import FogLightCover from "/Pics/body-exterior-img/Fog Light Cover.webp";
import FrontBumper from "/Pics/body-exterior-img/Front Bumper.webp";
import FrontWindShield from "/Pics/body-exterior-img/Front Windshield.webp";
import MudFlaps from "/Pics/body-exterior-img/Mud Flaps.webp";
import QuarterPanel from "/Pics/body-exterior-img/Quarter Panel.webp";
import RearBumper from "/Pics/body-exterior-img/Rear Bumper.webp";
import RearWindshield from "/Pics/body-exterior-img/Rear Windshield.webp";
import RockerPanel from "/Pics/body-exterior-img/Rocker Panel.webp";
import RoofPanel from "/Pics/body-exterior-img/Roof Panel.webp";
import SideSkirts from "/Pics/body-exterior-img/Side Skirts.webp";
import SideWindowGlass from "/Pics/body-exterior-img/Side Window Glass.webp";

import Footer from "../../Components/Footer";

// Product list with detailed descriptions
const products = [
  {
    id: "p001",
    name: "Body Cladding",
    image: bodycladding,
    description:
      "A durable protective layer attached to the exterior panels of your vehicle. It shields the body from minor dents, scratches, and weather-related damage, enhancing both the aesthetics and longevity of your car’s surface. Made from high-quality materials, it adds a rugged, stylish look while preventing rust and corrosion.",
    price: "17,000",
  },
  {
    id: "p002",
    name: "Bumper Reinforcement Bar",
    image: BumperReinforcement,
    description:
      "This robust metal bar is installed behind the front or rear bumper to absorb and distribute impact energy during collisions. It plays a crucial role in protecting the vehicle’s frame and occupants by minimizing damage in minor to moderate accidents, ensuring safety and structural integrity.",
    price: "3,000",
  },
  {
    id: "p003",
    name: "Door Moulding",
    image: DoorMoulding,
    description:
      "A sleek trim piece that runs along the edges or sides of car doors. It protects doors from scratches, dings, and minor impacts, especially in parking lots. Besides functionality, it enhances the vehicle’s profile with a clean and polished appearance.",
    price: "17,000",
  },
  {
    id: "p004",
    name: "Door Shell",
    image: DoorShell,
    description:
      "The main structural component of the car door, providing the foundation for hinges, windows, locks, and internal panels. Crafted with precision, it offers strength and durability, ensuring passenger safety and contributing to the overall vehicle integrity.",
    price: "15,000",
  },
  {
    id: "p005",
    name: "Door Weatherstrip Seal",
    image: DoorSeal,
    description:
      "A flexible rubber or synthetic seal fitted around the door frame to prevent water, dust, and wind noise from entering the cabin. It maintains climate control efficiency inside the car and improves ride comfort by reducing external noise.",
    price: "2,800",
  },
  {
    id: "p006",
    name: "Fog Light Cover",
    image: FogLightCover,
    description:
      "A protective casing designed to shield fog lights from debris, moisture, and damage. It helps maintain optimal light output and clarity, improving visibility during adverse weather conditions such as fog, rain, or snow.",
    price: "7,500",
  },
  {
    id: "p007",
    name: "Front Bumper",
    image: FrontBumper,
    description:
      "The front bumper acts as the first line of defense against collisions. Made of impact-resistant materials, it absorbs shocks and protects vital components like the radiator and engine. It also adds to the vehicle’s aesthetic appeal with a stylish front fascia.",
    price: "15,000",
  },
  {
    id: "p008",
    name: "Front Windshield",
    image: FrontWindShield,
    description:
      "A critical safety component made from laminated safety glass, providing a clear view of the road while protecting passengers from wind, debris, and harsh weather. It also contributes to the car’s structural strength and supports airbag deployment in accidents.",
    price: "13,500",
  },
  {
    id: "p009",
    name: "Mud Flaps",
    image: MudFlaps,
    description:
      "Installed behind wheels, mud flaps prevent mud, water, and stones from being thrown up onto the vehicle body or other vehicles. They help keep the car cleaner, protect paintwork, and reduce the risk of damage from road debris.",
    price: "6,000",
  },
  {
    id: "p010",
    name: "Quarter Panel",
    image: QuarterPanel,
    description:
      "The rear side panel of the car extending from the door to the trunk area. It provides structural support and protects internal components. Quarter panels are also vital for the vehicle’s aerodynamic profile and visual appeal.",
    price: "15,000",
  },
  {
    id: "p011",
    name: "Rear Bumper",
    image: RearBumper,
    description:
      "Similar to the front bumper, the rear bumper absorbs impacts from behind, safeguarding the rear chassis and passenger safety. It is designed to minimize repair costs and enhance the car’s rear-end appearance.",
    price: "8,600",
  },
  {
    id: "p012",
    name: "Rear Windshield",
    image: RearWindshield,
    description:
      "Made from tempered glass, the rear windshield provides rear visibility and protects occupants from external elements. It also adds structural integrity to the vehicle and often includes defrosting elements for clear vision in cold weather.",
    price: "14,000",
  },
  {
    id: "p013",
    name: "Rocker Panel",
    image: RockerPanel,
    description:
      "The section beneath the doors connecting the front and rear wheel wells. It supports the vehicle’s weight and protects the undercarriage from road damage and debris, contributing to overall body rigidity and stability.",
    price: "20,000",
  },
  {
    id: "p014",
    name: "Roof Panel",
    image: RoofPanel,
    description:
      "The top exterior part of the vehicle, providing protection from weather and contributing to structural strength. A well-maintained roof panel ensures safety in rollover accidents and adds to the aesthetic flow of the vehicle’s design.",
    price: "25,000",
  },
  {
    id: "p015",
    name: "Side Skirts",
    image: SideSkirts,
    description:
      "Aerodynamic panels attached to the sides beneath the doors that improve airflow and reduce drag. They also offer protection against road debris and enhance the sporty look of the vehicle.",
    price: "25,000",
  },
  {
    id: "p016",
    name: "Side Window Glass",
    image: SideWindowGlass,
    description:
      "Tempered or laminated glass installed on the car’s side doors or panels. Provides visibility and protection from external elements while contributing to passenger safety with shatter-resistant properties.",
    price: "5,000",
  },
];

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Modal background
const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

// Modal animation
const modalVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
                  alt={product.name}
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
                    alt={selectedProduct.name}
                  />

                  <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>

                  <p className="text-gray-700 mb-4">{selectedProduct.description}</p>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-red-600 font-bold text-xl">
                      Rs {selectedProduct.price}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      navigate("/order", {
                        state: { product: selectedProduct },
                      })
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