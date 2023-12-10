import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ILoginData } from "../interfaces/ILoginData.interface";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const userToken = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null;

interface authState {
    loading: boolean,
    userToken: string | null,
    error: any | null,
    success: boolean
}

const initialState:authState = {
    loading: false,
    userToken,
    error: null,
    success: false,
}

export const userLogin = createAsyncThunk('auth/login',async (loginData:ILoginData, { rejectWithValue }) => {
    const { username,password } = loginData;
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const { data } = await axios.post(`${BASE_URL}/Authenticate/login`, { username,password }, config);

        localStorage.setItem('userToken', data.userToken);
        return data;

    } catch (error:any) {
        if(error.response && error.response.data.message ) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue(error.message);
        }
    }
})

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.userToken = action.payload.token;
            console.log(action.payload.token);
        })
        .addCase(userLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        });
    }
})


export default userSlice.reducer;