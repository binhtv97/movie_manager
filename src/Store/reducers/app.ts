import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IApp} from '../types';
import {MovieI} from '../types/movie';

export const appInitialState: IApp = {
  favories: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState: appInitialState,
  reducers: {
    addFavor: (state, action: PayloadAction<MovieI>) => {
      const data = [...state.favories];
      const isExist = data.find(item => item.id === action.payload.id);
      if (!isExist) {
        data.push(action.payload);
        state.favories = data;
      }
    },
    removeFavor: (state, action: PayloadAction<number>) => {
      const data = [...state.favories];
      const index = data.findIndex(item => item.id === action.payload);
      data.splice(index, 1);
      state.favories = data;
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
