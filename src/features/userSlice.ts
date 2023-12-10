import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ILoginData } from "../interfaces/ILoginData.interface";
import { IUserData } from "../interfaces/IUserData";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const userData = localStorage.getItem('userData') ? localStorage.getItem('userData') : null;

interface authState {
    loading: boolean,
    userData: string | null,
    error: any | null,
    success: boolean
}

const initialState:authState = {
    loading: false,
    userData,
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
        console.log(data);
        localStorage.setItem('userData', JSON.stringify(data));
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
            state.userData = action.payload;
        })
        .addCase(userLogin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        });
    }
})


export default userSlice.reducer;