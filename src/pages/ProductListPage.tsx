import React, { useEffect, useState } from 'react';
import ProductCard from '../components/products/ProductCard';
import { Product } from '../store/types'; 
import styles from './ProductListPage.module.css'; 
import printfulService from '../services/printfulService';

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await printfulService.getProducts();
        setProducts(data);
        setLoading(false);
      } catch (err: any) {
        setError('Error al cargar los productos.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.productList}>
      <h2>Catálogo de Productos</h2>
      <div className={styles.gridContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;