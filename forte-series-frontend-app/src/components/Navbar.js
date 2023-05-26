import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const productData = useSelector((state) => state.cartAbc);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/images/forte_Series.jpg" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/allProducts"
                >
                  Hair Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  SkinCare Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Hair Quiz
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Why Buy Forte
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Tutorial
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="cart_icon">
              <span>{productData.length}</span>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
            <div className="account_icon">
              <Link to={'/login'}>
                <i class="fa fa-user" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
