export interface MovieIApp {
  data: MovieI[];
  page: number;
}

export interface MovieI {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface ProductionCompaniesI {
  id: number;
  logo_path: string;
  name: string;
  origin_country?: string;
}

export interface DetailMovieI extends MovieI {
  revenue: number;
  production_companies: ProductionCompaniesI[];
  homepage: string;
  runtime: number;
  tagline: string;
}
