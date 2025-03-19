import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../apiComponents/api-products';
import { getCachedProducts, cacheProducts } from '../cacheComponents/cache-products';

const MenuButton = () => {
  const navigate = useNavigate();

  const handleMenuOpen = async () => {
    let data = getCachedProducts();
    if (!data) {
      data = await fetchProducts();
      if (data) cacheProducts(data);
    }
    navigate('/menu');
  };

  return (
    <a onClick={handleMenuOpen} style={{ cursor: 'pointer' }}>
      Menu
    </a>
  );
};

export default MenuButton;
