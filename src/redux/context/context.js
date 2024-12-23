import { createSlice } from '@reduxjs/toolkit';

const context = createSlice({
  name: 'context',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = context.actions;

export default context.reducer;
