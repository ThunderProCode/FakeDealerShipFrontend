import { createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { ICar } from '../interfaces/ICar.Interface';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchCars = createAsyncThunk('cars/fetchCars',async () => {
    const response = await axios.get(`${BASE_URL}/Cars`);
    return response.data as ICar[];
});

const carsSlice = createSlice({
    name: 'cars',
    initialState: { data:[], status: 'idle', error: null } as {data: ICar[]; status: string; error:any},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCars.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCars.fulfilled, (state,action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchCars.rejected,(state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default carsSlice.reducer;