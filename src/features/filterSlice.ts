import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
    filterBy: string;
}

const initialState: FilterState = {
    filterBy: 'no-filter'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        switchFilter: (state, action: PayloadAction<string>) => {
            state.filterBy = action.payload;
        }
    }
});

export const { switchFilter } = filterSlice.actions;
export const selectFilterBy = (state: {filterBy: FilterState}) => state.filterBy.filterBy;
export default filterSlice.reducer;