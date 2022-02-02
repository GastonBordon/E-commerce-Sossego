import React from "react";
import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand " to="/">
            Sossego
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="/">Productos</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink to="/category/remera">Remeras</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/buzo">Buzos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/gorra">Gorras</NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Contacto</a>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
