import { configureStore } from '@reduxjs/toolkit';
import visitedNewsReducer from './visitedNewsSlice';

const store = configureStore({
  reducer: {
    visitedNews: visitedNewsReducer,
    
  }
});

export default store;
