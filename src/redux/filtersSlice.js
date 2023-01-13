import { createSlice } from '@reduxjs/toolkit';

export const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterValue(state, action) {
      return action.payload;
    },
  },
});

export const { filterValue } = filterSlise.actions;
export const filterReducer = filterSlise.reducer;
