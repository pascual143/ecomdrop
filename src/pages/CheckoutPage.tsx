import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { selectCartItems, selectCartTotal } from '../store/selectors/cartSelectors';
import styles from './CheckoutPage.module.css'; // O tu sistema de estilos

const CheckoutPage: React.FC = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const handleProceedToCheckout = () => {
    // En una integración real con Printful, aquí construirías una URL
    // que redirige al usuario a su checkout con los items del carrito.
    // Esto generalmente implica usar la API de Printful para crear un "draft order"
    // y obtener una URL de checkout.

    alert('Simulando redirección al checkout de Printful...');
    // window.location.href = 'URL_DEL_CHECKOUT_DE_PRINTFUL';
  };

  if (cartItems.length === 0) {
    return <div className={styles.emptyCheckout}>El carrito está vacío.</div>;
  }

  return (
    <div className={styles.checkout}>
      <h2>Checkout</h2>
      <div className={styles.summary}>
        <h3>Resumen del Pedido</h3>
        <ul className={styles.itemList}>
          {cartItems.map((item) => (
            <li key={item.product.id} className={styles.item}>
              {item.product.name} ({item.quantity} x ${item.product.price.toFixed(2)}) = $
              {(item.quantity * item.product.price).toFixed(2)}
            </li>
          ))}
        </ul>
        <div className={styles.total}>
          <strong>Total: ${cartTotal.toFixed(2)}</strong>
        </div>
      </div>
      <button className={styles.proceedButton} onClick={handleProceedToCheckout}>
        Proceder al Checkout
      </button>
      {/* Podrías añadir aquí información sobre el envío y el pago (gestionado por Printful) */}
    </div>
  );
};

export default CheckoutPage;