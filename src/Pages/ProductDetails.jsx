import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: "p048",
      name: "Dashboard Cover",
      img: "/Pics/interior images/Dashboard Cover.webp",
      desc: "A high-quality heat-resistant dashboard cover designed to protect your car's interior from harsh sunlight, fading, and cracking. It helps maintain a cooler cabin temperature while giving your dashboard a clean and premium look. Perfect for long-term durability and comfort.",
      price: "1800 PKR",
      category: "interior Auto Parts",
    },
    {
      id: "p096",
      name: "Brake Drum",
      img: "/Pics/breaksystem img/Brake Drum.jpeg",
      desc: "A durable and precisely engineered brake drum that ensures stable braking performance by allowing the brake shoes to press smoothly against its inner surface. It is built to withstand heat and friction, providing reliable stopping power and long-lasting safety.",
      price: "6000 PKR",
      category: "Brake System Auto Parts",
    },
    {
      id: "p030",
      name: "Harmonic Balancer",
      img: "/Pics/EngineRelated/Harmonic Balancer.jpeg",
      desc: "A strong and efficient harmonic balancer designed to absorb engine vibrations, protect the crankshaft from damage, and ensure smoother engine operation. It reduces noise, improves performance, and increases the overall lifespan of the engine’s rotating components.",
      price: "62000 PKR",
      category: "Engine Auto Parts",
    },
  ];

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <h1 className="text-center text-2xl mt-20">Product Not Found</h1>;
  }

  const placeOrder = () => {
    navigate("/order", { state: { product } });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 grid md:grid-cols-2 gap-10">
      {/* PRODUCT IMAGE */}
      <div className="w-full h-[380px] rounded-xl overflow-hidden shadow-lg">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* PRODUCT DETAILS */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>

        <p className="text-red-600 text-3xl font-semibold mt-3">{product.price}</p>

        <p className="text-gray-700 mt-4 leading-relaxed">{product.desc}</p>

        <button
          onClick={placeOrder}
          className="mt-6 w-full py-3 bg-red-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-red-700 transition"
        >
          Order Now
        </button>

        {/* Extra info */}
        <div className="mt-8 space-y-2 text-gray-700">
          <p>
            <strong>Availability:</strong> In Stock
          </p>
          <p>
            <strong>SKU:</strong> {product.id}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;