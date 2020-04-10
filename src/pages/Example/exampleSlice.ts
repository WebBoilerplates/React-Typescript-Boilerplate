import { createSlice } from '@reduxjs/toolkit';

type Action = { payload?: any; type: string } | any;

export const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    value: process.env.REACT_APP_HELLO,
  },
  reducers: {
    changeToggle: (state): void => {
      state.value = state.value === 'WORLD' ? 'HELLO' : 'WORLD';
    },
  },
});

export const { changeToggle } = exampleSlice.actions;

export const changeToggleAsync = (): Action => (dispatch: any): void => {
  setTimeout(() => {
    dispatch(changeToggle());
  }, 1000);
};

export const exampleCount = (state: any): string => state.example.value;

export default exampleSlice.reducer;
