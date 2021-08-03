import { useCallback } from "react";

export const useLocalStorage = () => {
  const save = useCallback((key: string, value: any) => {
    const str_value = JSON.stringify(value);
    localStorage.setItem(key, str_value);
  }, []);

  const saveString = useCallback((key: string, value: any) => {
    const str_value = value;
    localStorage.setItem(key, str_value);
  }, []);

  const remove = (key: string) => {
    localStorage.removeItem(key);
  };

  const get = useCallback((key: string) => {
    const value = localStorage.getItem(key);
    return value ? value : "";
  }, []);

  return { save, saveString, remove, get };
};
