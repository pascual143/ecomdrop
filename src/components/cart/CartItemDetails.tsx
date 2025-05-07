import React from 'react';
import { CartItem } from '../../store/reducers/cartReducer'; 
import { Link } from 'react-router-dom';
import styles from './CartItemDetails.module.css'; 

interface CartItemDetailsProps {
  item: CartItem;
}

const CartItemDetails: React.FC<CartItemDetailsProps> = ({ item }) => {
  return (
    <div className={styles.itemDetails}>
      <Link to={`/producto/${item.product.id}`} className={styles.itemLink}>
        <img src={item.product.imageUrl} alt={item.product.name} className={styles.itemImage} />
        <div className={styles.itemInfo}>
          <p className={styles.itemName}>{item.product.name}</p>
          <p className={styles.itemPrice}>${item.product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default CartItemDetails;