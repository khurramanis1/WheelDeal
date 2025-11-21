import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "p017",
    name: "Camshaft Pulley",
    img: "/Pics/EngineRelated/Camshaft Pulley.jpeg",
    desc: "This precision-machined camshaft pulley is designed to maintain exact synchronization between the camshaft and the crankshaft, ensuring consistent valve timing and smooth engine operation. Manufactured from high-grade metal alloys, it withstands extreme temperatures and stress, offering long-term durability. A high-quality camshaft pulley helps improve engine efficiency, power delivery, and overall performance by reducing timing fluctuations and maintaining stable rotation even at high RPM.",
    price: "13,000",
  },
  {
    id: "p018",
    name: "Camshaft",
    img: "/Pics/EngineRelated/Camshaft.jpeg",
    desc: "The camshaft is a fundamental engine component responsible for regulating the precise opening and closing of the intake and exhaust valves. Crafted from durable hardened steel, this camshaft ensures accurate valve timing, efficient combustion, and consistent airflow through the engine. A well-maintained camshaft directly contributes to smoother performance, improved torque, better fuel efficiency, and reduced emissions. Its carefully engineered lobes are designed to withstand friction, wear, and high-speed rotation.",
    price: "2,200",
  },
  {
    id: "p019",
    name: "Connecting Rod",
    img: "/Pics/EngineRelated/Connecting Rod.jpeg",
    desc: "This forged, heavy-duty connecting rod serves as the vital link between the engine’s piston and the crankshaft. It converts the piston’s linear up-and-down motion into the rotational movement required to power the vehicle. Engineered for strength and reliability, it withstands immense pressure, combustion force, and high-speed stress. A high-quality connecting rod ensures smooth engine operation, reduces vibration, and prevents catastrophic engine failure, making it an essential component for engine durability.",
    price: "2,100",
  },
  {
    id: "p020",
    name: "Crank Pulley",
    img: "/Pics/EngineRelated/Crank Pulley.jpeg",
    desc: "This lightweight but durable crank pulley is designed to enhance accessory belt performance by efficiently driving the alternator, power steering pump, and AC compressor. Engineered for smooth rotation, it reduces unwanted vibration and improves throttle response at both low and high RPM. The pulley’s balanced construction ensures reduced engine load and optimal belt alignment, contributing to overall engine efficiency, better acceleration, and long-term reliability.",
    price: "33,000",
  },
  {
    id: "p021",
    name: "Crankshaft",
    img: "/Pics/EngineRelated/Crankshaft.jpeg",
    desc: "The crankshaft is the central rotating component of the engine that converts the pistons’ vertical movement into rotational power. Built from heavy-duty steel and precision-balanced to prevent vibration, this crankshaft ensures smooth engine operation and reliable power output. Its oil passages, journals, and bearing surfaces are engineered for maximum durability under extreme loads. A strong crankshaft improves engine longevity, reduces noise, and supports high-performance driving conditions.",
    price: "5,000",
  },
  {
    id: "p022",
    name: "Cylinder Head",
    img: "/Pics/EngineRelated/Cylinder Head.jpeg",
    desc: "This high-quality aluminum cylinder head forms the top section of the engine block and houses essential components such as valves, springs, and passages for coolant and oil. It seals the combustion chamber to withstand extreme pressure and heat produced during ignition. A precisely manufactured cylinder head ensures efficient air-fuel flow, proper sealing, optimal compression, and reduced emissions. Its durability and heat resistance make it crucial for maintaining engine temperature and performance.",
    price: "10,000",
  },
  {
    id: "p023",
    name: "EGR Valve",
    img: "/Pics/EngineRelated/EGR Valve (Exhaust Gas Recirculation).jpeg",
    desc: "The Exhaust Gas Recirculation (EGR) valve plays a critical role in reducing harmful NOx emissions by redirecting a controlled portion of exhaust gases back into the intake manifold. This lowers combustion temperature, improves engine efficiency, and minimizes environmental pollution. Engineered for precision, this EGR valve ensures smooth operation, prevents engine knocking, and enhances fuel economy. Its durable construction provides long-term reliability even in harsh engine conditions.",
    price: "32,000",
  },
  {
    id: "p024",
    name: "Engine Mount",
    img: "/Pics/EngineRelated/Engine Mount.jpeg",
    desc: "This heavy-duty engine mount is designed to secure the engine firmly to the vehicle’s chassis while absorbing vibrations and preventing excessive engine movement. Its rubber-and-metal construction isolates noise and improves cabin comfort by reducing harshness and shaking. A strong engine mount ensures stable driving, prevents damage to surrounding components, and maintains proper engine alignment. It is essential for smooth acceleration, quieter performance, and overall vehicle safety.",
    price: "122,560",
  },
  {
    id: "p025",
    name: "Engine Oil Filter",
    img: "/Pics/EngineRelated/engine oil Filter.jpeg",
    desc: "This high-efficiency engine oil filter is engineered to remove dirt, carbon particles, sludge, and metal fragments that accumulate in the engine oil during operation. By providing clean, contaminant-free oil to critical engine components, the filter helps reduce friction, prevent wear, and extend engine life. Its durable media ensures consistent filtration under high pressure and temperature conditions, making it an essential component for maintaining smooth and reliable engine performance.",
    price: "2,000",
  },
  {
    id: "p026",
    name: "Exhaust Manifold",
    img: "/Pics/EngineRelated/Exhaust Manifold.jpeg",
    desc: "This robust exhaust manifold collects exhaust gases from each engine cylinder and channels them into the exhaust system with minimal resistance. Manufactured from heat-resistant cast iron or stainless steel, it withstands extreme temperature fluctuations and prevents exhaust leaks. A well-designed manifold improves airflow, enhances engine efficiency, reduces backpressure, and contributes to better fuel economy. It also plays a vital role in reducing engine noise and maintaining proper emissions control.",
    price: "20,500",
  },
  {
    id: "p027",
    name: "Clutch Kit",
    img: "/Pics/EngineRelated/Flywheel.jpeg",
    desc: "This complete clutch kit includes the pressure plate, clutch disc, and release bearing necessary for smooth power transfer between the engine and the transmission. Designed for long-lasting durability, it ensures seamless gear shifting, reduced slippage, and improved driving comfort. The high-friction clutch disc provides firm engagement, while the precision-balanced pressure plate distributes force evenly. Ideal for restoring smooth manual transmission performance and ensuring consistent torque delivery.",
    price: "10,500",
  },
  {
    id: "p028",
    name: "Fuel Injector",
    img: "/Pics/EngineRelated/Fuel Injector.jpeg",
    desc: "This precision fuel injector is engineered to deliver the exact amount of fuel into the combustion chamber at the right moment and pressure. Its fine spray pattern ensures complete mixing with air, resulting in cleaner combustion, smoother acceleration, and improved fuel economy. Built to withstand high pressure and temperature, this injector prevents misfires, reduces emissions, and restores lost engine performance. A high-quality injector is essential for maintaining consistent engine power and efficiency.",
    price: "15,000",
  },
  {
    id: "p029",
    name: "Glow Plug",
    img: "/Pics/EngineRelated/Glow Plug (Diesel Engine).jpeg",
    desc: "These durable glow plugs are essential for reliable cold starts in diesel engines, especially in low-temperature conditions. They work by rapidly heating the combustion chamber to the required temperature for ignition. Designed to withstand repeated heating cycles, these glow plugs ensure stable performance, reduced white smoke, and smoother initial combustion. A healthy set of glow plugs greatly improves starting reliability and overall engine efficiency.",
    price: "1,500",
  },
  {
    id: "p030",
    name: "Harmonic Balancer",
    img: "/Pics/EngineRelated/Harmonic Balancer.jpeg",
    desc: "This high-performance harmonic balancer is engineered to absorb and neutralize torsional vibrations produced by the crankshaft. Without this component, vibrations could cause premature wear or even severe engine damage. Built with a durable steel body and a bonded rubber ring, it ensures smoother engine rotation, reduced noise, and increased crankshaft lifespan. A high-quality harmonic balancer is essential for maintaining engine stability, especially at high RPM.",
    price: "62,000",
  },
];

function EngineRelated() {
  const [selectedProduct, setSelectedProduct] = useState(null);
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
        Engine Related Items
      </h1>

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

export default EngineRelated;
