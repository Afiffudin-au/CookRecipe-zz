import { configureStore } from '@reduxjs/toolkit';
import counterReceipeReducer from '../features/counterReceipeSlice';
export default configureStore({
  reducer: {
    receipe: counterReceipeReducer,
  },
});
