// src/services/api.js
import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

const api = axios.create({
  baseURL: BASE_URL,
});

export const register = async () => {
  try {
    const response = await api.post('/register');
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

export const fetchProducts = async (company, category, top = 10, minPrice = 0, maxPrice = 10000) => {
  try {
    const response = await api.get(`/companies/${company}/categories/${category}/products`, {
      params: { top, minPrice, maxPrice },
    });
    return response.data;
  } catch (error) {
    console.error('Fetching products failed:', error);
    throw error;
  }
};

export const fetchProductDetails = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Fetching product details failed:', error);
    throw error;
  }
};

