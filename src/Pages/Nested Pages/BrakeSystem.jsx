import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

import ABSControlModule from "/Pics/breaksystem img/ABS Control Module.jpeg";
import ABSWheelSpeedSensor from "/Pics/breaksystem img/ABS Sensor (Wheel Speed Sensor).jpeg";
import BrakeAnchorPlate from "/Pics/breaksystem img/Brake Anchor Plate.jpeg";
import BrakeBleederScrew from "/Pics/breaksystem img/Brake Bleeder Screw.jpeg";
import BrakeBooster from "/Pics/breaksystem img/Brake Booster (Servo).jpeg";
import BrakeCaliper from "/Pics/breaksystem img/Brake Caliper.jpeg";
import BrakeDrum from "/Pics/breaksystem img/Brake Drum.jpeg";
import BrakeEqualizer from "/Pics/breaksystem img/Brake Equalizer.jpeg";
import BrakeFluid from "/Pics/breaksystem img/Brake Fluid (DOT 3, DOT 4, DOT 5.1).jpeg";
import BrakeReservoir from "/Pics/breaksystem img/Brake Fluid Reservoir.jpeg";
import BrakeHose from "/Pics/breaksystem img/Brake Hose (Flexible Pipe).jpeg";
import BrakeLine from "/Pics/breaksystem img/Brake Line (Steel Pipe).jpeg";
import BrakeMasterCylinder from "/Pics/breaksystem img/Brake Master Cylinder.jpeg";
import BrakePadWear from "/Pics/breaksystem img/Brake Pad Wear Sensor.jpeg";
import BrakePads from "/Pics/breaksystem img/Brake Pads.jpeg";
import BrakePedalAssembly from "/Pics/breaksystem img/Brake Pedal Assembly.jpeg";

import Footer from "../../Components/Footer";

