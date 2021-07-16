import axios from "./AxiosSetup";

export const getLocations = (params?: string) => {
  return axios.get(`/location/${params}`).then((res) => {
    return res.data;
  });
};
