import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lastVisited: [] 
};

const visitedNewsSlice = createSlice({
  name: 'visitedNews',
  initialState,
  reducers: {
    addVisitedNews(state, action) {
      const title = action.payload;

      
      state.lastVisited = state.lastVisited.filter(t => t !== title);

      
      state.lastVisited.unshift(title);

      
      if (state.lastVisited.length > 10) {
        state.lastVisited.pop();
      }
    },
    clearVisitedNews(state) {
      state.lastVisited = [];
    }
  }
});


export const selectVisitedNews = (state) => state.visitedNews.lastVisited;

export const { addVisitedNews, clearVisitedNews } = visitedNewsSlice.actions;

export default visitedNewsSlice.reducer;
