import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";

// Pics
import Alternator from "/Pics/Electrical img/Alternator.jpeg";
import BatteryTermialsCables from "/Pics/Electrical img/Battery Terminals & Cables.jpeg";
import BrakeLight from "/Pics/Electrical img/Brake Light Bulb.jpeg";
import CarBattery from "/Pics/Electrical img/Car Battery.jpeg";
import CentralLocking from "/Pics/Electrical img/Central Locking Actuator.webp";
import DashboardInstrumentBulb from "/Pics/Electrical img/Dashboard Instrument Bulbs.jpeg";
import DaytimeRunningLight from "/Pics/Electrical img/Daytime Running Light (DRL).jpeg";
import FogLightAssembly from "/Pics/Electrical img/Fog Light Assembly.jpeg";
import FuseBoxAssembly from "/Pics/Electrical img/Fuse Box Assembly.jpeg";
import GloveBoxLight from "/Pics/Electrical img/Glove Box Light.jpeg";
import HalogenBulb from "/Pics/Electrical img/Halogen Bulb.jpeg";
import HeadlightAssembly from "/Pics/Electrical img/Headlight Assembly.jpeg";
import HornAssembly from "/Pics/Electrical img/Horn Assembly.webp";
import IgnitionSwitch from "/Pics/Electrical img/Ignition Switch.webp";
import IndicatorRelay from "/Pics/Electrical img/Indicator Relay (Flasher Relay).webp";
import InteriorDomeLight from "/Pics/Electrical img/Interior Dome Light.jpeg";
import Footer from "../../Components/Footer";

const electricalProducts = [
  {
    id: "p074",
    name: "Alternator",
    img: Alternator,
    desc: "A high-performance alternator that converts mechanical engine power into consistent electrical energy, ensuring the battery stays charged and all vehicle electronics operate smoothly.",
    price: "12000",
  },
  {
    id: "p075",
    name: "Battery Terminals & Cables",
    img: BatteryTermialsCables,
    desc: "Durable battery terminals and heavy-duty cables designed to provide strong, stable, and corrosion-resistant electrical connections for reliable vehicle starting and power delivery.",
    price: "1500",
  },
  {
    id: "p076",
    name: "Brake Light Bulb",
    img: BrakeLight,
    desc: "A long-lasting brake light bulb that delivers bright illumination to ensure clear visibility for drivers behind you, improving overall road safety during braking.",
    price: "250",
  },
  {
    id: "p077",
    name: "Car Battery",
    img: CarBattery,
    desc: "A powerful and long-lasting car battery offering high cold cranking amps for reliable engine starting, stable performance, and dependable electrical support in all conditions.",
    price: "8000",
  },
  {
    id: "p078",
    name: "Central Locking Actuator",
    img: CentralLocking,
    desc: "A smooth and reliable central locking actuator that automates door locking and unlocking, enhancing vehicle security and ease of access with consistent performance.",
    price: "3500",
  },
  {
    id: "p079",
    name: "Dashboard Instrument Bulbs",
    img: DashboardInstrumentBulb,
    desc: "Bright and efficient dashboard instrument bulbs that ensure clear visibility of speedometer, indicators, and other gauges, especially during nighttime driving.",
    price: "400",
  },
  {
    id: "p080",
    name: "Daytime Running Light (DRL)",
    img: DaytimeRunningLight,
    desc: "Energy-saving daytime running lights designed to increase vehicle visibility during daytime driving, improving safety and enhancing the overall look of the car.",
    price: "2200",
  },
  {
    id: "p081",
    name: "Fog Light Assembly",
    img: FogLightAssembly,
    desc: "A complete fog light assembly that provides powerful illumination for safer driving in fog, rain, dust, and other low-visibility conditions.",
    price: "4500",
  },
  {
    id: "p082",
    name: "Fuse Box Assembly",
    img: FuseBoxAssembly,
    desc: "A protective fuse box assembly that safeguards your vehicle's electrical circuits by preventing overloads, short circuits, and electrical failures.",
    price: "2800",
  },
  {
    id: "p083",
    name: "Glove Box Light",
    img: GloveBoxLight,
    desc: "A compact glove box light designed to illuminate the storage compartment, making it easy to find items inside even in complete darkness.",
    price: "600",
  },
  {
    id: "p084",
    name: "Halogen Bulb",
    img: HalogenBulb,
    desc: "A bright and efficient halogen bulb that delivers enhanced headlight performance with improved visibility and a longer lifespan compared to standard bulbs.",
    price: "1200",
  },
  {
    id: "p085",
    name: "Headlight Assembly",
    img: HeadlightAssembly,
    desc: "A complete headlight assembly offering clear, powerful, and focused illumination for safe nighttime driving and improved road visibility.",
    price: "7500",
  },
  {
    id: "p086",
    name: "Horn Assembly",
    img: HornAssembly,
    desc: "A loud, clear, and durable horn assembly that provides a strong alert signal for road communication and improved driving safety.",
    price: "1800",
  },
  {
    id: "p087",
    name: "Ignition Switch",
    img: IgnitionSwitch,
    desc: "A dependable ignition switch designed to provide smooth engine startup, secure key rotation, and consistent electrical system activation.",
    price: "3200",
  },
  {
    id: "p088",
    name: "Indicator Relay (Flasher Relay)",
    img: IndicatorRelay,
    desc: "A reliable flasher relay that controls the blinking rhythm of indicator lights, ensuring stable and properly timed turn signals.",
    price: "900",
  },
  {
    id: "p089",
    name: "Interior Dome Light",
    img: InteriorDomeLight,
    desc: "A bright interior dome light that provides clear cabin illumination, making it easier to see and access items inside the vehicle.",
    price: "700",
  },
];

const Electrical = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const placeOrder = (p) => {
    const message = `Hello! I want to order:\n\nProduct: ${p.name}\nPrice: Rs ${p.price}\nProduct ID: ${p.id}`;
    const url = `https://wa.me/923002345678?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl pt-4 bg-gray-200 font-bold text-gray-700">
        Electrical Items
      </h1>

      {selected && (
        <>
          <div
            className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40"
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

              <span className="text-red-600 font-bold text-lg">
                Rs {selected.price}
              </span>

              <button
                onClick={() =>
                  navigate("/order", { state: { product: selected } })
                }
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg shadow-md cursor-pointer"
              >
                Order Now
              </button>
            </div>
          </div>
        </>
      )}

      <div className="p-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 bg-gray-200 min-h-screen">
        {electricalProducts.map((p) => (
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

export default Electrical;
