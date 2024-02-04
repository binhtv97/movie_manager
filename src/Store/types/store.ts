// Import Type
import {IApp} from './app';
import {MovieIApp} from './movie';

export interface IInitialState {
  // State
  app: IApp;
  movie: MovieIApp;
}

export interface IError {
  code: number;
  message: string;
}
