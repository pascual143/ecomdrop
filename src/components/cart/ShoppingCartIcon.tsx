import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "../../store/selectors/cartSelectors";
import styles from "./ShoppingCartIcon.module.css";

const ShoppingCartIcon: React.FC = () => {
  const itemCount = useSelector(selectCartItemCount);

  return (
    <div className={styles.cartIcon}>
    <Link to="/carrito" className={styles.iconContainer}>
    {/* <img src="/images/cart-icon.png" alt="Carrito" className={styles.icon} /> */}
        {itemCount > 0 && 
            <span className={styles.badge}>{itemCount}</span>}
      </Link>
    </div>
  );
}

export default ShoppingCartIcon;