import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const count = useSelector((state) => state.CartReducer.data.length);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          E-Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Link to="/" className="nav-link">
              <li className="nav-item active">
                Home <span className="sr-only">(current)</span>
              </li>
            </Link>
          </ul>
          {count == 0 ? null : (
            <Link to="/cart">
              {" "}
              <button style={{ borderRadius: "20px" }}>{count}</button>
            </Link>
          )}
          <Link to="/cart">
            {" "}
            <FiShoppingCart style={{ color: "#ffff", height: "30px" }} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
