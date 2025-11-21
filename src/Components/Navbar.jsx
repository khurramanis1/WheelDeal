import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "./../assets/WheelDealLogo.png";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();

  const baseStyle = "hover:text-blue-400 transition";
  const activeStyle = "text-blue-400 border-b-2 border-blue-400 pb-1";

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gray-800 text-gray-800 shadow-md z-50 p-1">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-11" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-lg text-white font-semibold items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeStyle : baseStyle
                }
              >
                Home
              </NavLink>
            </li>

            {/* Dropdown */}
            <li className="relative group">
              <span className={baseStyle + " cursor-pointer"}>Products</span>

              <ul
                className="
                absolute hidden group-hover:block bg-gray-900 text-white 
                rounded shadow-lg w-56 p-2 top-full left-0
              "
              >
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                    to="/body-exterior"
                  >
                    Body Exterior
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                    to="/brake-system"
                  >
                    Brake System
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                    to="/cooling-system"
                  >
                    Cooling System
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                    to="/electrical"
                  >
                    Electrical
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                    to="/engine-related"
                  >
                    Engine Related
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                    to="/fuel-system"
                  >
                    Fuel System
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                    to="/interior"
                  >
                    Interior
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                    to="/wheel"
                  >
                    Wheel
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeStyle : baseStyle
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeStyle : baseStyle
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="hidden md:block">
            {user ? (
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 transition px-4 py-2 rounded-lg text-white shadow-md"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/signup"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition px-4 py-2 rounded-lg text-white shadow-md"
              >
                Sign Up
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden bg-gray-800 px-4 pb-4">
            <ul className="flex flex-col gap-4 text-lg text-center text-white">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeStyle : baseStyle
                }
              >
                Home
              </NavLink>

              <details className="bg-gray-900 text-white rounded p-2">
                <summary className="cursor-pointer py-1">Products</summary>
                <div className="flex flex-col gap-2 mt-2">
                  <Link to="/body-exterior" onClick={() => setOpen(false)}>
                    Body Exterior
                  </Link>
                  <Link to="/brake-system" onClick={() => setOpen(false)}>
                    Brake System
                  </Link>
                  <Link to="/cooling-system" onClick={() => setOpen(false)}>
                    Cooling System
                  </Link>
                  <Link to="/electrical" onClick={() => setOpen(false)}>
                    Electrical
                  </Link>
                  <Link to="/engine-related" onClick={() => setOpen(false)}>
                    Engine Related
                  </Link>
                  <Link to="/fuel-system" onClick={() => setOpen(false)}>
                    Fuel System
                  </Link>
                  <Link to="/interior" onClick={() => setOpen(false)}>
                    Interior
                  </Link>
                </div>
              </details>

              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeStyle : baseStyle
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? activeStyle : baseStyle
                }
              >
                Contact
              </NavLink>

              {user ? (
                <span className="text-green-400 font-bold">Logged In</span>
              ) : (
                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition px-4 py-2 rounded-lg text-white shadow-md"
                >
                  Sign Up
                </Link>
              )}
            </ul>
          </div>
        )}
      </nav>

      <div className="mb-19"></div>
    </>
  );
}

export default Navbar;
