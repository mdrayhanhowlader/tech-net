import {configureStore} from "@reduxjs/toolkit";
import CounterReducer from "./features/counter/counterSlice";
import logger from "./middlewares/logger";


const store = configureStore({
    reducer: {
        counter: CounterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    // devTools: true,
});



export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;