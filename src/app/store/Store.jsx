import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "../slice/userSlice";
import productsSlice from "../slice/productsSlice";
// import loginSlice from "../slice/loginSlice";
import filterDataSlice from "../slice/filterDataSlice";
import searchSlice from "../slice/searchSlice";
// import dashbordSlice from "../slice/dashbordSlice";
import updateSlice from "../slice/updateSlice";

const store = configureStore({
    reducer: {
        // user: userSlice,
        // login: loginSlice,
        // dashbord: dashbordSlice,
        products: productsSlice,
        filtererData: filterDataSlice,
        search: searchSlice,
        update: updateSlice,
    },
});

export default store;
