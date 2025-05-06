import React from 'react';
import styles from './HomePage.module.css'; // O tu sistema de estilos

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <h1>Bienvenido a Mi Tienda</h1>
      <p>Descubre nuestros increíbles productos de dropshipping.</p>
      {/* Podrías añadir aquí una sección de productos destacados */}
    </div>
  );
};

export default HomePage;