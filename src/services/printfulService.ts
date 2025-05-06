import { Product } from '../store/types';

// Simulación de la respuesta de la API de Printful
const SIMULATED_PRINTFUL_PRODUCTS: Product[] = [
  { id: '1', name: 'Camiseta Genial', imageUrl: 'https://via.placeholder.com/150/FF0000', price: 25.99, description: 'Una camiseta genial para gente genial.' },
  { id: '2', name: 'Taza de Café Épica', imageUrl: 'https://via.placeholder.com/150/00FF00', price: 12.50, description: 'La taza perfecta para tu café épico de la mañana.' },
  { id: '3', name: 'Sudadera Cómoda', imageUrl: 'https://via.placeholder.com/150/0000FF', price: 45.00, description: 'Mantente cómodo y con estilo.' },
  { id: '4', name: 'Gorra con Estilo', imageUrl: 'https://via.placeholder.com/150/FFFF00', price: 18.75, description: 'Una gorra para completar tu look.' },
  { id: '5', name: 'Póster Inspirador', imageUrl: 'https://via.placeholder.com/150/00FFFF', price: 9.99, description: 'Un póster para inspirar tu día.' },
];

const printfulService = {
  async getProducts(): Promise<Product[]> {
    // En una implementación real, aquí harías una llamada a la API de Printful
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(SIMULATED_PRINTFUL_PRODUCTS);
      }, 500); // Simula una pequeña latencia de la API
    });
  },

  async getProductById(id: string): Promise<Product | undefined> {
    // En una implementación real, aquí harías una llamada a la API de Printful para obtener un producto por su ID
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(SIMULATED_PRINTFUL_PRODUCTS.find(product => product.id === id));
      }, 300); // Simula una pequeña latencia de la API
    });
  },

  // ... otras funciones para interactuar con la API de Printful (crear pedidos, etc.)
};

export default printfulService;