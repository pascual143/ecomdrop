import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './../app/store';
import { selectCartItems, selectCartTotal } from './../store/selectors/cartSelectors';
import { removeItem, updateQuantity } from './../store/reducers/cartReducer';
import { Link } from 'react-router-dom';
import styles from './ShoppingCartPage.module.css';

const ShoppingCartPage: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveItem = (productId: string) => {
    dispatch(removeItem(productId));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ productId, quantity }));
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Tu carrito está vacío</h2>
        <p>¿Qué tal si echas un vistazo a nuestros <Link to="/catalogo">productos</Link>?</p>
      </div>
    );
  }

  return (
    <div className={styles.shoppingCart}>
      <h2>Carrito de Compras</h2>
      <ul className={styles.itemList}>
        {cartItems.map((item) => (
          <li key={item.product.id} className={styles.item}>
            <Link to={`/producto/${item.product.id}`} className={styles.itemLink}>
              <img src={item.product.imageUrl} alt={item.product.name} className={styles.itemImage} />
              <div className={styles.itemInfo}>
                <h3 className={styles.itemName}>{item.product.name}</h3>
                <p className={styles.itemPrice}>${item.product.price.toFixed(2)}</p>
              </div>
            </Link>
            <div className={styles.quantityControl}>
              <label htmlFor={`quantity-${item.product.id}`}>Cantidad:</label>
              <input
                type="number"
                id={`quantity-${item.product.id}`}
                value={item.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value))}
                className={styles.quantityInput}
              />
            </div>
            <button className={styles.removeButton} onClick={() => handleRemoveItem(item.product.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.summary}>
        <div className={styles.total}>
          <strong>Total: ${cartTotal.toFixed(2)}</strong>
        </div>
        <Link to="/checkout" className={styles.checkoutButton}>
          Ir al Checkout
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartPage;