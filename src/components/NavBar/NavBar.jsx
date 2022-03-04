import { NavLink, Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import img from "../../img/logo-resaltado.png";
import { useCartContext } from "../../context/CartContext";
import "./NavBar.css";

const NavBar = () => {
  const { quantity } = useCartContext();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbarStyles">
        <div className="container-fluid">
          <NavLink className="navbar-brand logo " to="/">
            <img src={`${img}`} alt="logo de sossego" />
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
              <li className="nav-item text-dark">
                <NavLink
                  className="nav-link {({active}) => active ? 'boton' : ''}"
                  to="/"
                >
                  Productos
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="nav-link {({active}) => active ? 'boton' : ''}"
                      to="/category/remera"
                    >
                      Remeras
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav-link {({active}) => active ? 'boton' : ''}"
                      to="/category/buzo"
                    >
                      Buzos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav-link {({active}) => active ? 'boton' : ''}"
                      to="/category/gorra"
                    >
                      Gorras
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="/cart">
            {quantity() !== 0 && quantity()}
            <CartWidget />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
