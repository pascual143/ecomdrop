import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { Product } from '../store/types';
import { addItem } from '../store/reducers/cartReducer';
import printfulService from '../services/printfulService';
import styles from './ProductDetailPage.module.css';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const data = await printfulService.getProductById(id);
          setProduct(data);
          setLoading(false);
        } catch (err: any) {
          setError('Error al cargar los detalles del producto.');
          setLoading(false);
        }
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItem(product));
    }
  };

  if (loading) {
    return <div>Cargando detalles del producto...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div className={styles.productDetail}>
      <div className={styles.imageContainer}>
        <img src={product.imageUrl} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        {product.description && <p className={styles.description}>{product.description}</p>}
        <button className={styles.addToCartButton} onClick={handleAddToCart}>
          Añadir al carrito
        </button>
        {/* Otras funcionalidades */}
      </div>
    </div>
  );
};

export default ProductDetailPage;