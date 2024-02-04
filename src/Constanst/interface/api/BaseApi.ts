export interface BaseErrorResponse {
  code: number;
  message: string;
  details: any;
  validationErrors: any;
}
export interface BaseLocation {
  latitude: number;
  longitude: number;
}
export interface BasePagination {
  page: number;
  pageSize: number;
  radiusKm: number;
}
export interface BaseApiResponse<T> {
  results: T;
  targetUrl: any;
  success: boolean;
  error: BaseErrorResponse | null;
  unAuthorizedRequest: boolean;
  __abp: boolean;
  data: T;
}
export interface BaseBoolean {
  success: boolean;
}

export interface BaseInfoCountry {
  callingCode: string;
  countryCode: string;
}

export interface BaseFile {
  name: string;
  type: string;
  uri: string;
}
