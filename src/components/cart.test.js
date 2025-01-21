import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./cart"; // Adjust this path as needed
import { useCart } from "../cart-context"; // Adjust this path as needed
import { BrowserRouter } from "react-router-dom";

// Mock the useCart hook to simulate cart state
jest.mock("../cart-context", () => ({
  useCart: jest.fn(),
}));

// Mock the navigate function from useNavigate
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("Cart Component", () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    // Reset the mock navigate function before each test
    mockNavigate.mockReset();
    // Mock useNavigate to return our mock function
    jest.mock("react-router-dom", () => ({
      useNavigate: () => mockNavigate,
    }));
  });

  test("renders cart items and checkout button", () => {
    // Mock the cart context state
    useCart.mockReturnValue({
      cart: [
        { id: 1, name: "Chicken Ramen", price: 80, quantity: 2 },
        { id: 2, name: "Vegetarian Sushi", price: 60, quantity: 1 },
      ],
      setCart: jest.fn(),
    });

    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );

    // Check if items are rendered
    expect(screen.getByText(/Chicken Ramen/i)).toBeInTheDocument();
    expect(screen.getByText(/Vegetarian Sushi/i)).toBeInTheDocument();

    // Check if checkout button is rendered
    expect(screen.getByText(/Checkout/i)).toBeInTheDocument();
  });

  test("navigates to checkout when checkout button is clicked", () => {
    useCart.mockReturnValue({
      cart: [
        { id: 1, name: "Chicken Ramen", price: 80, quantity: 2 },
      ],
      setCart: jest.fn(),
    });

    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );

    const checkoutButton = screen.getByText(/Checkout/i);
    fireEvent.click(checkoutButton);

    // Ensure navigate was called with correct URL
    expect(mockNavigate).toHaveBeenCalledWith("/checkout");
  });

  test("shows alert if cart is empty and checkout is clicked", () => {
    window.alert = jest.fn(); // Mock alert

    useCart.mockReturnValue({
      cart: [],
      setCart: jest.fn(),
    });

    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );

    const checkoutButton = screen.getByText(/Checkout/i);
    fireEvent.click(checkoutButton);

    // Check if alert is called
    expect(window.alert).toHaveBeenCalledWith("Your cart is empty!");
  });
});
