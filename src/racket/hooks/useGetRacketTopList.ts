import { getTopRackets } from '../utils/getTopRackets';

export const useGetRacketTopList = () => {
  return { data: getTopRackets() };
};
