export const asyncLocalStorage = {
  get: (key: string): Promise<any> => {
    return Promise.resolve().then(() => {
      return localStorage.getItem(key);
    });
  },
  set: (key: string, value: string): Promise<void> => {
    return Promise.resolve().then(() => {
      localStorage.setItem(key, value);
    });
  },
  clear: (): Promise<void> => {
    return Promise.resolve().then(() => {
      localStorage.clear();
    });
  },
};
