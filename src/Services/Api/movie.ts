import {GetListMoivelResponse} from 'src/Constanst/interface/api/TheMovie';
import {getRequest} from '../Networking';
import {MOVE_API} from './api';

class MovieAPI {
  public getListMoive = (page: number) => {
    return getRequest<GetListMoivelResponse>({
      url: `${MOVE_API.getListMovie}?page=${page}`,
    });
  };
  public searchMovie = ({name, page}: {name: string; page: number}) => {
    return getRequest<GetListMoivelResponse>({
      url: `${MOVE_API.searchMovie}?query=${name}&page=${page}`,
    });
  };
  public movieDetail = (id: number) => {
    return getRequest<GetListMoivelResponse>({
      url: `${MOVE_API.detailMovie}/${id}`,
    });
  };
}

export const MovieApi = new MovieAPI();
