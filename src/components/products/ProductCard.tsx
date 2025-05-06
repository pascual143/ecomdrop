import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../store/types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <Link to={`/producto/${product.id}`} className={styles.productLink}>
        <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
      </Link>
    </div>
  );
};

export default ProductCard;