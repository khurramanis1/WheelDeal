import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import HelpCenter from "./Pages/HelpCenter.jsx";

// Nested Pages
import BodyExterior from "./Pages/Nested Pages/BodyExterior.jsx";
import BrakeSystem from "./Pages/Nested Pages/BrakeSystem.jsx";
import CoolingSystem from "./Pages/Nested Pages/CoolingSystem.jsx";
import Electrical from "./Pages/Nested Pages/Eletrical.jsx";
import EngineRelated from "./Pages/Nested Pages/EngineRelated.jsx";
import FuelSystem from "./Pages/Nested Pages/FuelSystem.jsx";
import Interior from "./Pages/Nested Pages/Interior.jsx";

import NotFound from "./Pages/NotFound.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import Warranty from "./Pages/Warranty.jsx";
import RefundPolicy from "./Pages/RefundPolicy.jsx";
import TermsAndConditions from "./Pages/TermsConditions.jsx";
import Order from "./Pages/Order.jsx";
import Wheel from "./Pages/Nested Pages/Wheel.jsx";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        {/* Animation Wrapper */}
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            <Route path="/body-exterior" element={<BodyExterior />} />
            <Route path="/brake-system" element={<BrakeSystem />} />
            <Route path="/cooling-system" element={<CoolingSystem />} />
            <Route path="/electrical" element={<Electrical />} />
            <Route path="/engine-related" element={<EngineRelated />} />
            <Route path="/fuel-system" element={<FuelSystem />} />
            <Route path="/interior" element={<Interior />} />
            <Route path="/wheel" element={<Wheel />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/order" element={<Order />} />

            {/* Product Details */}
            <Route path="/product/:productId" element={<ProductDetails />} />

            {/* Optional Extra */}
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/footer" element={<Footer />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;