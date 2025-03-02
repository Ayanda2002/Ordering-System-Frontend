import React, { useEffect, useState, useRef } from "react";

const Checkout = () => {
  const [stripe, setStripe] = useState(null);
  const [elements, setElements] = useState(null);
  const [cardElement, setCardElement] = useState(null); // Store the card element reference
  const cardElementRef = useRef(null);

  const [paymentMethod, setPaymentMethod] = useState("card"); // "card" or "cash"
  const [deliveryMethod, setDeliveryMethod] = useState("collect"); // "collect" or "delivery"
  const [deliveryFee, setDeliveryFee] = useState(50); // Example delivery fee (R50)
  
  const subtotal = parseFloat(localStorage.getItem("cartSubtotal")) || 0;
  const totalPrice = deliveryMethod === "delivery" ? subtotal + deliveryFee : subtotal; // Adjust total

  useEffect(() => {
    // Load Stripe
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
    if (stripe && elements && paymentMethod === "card" && !cardElement) {
      const newCardElement = elements.create("card");
      newCardElement.mount(cardElementRef.current);
      setCardElement(newCardElement);
    }
  }, [stripe, elements, paymentMethod, cardElement]);

  const handleCheckout = async (event) => {
    event.preventDefault();

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

    // Prepare form data
    const formData = new FormData();
    if (stripeToken) formData.append("stripeToken", stripeToken);
    formData.append("totalPurchaseTotal", totalPrice);
    formData.append("paymentMethod", paymentMethod);
    formData.append("deliveryMethod", deliveryMethod);

    // Send request to backend
    try {
      const response = await fetch("http://127.0.0.1:8000/api/checkout", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Payment successful:", data);
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
      <label style={{ color: "black", display: "block", margin: "10px 0" }}>
        <input
          type="radio"
          name="paymentMethod"
          value="card"
          checked={paymentMethod === "card"}
          onChange={() => setPaymentMethod("card")}
        />
        Pay with Card
      </label>

      <label style={{ color: "black", display: "block", margin: "10px 0" }}>
        <input
          type="radio"
          name="paymentMethod"
          value="cash"
          checked={paymentMethod === "cash"}
          onChange={() => setPaymentMethod("cash")}
        />
        Pay with Cash
      </label>

      {/* Delivery Method Selection */}
      <label style={{ color: "black", display: "block", margin: "10px 0" }}>
        <input
          type="radio"
          name="deliveryMethod"
          value="collect"
          checked={deliveryMethod === "collect"}
          onChange={() => setDeliveryMethod("collect")}
        />
        Collect (No Delivery Fee)
      </label>

      <label style={{ color: "black", display: "block", margin: "10px 0" }}>
        <input
          type="radio"
          name="deliveryMethod"
          value="delivery"
          checked={deliveryMethod === "delivery"}
          onChange={() => setDeliveryMethod("delivery")}
        />
        Delivery (+R{deliveryFee})
      </label>

      <h3 style={{ color: "black" }}>Total Price: R{totalPrice.toFixed(2)}</h3>

      <form id="payment-form" onSubmit={handleCheckout}>
        {/* Show Card Element only if Card Payment is selected */}
        {paymentMethod === "card" && (
          <div>
            <label htmlFor="card-element" style={{ color: "black", display: "block", marginBottom: "5px" }}>
              Credit or Debit Card
            </label>
            <div ref={cardElementRef} id="card-element"></div>
            <div id="card-errors" role="alert" style={{ color: "red", marginTop: "5px" }}></div>
          </div>
        )}

        <button type="submit" style={{ marginTop: "15px", padding: "10px", cursor: "pointer" }}>
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default Checkout;
