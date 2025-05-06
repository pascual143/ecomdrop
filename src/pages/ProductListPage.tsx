import React from 'react';
import ProductCard from '../components/products/ProductCard';
import { Product } from '../store/types'; 
import styles from './ProductListPage.module.css'; // O tu sistema de estilos

// Simulación de datos de productos de Printful
const DUMMY_PRODUCTS: Product[] = [
  { id: '1', name: 'Camiseta Genial', imageUrl: 'https://via.placeholder.com/150/FF0000', price: 25.99 },
  { id: '2', name: 'Taza de Café Épica', imageUrl: 'https://via.placeholder.com/150/00FF00', price: 12.50 },
  { id: '3', name: 'Sudadera Cómoda', imageUrl: 'https://via.placeholder.com/150/0000FF', price: 45.00 },
  // ... más productos
];

const ProductListPage: React.FC = () => {
  return (
    <div className={styles.productList}>
      <h2>Catálogo de Productos</h2>
      <div className={styles.gridContainer}>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;