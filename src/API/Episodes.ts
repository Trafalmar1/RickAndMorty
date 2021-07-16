import axios from "./AxiosSetup";

export const getEpisodes = (params?: string) => {
  return axios.get(`/episode/${params}`).then((res) => {
    return res.data;
  });
};
