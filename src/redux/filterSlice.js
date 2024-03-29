import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
