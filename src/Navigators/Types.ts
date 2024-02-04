import {ParamListBase} from '@react-navigation/native';
import RouteKey from './RouteKey';
import {MovieI} from 'src/Store/types/movie';
export type KeyAppScreen = keyof typeof RouteKey;
/** Type */

type DetailMovieScreenParams = {
  item: MovieI;
};
export interface AppStackParamList extends ParamListBase {
  /** Params */
  [RouteKey.DetailScreen]: DetailMovieScreenParams;
}

export interface MainTabParamList extends ParamListBase {
  /** Params */
}
