// import { RootState, AppDispatch } from './../../tech-net/src/redux/store';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./features/cart/cartSlice";
import productReducer from "./features/products/productSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;