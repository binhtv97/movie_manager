import {DetailMovieI, MovieI} from 'src/Store/types/movie';
import {BaseApiResponse} from './BaseApi';

export type GetListMoivelResponse = BaseApiResponse<MovieI[]>;

export type GetMoiveDetailResponse = BaseApiResponse<DetailMovieI>;
