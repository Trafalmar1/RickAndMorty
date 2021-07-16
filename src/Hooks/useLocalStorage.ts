import { useCallback } from "react";

export const useLocalStorage = () => {
  const save = (key: string, value: any) => {
    const str_value = JSON.stringify(value);
    localStorage.setItem(key, str_value);
  };

  const remove = (key: string) => {
    localStorage.removeItem(key);
  };

  const get = useCallback((key: string) => {
    return localStorage.getItem(key);
  }, []);

  return { save, remove, get };
};
