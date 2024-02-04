import {IInitialState} from '../types';
import {MovieI, MovieIApp} from '../types/movie';

export const getMovieApp = (state: IInitialState): MovieIApp => state.movie;

export const getMovie = (state: IInitialState): MovieI[] => state.movie.data;

export const getPage = (state: IInitialState): number => state.movie.page;
