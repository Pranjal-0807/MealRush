import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (itemIndex === -1) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        state.items[itemIndex].quantity += 1;
      }
    },

    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       const existingItemIndex = state.items.findIndex(
//         (item) => item.id === action.payload.id
//       );

//       if (existingItemIndex >= 0) {
//         // If the item exists, increment its quantity
//         state.items[existingItemIndex].quantity += 1;
//       } else {
//         // If the item doesn't exist, add it to the cart with quantity 1
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeItem: (state, action) => {
//       const existingItemIndex = state.items.findIndex(
//         (item) => item.id === action.payload.id
//       );

//       if (
//         existingItemIndex >= 0 &&
//         state.items[existingItemIndex].quantity > 1
//       ) {
//         // If the item exists and quantity > 1, decrement the quantity
//         state.items[existingItemIndex].quantity -= 1;
//       } else {
//         // If quantity is 1, remove the item from the cart
//         state.items.splice(existingItemIndex, 1);
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",

//   initialState: {
//     items: [],
//   },

//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeItem: (state) => {
//       state.items.pop();
//     },
//     clearCart: (state) => {
//       state.items.length = 0;
//     },
//   },
// });
// export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;
// export const {addItem,removeItem,clearCart} = cartSlice.actions;

// export default cartSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",

//   initialState: {
//     items: [],
//   },

//   reducers: {
//     addItem: (state, action) => {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingItem) {
//         existingItem.quantity += 1; // If item exists, increase quantity
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 }); // Else add item with quantity 1
//       }
//     },
//     removeItem: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload.id); // Remove item by id
//     },
//     clearCart: (state) => {
//       state.items = []; // Empty the cart
//     },
//   },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;
