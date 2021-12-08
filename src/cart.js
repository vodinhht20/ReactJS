export const getCartItems = () => {
    const cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    return cartItems;
};
export const setCartItems = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
};