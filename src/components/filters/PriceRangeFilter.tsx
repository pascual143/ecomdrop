import React, { useState } from "react";
import styles from "./PriceRangeFilter.module.css"; 

interface PriceRangeFilterProps {
    onFilter: (minPrice: number | null, maxPrice: number | null) => void;
}

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({ onFilter }) => {
    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);

    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(event.target.value === '' ? null : parseFloat(event.target.value));
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(event.target.value === '' ? null : parseFloat(event.target.value));
    };

    const handleApplyFilter = () => {
        onFilter(minPrice, maxPrice);
    };

    return (
        <div className={styles.priceRangeFilter}>
          <h3>Filtrar por Precio</h3>
          <div className={styles.inputs}>
            <label htmlFor="minPrice">Min:</label>
            <input
              type="number"
              id="minPrice"
              placeholder="Min"
              onChange={handleMinChange}
            />
            <label htmlFor="maxPrice">Max:</label>
            <input
              type="number"
              id="maxPrice"
              placeholder="Max"
              onChange={handleMaxChange}
            />
          </div>
          <button onClick={handleApplyFilter}>Aplicar</button>
        </div>
      );
    };
    
    export default PriceRangeFilter;