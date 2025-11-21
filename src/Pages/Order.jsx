import { useLocation } from "react-router-dom";
import Navbar from "./../Components/Navbar";
import { useState } from "react";
import Footer from "../Components/Footer";

function Order() {
  const location = useLocation();
  const product = location.state?.product;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto mt-24 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-700">Order Product</h1>

        {product && (
          <div className="mb-4 p-4 bg-gray-100 rounded-lg">
            <p><strong>Product:</strong> {product.name}</p>
            <p><strong>Price:</strong> Rs {product.price}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            placeholder="Delivery Address"
            className="w-full border p-3 rounded-lg"
            rows="4"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>

          <button className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg font-semibold">
            Confirm Order
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Order;