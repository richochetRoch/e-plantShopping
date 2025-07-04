import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    
    addItem: (state, action) => {
       action.payload.cost += 1;
  const { name, image, cost } = action.payload; // Destructure product details from the action payload
  // Check if the item already exists in the cart by comparing names
  state.items.push({ name, image, cost, quantity: 1 });
  const existingItem = state.items.find(item => item.name === name);
  if (existingItem) {
    // If item already exists in the cart, increase its quantity
    existingItem.quantity++;
  } else {
    // If item does not exist, add it to the cart with quantity 1
    state.items.push({ name, image, cost, quantity: 1 });
  }
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

    const handleAddToCart = (product) => {
        console.log('Your message here');
  dispatch(addItem(product)); // Dispatch the action to add the product to the cart (Redux action)
  setAddedToCart((prevState) => ({ // Update the local state to reflect that the product has been added
    ...prevState, // Spread the previous state to retain existing entries
    [product.name]: true, // Set the current product's name as a key with value 'true' to mark it as added
  }));
};


export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
