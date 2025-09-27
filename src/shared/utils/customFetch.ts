import { safeJson } from './safeJson';
import { ApiResponseErrorEnum, ApiResponseType } from '../types';
import { BASE_URL } from '../consts';

export const customFetch = async <ResponsePayload>(
  path: string,
  init: RequestInit = {},
): Promise<ApiResponseType<ResponsePayload>> => {
  const customInit: RequestInit = {
    method: 'GET',
    headers: {
      ContentType: 'application/json',
    },
  };

  if (init?.headers) {
    customInit.headers = { ...customInit.headers, ...init.headers };
  }

  if (init?.body) {
    customInit.body = safeJson.stringify(init);
  }

  if (init?.body && !init.method) {
    customInit.method = 'POST';
  }

  const response = await fetch(`${BASE_URL}/${path}`, customInit);

  if (!response.ok) {
    let error: ApiResponseErrorEnum;

    switch (response.status) {
      case ApiResponseErrorEnum.notFound: {
        error = ApiResponseErrorEnum.notFound;
        break;
      }
      default: {
        error = ApiResponseErrorEnum.unknownError;
      }
    }

    return { ok: false, data: null, error };
  }

  const jsonData: ResponsePayload = await response.json();

  return {
    ok: true,
    error: null,
    data: jsonData,
  };
};
