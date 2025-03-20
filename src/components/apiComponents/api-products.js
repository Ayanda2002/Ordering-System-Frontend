const API_URL = 'https://yummytummies.onrender.com';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/api/product`, {
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error('Failed to fetch products');
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return null; // Handle errors gracefully
  }
};
