import React, { useEffect, useState, useRef } from "react";

const Checkout = () => {
  const [stripe, setStripe] = useState(null);
  const [elements, setElements] = useState(null);
  const [cardElement, setCardElement] = useState(null); // Store the card element reference
  const cardElementRef = useRef(null);

  const [paymentMethod, setPaymentMethod] = useState("card"); // "card" or "cash"
  const [deliveryMethod, setDeliveryMethod] = useState("collect"); // "collect" or "delivery"
  const [deliveryFee, setDeliveryFee] = useState(50); // Example delivery fee (R50)

  // Subtotal and total calculation based on delivery
  const subtotal = parseFloat(localStorage.getItem("cartSubtotal")) || 0;
  const totalPrice = deliveryMethod === "delivery" ? subtotal + deliveryFee : subtotal; // Adjust total

  useEffect(() => {
    // Load Stripe.js script
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/";
    script.onload = () => {
      const stripeInstance = window.Stripe('pk_test_51Q7V6fP3W3PNlhUH4jkTVZDpXEN9S341jGJJyl2paPsPZEn8frJp4PKH0lyrzz3cE2gyThoKTlbjCCCENQvHgPye00CWjmk9L5');
      const elementsInstance = stripeInstance.elements();
      setStripe(stripeInstance);
      setElements(elementsInstance);
    };
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  useEffect(() => {
    // Clean up previous card element if it exists when switching to cash
    if (cardElement) {
      cardElement.destroy();
      setCardElement(null);
    }

    // Re-create card element when switching to "card" payment method
    if (stripe && elements && paymentMethod === "card") {
      const newCardElement = elements.create("card");
      newCardElement.mount(cardElementRef.current);
      setCardElement(newCardElement);
    }
  }, [stripe, elements, paymentMethod]); // Re-run this effect when paymentMethod changes

  const handleCheckout = async (event) => {
    event.preventDefault();

    // If payment is via cash, simply alert and don't proceed
    if (paymentMethod === "cash") {
      alert("Order placed! Thank you for your order.");
      // Redirect to menu page after cash order
      window.location.replace("/menu");
      return;
    }

    // If payment is via card, proceed with Stripe payment process
    if (paymentMethod === "card" && (!stripe || !elements)) {
      console.error("Stripe has not loaded yet.");
      return;
    }

    let stripeToken = null;
    if (paymentMethod === "card") {
      const { token, error } = await stripe.createToken(cardElement);
      if (error) {
        document.getElementById("card-errors").textContent = error.message;
        return;
      }
      stripeToken = token.id;
    }

    // Prepare form data for the backend
    const formData = new FormData();
    if (stripeToken) formData.append("stripeToken", stripeToken);
    formData.append("totalPurchaseTotal", totalPrice);
    formData.append("paymentMethod", paymentMethod);
    formData.append("deliveryMethod", deliveryMethod);

    const API_URL = 'https://yummytummies-backend.onrender.com';

    // Send data to the backend for processing
    try {
      const response = await fetch(`${API_URL}/api/checkout`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        alert("Payment successful");
        console.log("Payment successful:", data);
        // Redirect to menu page after successful payment
        window.location.replace("/menu");
      } else {
        console.error("Payment failed:", data);
      }
    } catch (error) {
      console.error("Error during payment processing:", error);
    }
  };

  return (
    <div>
      <h1 style={{ color: "black" }}>Checkout</h1>

      {/* Payment Method Selection */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ color: "black", display: "block", marginBottom: "10px" }}>
          <input
            type="radio"
            name="paymentMethod"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
          />
          Pay with Card
        </label>

        <label style={{ color: "black", display: "block", marginBottom: "10px" }}>
          <input
            type="radio"
            name="paymentMethod"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={() => setPaymentMethod("cash")}
          />
          Pay with Cash
        </label>
      </div>

      {/* Delivery Method Selection */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ color: "black", display: "block", marginBottom: "10px" }}>
          <input
            type="radio"
            name="deliveryMethod"
            value="collect"
            checked={deliveryMethod === "collect"}
            onChange={() => setDeliveryMethod("collect")}
          />
          Collect (No Delivery Fee)
        </label>

        <label style={{ color: "black", display: "block", marginBottom: "10px" }}>
          <input
            type="radio"
            name="deliveryMethod"
            value="delivery"
            checked={deliveryMethod === "delivery"}
            onChange={() => setDeliveryMethod("delivery")}
          />
          Delivery (+R{deliveryFee})
        </label>
      </div>

      <h3 style={{ color: "black" }}>Total Price: R{totalPrice.toFixed(2)}</h3>

      <form id="payment-form" onSubmit={handleCheckout}>
        {/* Show Card Element only if Card Payment is selected */}
        {paymentMethod === "card" && (
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="card-element" style={{ color: "black", display: "block", marginBottom: "5px" }}>
              Credit or Debit Card
            </label>
            <div ref={cardElementRef} id="card-element"></div>
            <div id="card-errors" role="alert" style={{ color: "red", marginTop: "5px" }}></div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
