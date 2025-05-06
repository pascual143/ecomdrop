import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "../cart/ShoppingCartIcon";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">Mi tienda</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/catalogo">Catálogo</Link>
          </li>
          {/* Otros enlaces de navegación */}
        </ul>
      </nav>
      <div className={styles.userActions}>
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/registro">Registrarse</Link>
        <ShoppingCartIcon /> 
      </div>
    </header>
  );
};

export default Header;  