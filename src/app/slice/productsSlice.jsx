import { createSlice } from "@reduxjs/toolkit";
import { foodData } from "../../data/data";

const initialState = [...foodData];  
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            return [...action.payload];  
        },
        removeProduct: (state, action) => {
            return state.filter((product) => product.id!== action.payload);
        }

    }
});

export const {removeProduct, setProducts } = productsSlice.actions;
export default productsSlice.reducer;
