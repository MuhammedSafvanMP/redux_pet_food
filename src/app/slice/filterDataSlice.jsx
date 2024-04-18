import { createSlice } from "@reduxjs/toolkit";
import { foodData } from "../../data/data";

const initialState = [...foodData];
const filtererDataSlice = createSlice({
    name: 'filtererData',
    initialState,
    reducers: {
        setFilteredData: (state, action) => {
            return action.payload;  
        }
    }
})


export const { setFilteredData } = filtererDataSlice.actions;
export default filtererDataSlice.reducer;