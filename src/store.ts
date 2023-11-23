import { configureStore } from "@reduxjs/toolkit";
import likedCarsReducer from './features/myGarageSlice';

const initialState = localStorage.getItem('liked-cars')
    ? JSON.parse(localStorage.getItem('liked-cars')!): {};

const store = configureStore({
    reducer: {
        likedCars: likedCarsReducer
    },
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production'
})

store.subscribe(() => {
    localStorage.setItem('liked-cars', JSON.stringify(store.getState()));
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;