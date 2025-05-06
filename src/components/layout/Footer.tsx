import React from 'react';
import styles from './Footer.module.css'; // O tu sistema de estilos
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Mi Tienda. Todos los derechos reservados.
      </div>
      <nav className={styles.footerNav}>
        <ul>
          <li>
            <Link to="/terminos-y-condiciones">Términos y Condiciones</Link>
          </li>
          <li>
            <Link to="/politica-de-privacidad">Política de Privacidad</Link>
          </li>
          {/* Otros enlaces del footer */}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;