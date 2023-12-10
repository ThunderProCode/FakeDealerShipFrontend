import { configureStore } from "@reduxjs/toolkit";
import likedCarsReducer from './features/myGarageSlice';
import carsReducer, { fetchCars } from './features/carsSlice';
import filterReducer from './features/filterSlice';
import makesReducer, { fetchMakes } from './features/makesSlice';
import userReducer from './features/userSlice';

const initialState = localStorage.getItem('liked-cars')
    ? JSON.parse(localStorage.getItem('liked-cars')!): {};

const store = configureStore({
    reducer: {
        likedCars: likedCarsReducer,
        cars: carsReducer,
        filterBy: filterReducer,
        makes: makesReducer,
        auth: userReducer,
    },
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production'
})

store.dispatch(fetchCars()); // Fetch cars when the store is created
store.dispatch(fetchMakes()); // Fetch makes when the store is created

store.subscribe(() => {
    localStorage.setItem('liked-cars', JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;