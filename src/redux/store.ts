// import { RootState, AppDispatch } from './../../tech-net/src/redux/store';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;