export const _fetch = async (url: string | URL | Request, options?: RequestInit): Promise<Response> => {
  return fetch(url, options);
};
