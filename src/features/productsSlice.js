import { createSlice } from '@reduxjs/toolkit';
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';
import product3 from '../assets/product3.jpeg';

const initialState = [
  {
    name: "Product 1",
    price: '$17.00',
    image: product1,
    id: "id1"
  },
  {
    name: "Product 2",
    price: "$18.02",
    image: product2,
    id: "id2"
  },
  {
    name: "Product 3",
    price: "$15.09",
    image: product3,
    id: "id3"
  }
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
