export type ApiResponseType<Data> = {
  data: Data | null;
  error: ApiResponseErrorEnum | null;
  ok: boolean;
};

export enum ApiResponseErrorEnum {
  unknownError = 0,
  notFound = 404,
}
