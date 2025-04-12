export function compareCart() {
    let cart;
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart === null) {
        cart = { title: [] };
      } else {
        cart = JSON.parse(storedCart);
        if (!cart || !Array.isArray(cart.title)) {
          cart = { title: [] };
        }
      }
    } catch (e) {
      cart = { title: [] };
    }
  
    // Always keep storage updated
    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
  }
  
  export function addToCart(title) {
    const cart = compareCart();
  
    // Already in list?
    const found = cart.title.includes(title);
  
    if (!found) {
      if (cart.title.length < 2) {
        cart.title.push(title);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Added:", title);
      } else {
        alert("You can only compare two items at a time.");
      }
    } else {
      console.log("Already added:", title);
    }
  }
  
  export function removeFromCart(title) {
    const cart = compareCart();
  
    const index = cart.title.indexOf(title);
    if (index !== -1) {
      cart.title.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log("Removed:", title);
    } else {
      console.log("Item not found in cart:", title);
    }
  }
  export function clearCart() {
    let cart=localStorage.getItem("cart");
    if (cart === null) {
      console.log("Cart is already empty");
      return;
    }
    cart = { title: [] };
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart cleared");
  }
  