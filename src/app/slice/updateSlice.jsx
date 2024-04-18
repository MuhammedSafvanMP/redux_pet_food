import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    price: '',
    title: '',
    category: '',
    image: '',
};

const updateSlice = createSlice({
    name: 'update',
    initialState,
    reducers: {
        setPrice: (state, action) => {
            state.price = action.payload; 
        },
        setTitle: (state, action) => {
            state.title = action.payload; 
        },
        setCategory: (state, action) => {
            state.category = action.payload; 
        },
        setImage: (state, action) => {
            state.image = action.payload; 
        }
    }
});

export const { setPrice, setTitle, setCategory, setImage } = updateSlice.actions;
export default updateSlice.reducer;
