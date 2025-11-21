import Navbar from "../../Components/Navbar";
import React, { useState } from "react";

// Pics

import Carburetor from "/Pics/fuel system img/Carburetor.webp";
import EVAPPurgeValve from "/Pics/fuel system img/EVAP Purge Valve.webp";
import FuelDelivery from "/Pics/fuel system img/Fuel Delivery Module.webp";
import FuelDistributor from "/Pics/fuel system img/Fuel Distributor (for older systems).webp";
import FuelFilter from "/Pics/fuel system img/Fuel Filter.webp";
import FuelGaugeSendingUnit from "/Pics/fuel system img/Fuel Gauge Sending Unit.webp";
import FuelHose from "/Pics/fuel system img/Fuel Hose (Rubber Pipe).webp";
import FuelInjectorSeal from "/Pics/fuel system img/Fuel Injector Seal Kit.webp";
import FuelInjector from "/Pics/fuel system img/Fuel Injector.webp";
import FuelLine from "/Pics/fuel system img/Fuel Line (Steel Pipe).webp";
import FuelPressureRegulator from "/Pics/fuel system img/Fuel Pressure Regulator.webp";
import FuelPressureSensor from "/Pics/fuel system img/Fuel Pressure Sensor.webp";
import FuelPumpElectric from "/Pics/fuel system img/Fuel Pump (Electric).webp";
import FuelPumpMechanical from "/Pics/fuel system img/Fuel Pump (Mechanical).webp";
import FuelPumpControlModule from "/Pics/fuel system img/Fuel Pump Control Module.webp";
import FuelPumpRelay from "/Pics/fuel system img/Fuel Pump Relay.webp";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "p031",
    name: "Carburetor",
    img: Carburetor,
    desc: "Mixes air and fuel for internal combustion engines. It is a crucial component that ensures the right air-fuel ratio to optimize engine performance and efficiency over a wide range of operating conditions.",
    price: "9,500",
  },
  {
    id: "p032",
    name: "EVAP Purge Valve",
    img: EVAPPurgeValve,
    desc: "Controls fuel vapor flow from the charcoal canister to the engine. This valve helps reduce harmful emissions by preventing fuel vapors from escaping into the atmosphere and ensuring they are burned in the engine.",
    price: "4,000",
  },
  {
    id: "p033",
    name: "Fuel Delivery Module",
    img: FuelDelivery,
    desc: "Delivers fuel from the tank to the engine efficiently. It includes the fuel pump, filter, and pressure regulator to maintain a steady and reliable fuel supply required for optimal engine function.",
    price: "18,000",
  },
  {
    id: "p034",
    name: "Fuel Distributor",
    img: FuelDistributor,
    desc: "Distributes fuel evenly in older fuel injection systems. It ensures that each cylinder receives the correct amount of fuel to maintain engine balance and smooth operation.",
    price: "6,200",
  },
  {
    id: "p035",
    name: "Fuel Filter",
    img: FuelFilter,
    desc: "Removes impurities from fuel to protect the engine. This filter prevents contaminants such as dirt and rust from entering the fuel system, thereby extending engine life and maintaining performance.",
    price: "1,800",
  },
  {
    id: "p036",
    name: "Fuel Gauge Sending Unit",
    img: FuelGaugeSendingUnit,
    desc: "Measures fuel level and sends data to the gauge. This unit accurately tracks the amount of fuel in the tank, allowing the driver to monitor fuel consumption and avoid running out.",
    price: "3,500",
  },
  {
    id: "p037",
    name: "Fuel Hose",
    img: FuelHose,
    desc: "Flexible rubber pipe for fuel transport. Designed to withstand pressure and prevent leaks, it safely carries fuel from the tank to various engine components.",
    price: "1,200",
  },
  {
    id: "p038",
    name: "Fuel Injector Seal Kit",
    img: FuelInjectorSeal,
    desc: "Seals fuel injectors to prevent leaks. This kit ensures a tight fit around injectors, avoiding fuel leaks that could reduce efficiency or cause engine damage.",
    price: "1,000",
  },
  {
    id: "p039",
    name: "Fuel Injector",
    img: FuelInjector,
    desc: "Sprays fuel into the engine's combustion chamber. It atomizes the fuel for efficient combustion, improving power output and reducing emissions.",
    price: "7,500",
  },
  {
    id: "p040",
    name: "Fuel Line",
    img: FuelLine,
    desc: "Steel pipe for safe fuel delivery. Its rigid construction prevents damage and leaks, ensuring a reliable fuel supply to the engine.",
    price: "2,200",
  },
  {
    id: "p041",
    name: "Fuel Pressure Regulator",
    img: FuelPressureRegulator,
    desc: "Maintains consistent fuel pressure in the system. This regulator prevents fluctuations that could negatively impact engine performance and fuel economy.",
    price: "4,800",
  },
  {
    id: "p042",
    name: "Fuel Pressure Sensor",
    img: FuelPressureSensor,
    desc: "Monitors fuel pressure and sends data to ECU. It helps the engine control unit adjust fuel delivery for optimal combustion and efficiency.",
    price: "5,200",
  },
  {
    id: "p043",
    name: "Fuel Pump Electric",
    img: FuelPumpElectric,
    desc: "Electric pump that delivers fuel under pressure. It provides a consistent fuel flow for modern engines, supporting high performance and reliability.",
    price: "11,000",
  },
  {
    id: "p044",
    name: "Fuel Pump Mechanical",
    img: FuelPumpMechanical,
    desc: "Engine-driven mechanical fuel pump. It operates in sync with the engine to supply fuel, commonly found in older vehicles and simple fuel systems.",
    price: "8,000",
  },
  {
    id: "p045",
    name: "Fuel Pump Control Module",
    img: FuelPumpControlModule,
    desc: "Controls the electric fuel pump operation. This module regulates pump speed and activation to optimize fuel delivery and reduce energy consumption.",
    price: "6,700",
  },
  {
    id: "p046",
    name: "Fuel Pump Relay",
    img: FuelPumpRelay,
    desc: "Switches power supply to the fuel pump. It ensures reliable electrical control of the fuel pump, protecting the system from power surges and failures.",
    price: "1,600",
  },
];

function FuelSystem() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const navigate = useNavigate();


  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl pt-4 bg-gray-200 font-bold text-gray-700">
        Fuel System Items
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
}

export default FuelSystem;
