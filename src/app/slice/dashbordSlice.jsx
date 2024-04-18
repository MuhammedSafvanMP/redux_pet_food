import { createSlice } from "@reduxjs/toolkit";

const dashbordSlice = createSlice({
    name: 'dashbord',
    initialState: true,
    reducers: {
        setDashBord : ((state, action) =>  action.payload)
    }
})

export const { setDashBord } = dashbordSlice.actions;
export default dashbordSlice.reducer;