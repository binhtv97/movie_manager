import {IResponseCode, IToken, ITokenType} from './interface';

export const TOKEN: IToken = {
  token: 'TOKEN_KEY',
  refreshToken: 'REFRESH_TOKEN_KEY',
  deviceToken: 'DEVICE_TOKEN_KEY',
};

export const DEFAULT_SHOW_TOAST = 3000;

export const CURRENT_ENV = 'CURRENT_ENV';

export const AUTO_LOGIN = {
  rememberMe: 'REMEMBER_ME',
  keyBiometrics: 'KEY_BIOMETRICS',
} as const;

export const RESPONSE_CODE: IResponseCode = {
  success: [200, 201],
  unauthorized: [401, 403],
  badRequest: [400, 404],
};

export const TOKEN_TYPE: ITokenType = {
  Bearer: 'Bearer',
  Basic: 'Basic',
};

export const DEFAULT_RADIUS_BLUR = 5;
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_PAGE = 1;

export const DEFAULT_OPACITY = 0.7;
export const SHADOW_OPACITY = 0.2;
export const DEFAULT_INTERVAL_MS = 1000;
export const AXIOS_TIMEOUT = 6000;
