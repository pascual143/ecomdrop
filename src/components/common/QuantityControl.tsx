import React, { useState, useEffect } from 'react';
import styles from './QuantityControl.module.css'; 

interface QuantityControlProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (newValue: number) => void;
}

const QuantityControl: React.FC<QuantityControlProps> = ({ value, min = 1, max, onChange }) => {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const increment = () => {
    if (max === undefined || currentValue < max) {
      const newValue = currentValue + 1;
      setCurrentValue(newValue);
      onChange(newValue);
    }
  };

  const decrement = () => {
    if (currentValue > min) {
      const newValue = currentValue - 1;
      setCurrentValue(newValue);
      onChange(newValue);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue) && newValue >= min && (max === undefined || newValue <= max)) {
      setCurrentValue(newValue);
      onChange(newValue);
    } else if (event.target.value === '') {
      setCurrentValue(0); // Permite borrar y potencialmente manejarlo en el componente padre
      onChange(0);
    }
  };

  return (
    <div className={styles.quantityControl}>
      <button className={styles.button} onClick={decrement}>
        -
      </button>
      <input
        type="number"
        className={styles.input}
        value={currentValue}
        min={min}
        max={max}
        onChange={handleChange}
      />
      <button className={styles.button} onClick={increment}>
        +
      </button>
    </div>
  );
};

export default QuantityControl;