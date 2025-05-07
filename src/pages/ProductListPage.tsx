import React, { useEffect, useState } from 'react';
import ProductCard from '../components/products/ProductCard';
import { Product } from '../store/types'; 
import styles from './ProductListPage.module.css'; 
import printfulService from '../services/printfulService';
import LoadingSpinner from '../components/common/LoadingSpinner';
import PriceRangeFilter from '../components/filters/PriceRangeFilter';

const ProductListPage: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await printfulService.getProducts();
        setAllProducts(data);
        setFilteredProducts(data); // Inicialmente, mostrar todos los productos
        setLoading(false);
      } catch (err: any) {
        setError('Error al cargar los productos. Por favor, intenta de nuevo más tarde.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handlePriceFilter = (minPrice: number | null, maxPrice: number | null) => {
    const filtered = allProducts.filter((product) => {
      const price = product.price;
      const minCondition = minPrice === null || price >= minPrice;
      const maxCondition = maxPrice === null || price <= maxPrice;
      return minCondition && maxCondition;
    });
    setFilteredProducts(filtered);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.productListContainer}> {/* Contenedor para el filtro y la lista */}
      <div className={styles.filters}>
        <PriceRangeFilter onFilter={handlePriceFilter} />
        {/* Otros filtros irían aquí */}
      </div>
      <div className={styles.productList}>
        <h2>Catálogo de Productos</h2>
        <div className={styles.gridContainer}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;