const breakSystemProducts = [
  {
    id: "p090",
    name: "ABS Control Module",
    img: ABSControlModule,
    desc: "The ABS Control Module is an advanced electronic unit responsible for preventing wheel lock-up during braking. It constantly receives data from wheel speed sensors and adjusts brake pressure automatically, ensuring maximum stability and control on slippery or uneven road surfaces.",
    price: "15000",
  },
  {
    id: "p091",
    name: "ABS Sensor (Wheel Speed Sensor)",
    img: ABSWheelSpeedSensor,
    desc: "The Wheel Speed Sensor monitors the rotational speed of each wheel and sends real-time data to the ABS system. It helps prevent skidding, improves traction, and allows the ABS and stability control systems to operate accurately and safely.",
    price: "3500",
  },
  {
    id: "p092",
    name: "Brake Anchor Plate",
    img: BrakeAnchorPlate,
    desc: "The Brake Anchor Plate is an essential part of the drum brake assembly, designed to hold brake shoes firmly in place. It maintains proper alignment, distributes braking force evenly, and ensures smooth and reliable braking performance.",
    price: "2500",
  },
  {
    id: "p093",
    name: "Brake Bleeder Screw",
    img: BrakeBleederScrew,
    desc: "The Brake Bleeder Screw allows trapped air to be released from the brake lines. Removing air bubbles is crucial for maintaining hydraulic pressure, improving brake response, and ensuring consistent braking power.",
    price: "400",
  },
  {
    id: "p094",
    name: "Brake Booster (Servo)",
    img: BrakeBooster,
    desc: "The Brake Booster uses vacuum pressure to multiply the force applied on the brake pedal. It reduces the effort required by the driver and enhances braking efficiency, making stopping smoother, quicker, and safer.",
    price: "8000",
  },
  {
    id: "p095",
    name: "Brake Caliper",
    img: BrakeCaliper,
    desc: "The Brake Caliper plays a key role in the disc braking system by pressing the brake pads against the rotor. It converts hydraulic pressure into mechanical force to slow down or stop the vehicle effectively and reliably.",
    price: "7000",
  },
  {
    id: "p096",
    name: "Brake Drum",
    img: BrakeDrum,
    desc: "The Brake Drum is used in rear drum brake systems, where brake shoes expand outward to create friction. Its strong and durable build ensures stable braking performance and long service life.",
    price: "6000",
  },
  {
    id: "p097",
    name: "Brake Equalizer",
    img: BrakeEqualizer,
    desc: "The Brake Equalizer helps distribute brake pressure evenly between the rear wheels. It enhances braking stability, reduces skidding, and ensures the vehicle stops smoothly and in a straight line.",
    price: "3500",
  },
  {
    id: "p098",
    name: "Brake Fluid (DOT 3, DOT 4, DOT 5.1)",
    img: BrakeFluid,
    desc: "Brake Fluid is a high-performance hydraulic fluid used to transfer pressure within the braking system. DOT 3, DOT 4, and DOT 5.1 are designed to withstand high temperatures and provide consistent braking under all driving conditions.",
    price: "1200",
  },
  {
    id: "p099",
    name: "Brake Fluid Reservoir",
    img: BrakeReservoir,
    desc: "The Brake Fluid Reservoir stores hydraulic brake fluid and ensures a steady supply to the braking system. It maintains proper fluid levels, prevents contamination, and supports reliable brake performance.",
    price: "1800",
  },
  {
    id: "p100",
    name: "Brake Hose (Flexible Pipe)",
    img: BrakeHose,
    desc: "The Brake Hose is a flexible high-pressure pipe that transports brake fluid from the master cylinder to the brake calipers or wheel cylinders. Its reinforced build ensures durability and consistent brake response.",
    price: "2500",
  },
  {
    id: "p101",
    name: "Brake Line (Steel Pipe)",
    img: BrakeLine,
    desc: "The Steel Brake Line carries hydraulic brake fluid at high pressure throughout the system. It is corrosion-resistant, highly durable, and essential for maintaining strong and consistent braking performance.",
    price: "3000",
  },
  {
    id: "p102",
    name: "Brake Master Cylinder",
    img: BrakeMasterCylinder,
    desc: "The Brake Master Cylinder converts brake pedal pressure into hydraulic pressure. It pushes brake fluid into the brake lines and distributes the force to all wheels, ensuring smooth and responsive braking.",
    price: "5000",
  },
  {
    id: "p103",
    name: "Brake Pad Wear Sensor",
    img: BrakePadWear,
    desc: "The Brake Pad Wear Sensor alerts the driver when the brake pads become thin or worn out. It helps maintain safety by ensuring the braking system remains effective and responsive.",
    price: "900",
  },
  {
    id: "p104",
    name: "Brake Pads",
    img: BrakePads,
    desc: "Friction material pressed against rotors to stop vehicle.",
    price: "3500",
  },
  {
    id: "p105",
    name: "Brake Pedal Assembly",
    img: BrakePedalAssembly,
    desc: "Mechanical assembly for brake pedal operation.",
    price: "4200",
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const BrakeSystem = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <h1 className="text-center text-4xl pt-4 bg-gray-200 font-bold text-gray-700">
        Brake System Items
      </h1>

      <motion.div
        className={`p-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ${
          selected ? "blur-sm" : ""
        }`}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {breakSystemProducts.map((product) => (
          <motion.div
            key={product.id}
            className="group bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
            variants={cardVariants}
            onClick={() => setSelected(product)}
          >
            <div className="w-full h-60 overflow-hidden rounded-t-xl">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition">
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
                  className="px-3 py-1.5 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition text-sm cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(product);
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
        {selected && (
          <>
            <motion.div
              onClick={() => setSelected(null)}
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
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
                <button
                  className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-3xl"
                  onClick={() => setSelected(null)}
                >
                  &times;
                </button>

                <img
                  src={selected.img}
                  alt={selected.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />

                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {selected.name}
                </h2>

                <p className="text-gray-700 mb-4">{selected.desc}</p>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-red-600 font-bold text-xl">
                    Rs {selected.price}
                  </span>
                </div>

                <button
                  onClick={() =>
                    navigate("/order", { state: { product: selected } })
                  }
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md"
                >
                  Order Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default BrakeSystem;
