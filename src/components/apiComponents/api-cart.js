// src/apiComponents/api-cart.js

const API_URL = 'https://yummytummies-backend.onrender.com';

export const fetchCartItems = async (setCart, setLoading, setPopupMessage = () => {}) => {
  try {
      setLoading(true);
      const token = localStorage.getItem("accessToken");

      const response = await fetch(`${API_URL}/api/cart`, {
          method: "GET",
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
          },
      });

      if (response.status === 401) {
          alert("You are not logged in. Please sign in to view your cart.");
          setLoading(false);
          return;
      }

      const result = await response.json();

      if (!result.success || result.message) {
          setPopupMessage(result.message || "Failed to fetch cart. Please try again later.");
          setLoading(false);
          return;
      }

      //get the user_id from the response from getting the cart from backend
      const user_id = result.user_id;
      
      //save the user_id in local storage
      localStorage.setItem("user_id", user_id);

      const cartItems = result.cart;

      // Fetch product details for each cart item
      const productDetails = await Promise.all(
          Object.keys(cartItems).map(async (productId) => {
              try {
                  const productResponse = await fetch(`${API_URL}/api/product/${productId}`);
                  const product = await productResponse.json();
                  return {
                      id: product.id,
                      name: product.prodName,
                      prodPrice: product.prodPrice || 0,
                      image: product.image || "default-image.jpg",
                      quantity: cartItems[productId] || 1,
                  };
              } catch (error) {
                  console.error(`Error fetching product ${productId}:`, error);
                  return null;
              }
          })
      );

      // Filter out any failed product fetches
      const filteredProducts = productDetails.filter((item) => item !== null);

      setCart(filteredProducts); // ✅ Update cart state
      setLoading(false);
  } catch (error) {
      console.error("Error fetching cart:", error);
      setPopupMessage("Failed to load cart items.");
      setLoading(false);
  }
};




  //adding to the cart
  export const addToCart = async (productId, quantity) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) return { success: false, message: "User not authenticated" };
  
      const response = await fetch(`${API_URL}/api/cart/add`, { // Make sure the endpoint matches Django
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ productId, quantity }), // Ensure correct payload structure
      });
  
      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error adding to cart:", error);
      return { success: false, message: "Error adding to cart" };
    }
  };