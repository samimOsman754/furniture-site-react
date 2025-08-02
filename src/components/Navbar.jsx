import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { CartContext } from "../contex/CartContext";

const navbarItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/shop",
    name: "Shop",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const NavbarItem = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8 ">
      {navbarItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-bold"
                : "hover:text-orange-500 font-bold"
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
const MobileNavbarItem = ({ isOpen }) => {
  return (
    <ul
      className={`flex flex-col items-center space-y-4 absolute top-20 left-0 w-full bg-white py-4 ${
        isOpen ? "block" : "hidden"
      } md:hidden`}
    >
      {navbarItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-bold"
                : "hover:text-orange-500 font-bold"
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // cart items from context
  const { cart } = useContext(CartContext);
  return (
    <div>
      {/* header tailwindCSS for hero section */}
      <header className={`fixed top-0 left-0 z-50 transition duration-300 ease-in-out w-full text-white`}>
        <nav className="container max-w-screen-2xl flex justify-between items-center mx-auto py-6 px-4">
          {/* logo */}
          <Link to="/" className="text-2xl font-bold ">
            Logo
          </Link>

          {/* desktop menu item */}
          <div className="hidden md:flex">
            <NavbarItem />
          </div>
          {/* Mobile menu icon */}
          <div
            className="md:hidden cursor-pointer  "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </div>
          {/* Mobile menu items */}
          <MobileNavbarItem isOpen={isOpen} />

          {/* cart icon */}
          <div className="hidden md:flex items-center relative cursor-pointer">
            <FaShoppingCart className="text-2xl text-white" />
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
