export const safeJson = {
  parse<T>(value: string) {
    try {
      return JSON.parse(value) as T;
    } catch (err) {
      console.error(err);
      return {};
    }
  },

  stringify(value: unknown) {
    try {
      return JSON.stringify(value);
    } catch (err) {
      console.error(err);
      return '';
    }
  },
};
