import React from 'react';
import styles from './LoadingSpinner.module.css'; // Crea este archivo CSS Module

const LoadingSpinner: React.FC = () => {
  return <div className={styles.spinner}></div>;
};

export default LoadingSpinner;