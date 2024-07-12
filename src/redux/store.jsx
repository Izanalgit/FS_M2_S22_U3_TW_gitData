import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice.jsx';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});