import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";

const wheelProducts = [
  {
    id: "p106",
    name: "All-Season Tire",
    img: "/Pics/wheel images/All-Season Tire.webp",
    desc: "All-weather tire designed for balanced performance in dry, wet, and mildly snowy conditions. Offers improved grip, reduced road noise, and long tread life.",
    price: "14,500",
  },
  {
    id: "p107",
    name: "Alloy Wheels",
    img: "/Pics/wheel images/Alloy Wheels.webp",
    desc: "Premium lightweight alloy wheels that enhance vehicle looks and handling. Corrosion-resistant and engineered for smoother driving performance.",
    price: "22,000",
  },
  {
    id: "p108",
    name: "Bias-Ply Tire",
    img: "/Pics/wheel images/Bias-Ply Tire.webp",
    desc: "Heavy-duty construction tire ideal for load-bearing vehicles, offering strong sidewalls, stability, and long-lasting durability on rugged terrains.",
    price: "11,000",
  },
  {
    id: "p109",
    name: "Center Caps",
    img: "/Pics/wheel images/Center Caps.webp",
    desc: "High-quality wheel center caps designed to protect the hub while adding a stylish finish. Durable, corrosion-resistant, and easy to install.",
    price: "1,200",
  },
  {
    id: "p110",
    name: "Low-Profile Tire",
    img: "/Pics/wheel images/Low-Profile Tire.webp",
    desc: "Sporty low-profile tire offering enhanced grip, sharp cornering, and improved braking for high-performance driving.",
    price: "19,000",
  },
  {
    id: "p111",
    name: "Off-Road Tire",
    img: "/Pics/wheel images/Off-Road Tire (4x4).webp",
    desc: "Aggressive tread off-road tire built for mud, rocks, and uneven terrains. Delivers superior traction and reinforced sidewall protection.",
    price: "28,500",
  },
  {
    id: "p112",
    name: "Performance Tire",
    img: "/Pics/wheel images/Performance Tire.webp",
    desc: "High-grip performance tire optimized for maximum stability, cornering precision, and braking efficiency at high speeds.",
    price: "24,000",
  },
  {
    id: "p113",
    name: "Radial Tire",
    img: "/Pics/wheel images/Radial Tire.webp",
    desc: "Fuel-efficient tire with radial construction for smoother rides, better heat resistance, and increased tread life.",
    price: "13,500",
  },
  {
    id: "p114",
    name: "Rim Protector Strip",
    img: "/Pics/wheel images/Rim Protector Strip.webp",
    desc: "Flexible rim protector strip that prevents curb damage and enhances wheel appearance. Easy installation with strong adhesive.",
    price: "1,000",
  },
  {
    id: "p115",
    name: "Run-Flat Tire",
    img: "/Pics/wheel images/Run-Flat Tire.webp",
    desc: "Advanced run-flat tire designed to keep driving up to 80 km even after total air loss. Reinforced sidewalls ensure reliability and safety.",
    price: "32,000",
  },
  {
    id: "p116",
    name: "Tire Pressure Monitoring Sensor",
    img: "/Pics/wheel images/Tire Pressure Monitoring Sensor (TPMS).webp",
    desc: "Digital TPMS sensor that continuously monitors tire pressure, offering real-time alerts for safer and more efficient driving.",
    price: "4,500",
  },
  {
    id: "p117",
    name: "Spare Wheel Carrier",
    img: "/Pics/wheel images/Spare Wheel Carrier.webp",
    desc: "Durable spare wheel mounting carrier designed for SUVs and 4x4 vehicles. Ensures secure fitting and long-lasting rust resistance.",
    price: "7,500",
  },
  {
    id: "p118",
    name: "Steel Wheels (Rims)",
    img: "/Pics/wheel images/Steel Wheels (Rims).webp",
    desc: "Strong and affordable steel rims ideal for rough roads. Extremely durable and resistant to impact, making them perfect for heavy-duty use.",
    price: "9,500",
  },
  {
    id: "p119",
    name: "Summer Tire",
    img: "/Pics/wheel images/Summer Tire.webp",
    desc: "High-performance summer tire engineered for excellent dry and wet grip, short braking distances, and responsive handling.",
    price: "17,500",
  },
  {
    id: "p120",
    name: "Tire Bead Sealer",
    img: "/Pics/wheel images/Tire Bead Sealer.webp",
    desc: "Professional-grade bead sealer that ensures airtight sealing between tire and rim, preventing slow leaks and improving reliability.",
    price: "750",
  },
  {
    id: "p121",
    name: "Tire Inflator (Air Pump)",
    img: "/Pics/wheel images/Tire Inflator (Air Pump).webp",
    desc: "Portable electric tire inflator suitable for cars, bikes, and SUVs. Features digital pressure display and auto cut-off for convenience.",
    price: "3,200",
  }
];


function Wheel() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl pt-4 bg-gray-200 font-bold text-gray-700">
        Wheel Items
      </h1>

      {/* Modal */}
      {selectedProduct && (
        <>
          <div
            className="fixed inset-0 z-40 bg-opacity-50 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          ></div>

          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
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

      {/* Product Grid */}
      <div className="p-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 bg-gray-200 min-h-screen">
        {wheelProducts.map((product) => (
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

export default Wheel;