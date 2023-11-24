import { createSlice, PayloadAction } from '@reduxjs/toolkit' ;

interface LikedCarsState {
    likedCars: number[];
}

const initialState: LikedCarsState = {
    likedCars: []
}

const likedCarsSlice = createSlice({
    name: 'myGarage',
    initialState,
    reducers: {
        addLikedCar: (state, action: PayloadAction<number>) => {
            state.likedCars.push(action.payload);
        },
        removeLikedCar: (state, action: PayloadAction<number>) => {
            state.likedCars = state.likedCars.filter((cardId) => cardId !== action.payload);
        }
    },
});

export const { addLikedCar, removeLikedCar } = likedCarsSlice.actions;
export const selectLikedCars = (state: {likedCars: LikedCarsState}) => state.likedCars.likedCars;

export default likedCarsSlice.reducer;