import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '@pages/Example/exampleSlice';

export default configureStore({
  reducer: {
    example: exampleReducer,
  },
});
