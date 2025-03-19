const API_URL = 'https://ecom-project-qt91.onrender.com/api';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/product`, {
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) throw new Error('Failed to fetch products');
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return null; // Handle errors gracefully
  }
};
