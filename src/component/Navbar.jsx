
import { NavLink } from "react-router";

function Navbar() {
  return (
    <div>
      <div>
        <h1 className="bg-black text-white text-center py-1 text-sm">
          🚚 Free shipping on orders over 50$ 🌟
        </h1>
        <nav className="flex justify-around py-3">
          <div className="font-bold text-xl">KH</div>
          <ul className="flex gap-6">
            <li>
              <NavLink to="/" className="hover:text-amber-700 hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="hover:text-amber-700 hover:underline"
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-amber-700 hover:underline"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="hover:text-amber-700 hover:underline"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="flex gap-4">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-user"></i>
            <i className="fa-solid fa-bag-shopping"></i>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
