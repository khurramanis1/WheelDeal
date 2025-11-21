import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";   // ← Added this

// Images
import AuxiliaryElectricCoolingFan from "/Pics/cooling system/Auxiliary Electric Cooling Fan.webp";
import BypassHose from "/Pics/cooling system/Bypass Hose.webp";
import CoolantExpansion from "/Pics/cooling system/Coolant Expansion Tank (Reservoir).webp";
import CoolantLevelSensor from "/Pics/cooling system/Coolant Level Sensor.webp";
import CoolingFan from "/Pics/cooling system/Cooling Fan (Radiator Fan).webp";
import CoolingSystemFlush from "/Pics/cooling system/Cooling System Flush Kit.webp";
import EngineCoolant from "/Pics/cooling system/Engine Coolant (Antifreeze).webp";
import FanBlade from "/Pics/cooling system/Fan Blade.webp";
import FanClutch from "/Pics/cooling system/Fan Clutch.webp";
import FanControlModule from "/Pics/cooling system/Fan Control Module.webp";
import FanRelay from "/Pics/cooling system/Fan Relay.webp";
import HeaterCore from "/Pics/cooling system/Heater Core.webp";
import HeaterHose from "/Pics/cooling system/Heater Hose.webp";
import Intercooler from "/Pics/cooling system/Intercooler (Turbo Engine).webp";
import OilCooler from "/Pics/cooling system/Oil Cooler.webp";
import OverflowHose from "/Pics/cooling system/Overflow Hose.webp";
import PipeFittings from "/Pics/cooling system/Pipe Fittings (Cooling Lines).webp";
import Footer from "../../Components/Footer";

// Products Array
const products = [
  {
    id: "p057",
    name: "Auxiliary Electric Cooling Fan",
    img: AuxiliaryElectricCoolingFan,
    desc: "High-performance auxiliary electric cooling fan designed to provide additional airflow to the radiator, helping the engine maintain optimal temperature during heavy traffic, hot weather, and high-load driving conditions.",
    price: "4500",
  },
  {
    id: "p058",
    name: "Bypass Hose",
    img: BypassHose,
    desc: "Durable and heat-resistant bypass hose that ensures continuous circulation of coolant when the thermostat is closed, preventing engine overheating and maintaining stable temperature flow.",
    price: "300",
  },
  {
    id: "p059",
    name: "Coolant Expansion Tank",
    img: CoolantExpansion,
    desc: "High-quality coolant expansion reservoir that stores excess coolant, maintains system pressure, and ensures consistent coolant flow during temperature fluctuations.",
    price: "1800",
  },
  {
    id: "p060",
    name: "Coolant Level Sensor",
    img: CoolantLevelSensor,
    desc: "Precision coolant level sensor that accurately detects the coolant quantity inside the reservoir, preventing the engine from overheating due to low coolant levels.",
    price: "900",
  },
  {
    id: "p061",
    name: "Cooling Fan",
    img: CoolingFan,
    desc: "Efficient radiator cooling fan engineered to maintain ideal engine temperature by drawing air through the radiator, even during idling or slow-speed driving.",
    price: "3200",
  },
  {
    id: "p062",
    name: "Cooling System Flush Kit",
    img: CoolingSystemFlush,
    desc: "Complete cooling system flush kit designed for deep cleaning the radiator, hoses, and engine coolant passages, helping restore optimal cooling performance.",
    price: "750",
  },
  {
    id: "p063",
    name: "Engine Coolant",
    img: EngineCoolant,
    desc: "Premium-grade engine coolant formulated to prevent overheating, corrosion, and freezing while ensuring long-lasting protection for the entire cooling system.",
    price: "1200",
  },
  {
    id: "p064",
    name: "Fan Blade",
    img: FanBlade,
    desc: "Strong and lightweight fan blade built to deliver powerful airflow through the radiator, improving cooling efficiency and enhancing overall engine performance.",
    price: "850",
  },
  {
    id: "p065",
    name: "Fan Clutch",
    img: FanClutch,
    desc: "emperature-controlled fan clutch that automatically adjusts fan speed based on engine heat, improving cooling performance and fuel efficiency.",
    price: "3500",
  },
  {
    id: "p066",
    name: "Fan Control Module",
    img: FanControlModule,
    desc: "Advanced electronic fan control module that regulates the speed and activation of the cooling fan system for accurate temperature management.",
    price: "2500",
  },
  {
    id: "p067",
    name: "Fan Relay",
    img: FanRelay,
    desc: "Reliable fan relay that supplies controlled power to the radiator fan, ensuring smooth and efficient operation during engine cooling cycles.",
    price: "300",
  },
  {
    id: "p068",
    name: "Heater Core",
    img: HeaterCore,
    desc: "High-efficiency heater core that circulates hot coolant to warm the cabin air, providing quick heat distribution during cold weather.",
    price: "5000",
  },
  {
    id: "p069",
    name: "Heater Hose",
    img: HeaterHose,
    desc: "Flexible, heat-resistant heater hose designed to transport hot coolant between the engine and heater core, ensuring steady cabin heating performance.",
    price: "400",
  },
  {
    id: "p070",
    name: "Intercooler",
    img: Intercooler,
    desc: "High-capacity intercooler engineered for turbocharged engines to cool compressed air, improving power output, efficiency, and engine durability.",
    price: "8500",
  },
  {
    id: "p071",
    name: "Oil Cooler",
    img: OilCooler,
    desc: "Durable engine oil cooler designed to regulate oil temperature, reduce thermal stress, and enhance engine longevity under high-performance conditions.",
    price: "6500",
  },
  {
    id: "p072",
    name: "Overflow Hose",
    img: OverflowHose,
    desc: "Quality overflow hose that transfers excess coolant from the radiator to the expansion tank, maintaining pressure balance in the cooling system.",
    price: "250",
  },
  {
    id: "p073",
    name: "Pipe Fittings",
    img: PipeFittings,
    desc: "Strong metal pipe fittings specially designed for coolant lines, ensuring secure connections and leak-free coolant circulation throughout the cooling system.",
    price: "500",
  },
];

const CoolingSystem = () => {
  const [selected, setSelected] = useState(null);

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl pt-4 bg-gray-200 font-bold text-gray-700">
        Cooling System Items
      </h1>

      {/* Modal */}
      {selected && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-sm z-40"
            onClick={() => setSelected(null)}
          ></div>

          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>

              <img
                src={selected.img}
                alt={selected.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                {selected.name}
              </h2>

              <p className="text-gray-700 mb-4">{selected.desc}</p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-red-600 font-bold text-lg">
                  Rs {selected.price}
                </span>
              </div>

              {/* ORDER NOW BUTTON */}
              <button
                onClick={() =>
                  navigate("/order", { state: { product: selected } })
                }
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md"
              >
                Order Now
              </button>
            </div>
          </div>
        </>
      )}

      {/* Product Grid */}
      <div className="p-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 bg-gray-200 min-h-screen">
        {products.map((p) => (
          <div
            key={p.id}
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-red-300 transition duration-300"
          >
            <div className="w-full h-60 overflow-hidden rounded-t-xl">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition">
                {p.name}
              </h2>

              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {p.desc}
              </p>

              <div className="mt-3 flex justify-between items-center">
                <span className="text-red-600 font-bold text-lg">
                  Rs {p.price}
                </span>

                <button
                  onClick={() => setSelected(p)}
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

export default CoolingSystem;