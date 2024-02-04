import {IInitialState} from './types';

const INITIAL_STATE: IInitialState = {
  app: {
    favories: [],
  },
  movie: {
    page: 1,
    data: [],
  },
};

export default INITIAL_STATE;
