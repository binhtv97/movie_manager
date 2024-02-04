import {IInitialState} from '../types';
import {MovieI} from '../types/movie';

export const getFavories = (state: IInitialState): MovieI[] =>
  state.app.favories;
