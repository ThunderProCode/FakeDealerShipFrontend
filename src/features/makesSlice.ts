import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchMakes = createAsyncThunk('makes/fetchMakes', async () => {
    const response = await axios.get(`${BASE_URL}/Cars/makes`);
    return response.data as string[];
})

const makesSlice = createSlice({
    name:'makes',
    initialState: { data:[], status: 'idle', error: null } as { data: string[]; status: string; error:any },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMakes.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMakes.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload
            })
            .addCase(fetchMakes.rejected,(state,action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default makesSlice.reducer;
