import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {MovieI, MovieIApp} from '../types/movie';

export const movieAppState: MovieIApp = {
  data: [],
  page: 1,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState: movieAppState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getListMovie: (_, action: PayloadAction<number>) => {},
    setListMovie: (state, action: PayloadAction<MovieI[]>) => {
      state.data = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getMore: (_, action: PayloadAction<number>) => {},
    addListMovie: (state, action: PayloadAction<MovieI[]>) => {
      const data = [...state.data];
      const newData = data.concat(action.payload);
      state.data = newData;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setRefresh: (state, action: PayloadAction) => {
      state.data = [];
      state.page = 1;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onRefresh: (_, action: PayloadAction) => {},
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
