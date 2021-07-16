import axios from "./AxiosSetup";

export const getCharacters = (params?: string) => {
  return axios.get(`/character/${params}`).then((res) => {
    return res.data;
  });
};

export const getCharacter = (id: string) => {
  return axios.get(`/character/${id}`).then((res) => {
    return res.data;
  });
};
