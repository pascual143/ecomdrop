import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage'; 
import ProductListPage from './pages/ProductListPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer'; 
// import ShoppingCartPage from '../pages/ShoppingCartPage'; // Aún no creado
// import ProductDetailPage from '../pages/ProductDetailPage'; // Aún no creado
import styles from './App.module.css'; // O tu sistema de estilos
import { Provider } from 'react-redux';
import store from './app/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.appContainer}>
          <Header />
          <main className={styles.mainContent}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalogo" element={<ProductListPage />} />
              {/* <Route path="/producto/:id" element={<ProductDetailPage />} /> Ruta para la página de detalles del producto */}
              {/* <Route path="/carrito" element={<ShoppingCartPage />} /> */}
              {/* Otras rutas */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;