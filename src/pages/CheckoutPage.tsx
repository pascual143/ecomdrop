import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './../app/store';
import { selectCartItems, selectCartTotal } from './../store/selectors/cartSelectors';
import { Link } from 'react-router-dom';
import styles from './CheckoutPage.module.css';
import CartItemDetails from '../components/cart/CartItemDetails';

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const handleProceedToCheckout = () => {
    alert('Simulando redirección al checkout de Printful...');
    // Integración real con Printful aquí.
  };

  if (cartItems.length === 0) {
    return (
      <div className={styles.emptyCheckout}>
        <h2>Tu carrito está vacío</h2>
        <p>¿Qué tal si echas un vistazo a nuestros <Link to="/catalogo">productos</Link>?</p>
      </div>
    );
  }

  return (
    <div className={styles.checkout}>
      <h2>Checkout</h2>
      <div className={styles.orderSummary}>
        <h3>Resumen del Pedido</h3>
        <ul className={styles.itemList}>
          {cartItems.map((item) => (
            <li key={item.product.id} className={styles.item}>
              <CartItemDetails item={item} />
              <span className={styles.itemQuantity}>Cantidad: {item.quantity}</span>
              <span className={styles.itemTotal}>
                Subtotal: ${(item.quantity * item.product.price).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <div className={styles.total}>
          <strong>Total del Pedido: ${cartTotal.toFixed(2)}</strong>
        </div>
      </div>
      <div className={styles.checkoutActions}>
        <button className={styles.proceedButton} onClick={handleProceedToCheckout}>
          Proceder al Checkout
        </button>
        <Link to="/carrito" className={styles.backToCart}>
          Volver al Carrito
        </Link>
      </div>
      <div className={styles.printfulInfo}>
        <p>El pago y envío serán gestionados por Printful.</p>
      </div>
    </div>
  );
};

export default CheckoutPage;