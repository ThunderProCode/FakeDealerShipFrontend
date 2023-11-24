import { configureStore } from "@reduxjs/toolkit";
import likedCarsReducer from './features/myGarageSlice';
import carsReducer, { fetchCars } from './features/carsSlice';

const initialState = localStorage.getItem('liked-cars')
    ? JSON.parse(localStorage.getItem('liked-cars')!): {};

const store = configureStore({
    reducer: {
        likedCars: likedCarsReducer,
        cars: carsReducer
    },
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production'
})

store.dispatch(fetchCars()); // Fetch cars when the store is created

store.subscribe(() => {
    localStorage.setItem('liked-cars', JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;