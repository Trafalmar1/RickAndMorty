import API from "@api";
import { Episodes } from "@redux/reducers/Episodes";
import { AppDispatch } from "@redux/store";

import { GET_EPISODES } from "./actionTypes";

const onSuccessFetching = (data: Episodes) => {
  return {
    type: GET_EPISODES,
    payload: {
      info: data.info,
      results: data.results,
      error: null,
    },
  };
};

const onFailure = (data: Episodes) => {
  return {
    type: GET_EPISODES,
    payload: {
      info: null,
      results: null,
      error: data.error,
    },
  };
};

export const getEpisodes =
  (page: string | null) => async (dispatch: AppDispatch) => {
    try {
      if (page === null) {
        dispatch(
          onFailure({ info: null, results: null, error: "Page number is null" })
        );
        return;
      }
      const data: Episodes = await API.getEpisodes(page);

      dispatch(onSuccessFetching({ ...data, error: null }));
    } catch {
      dispatch(
        onFailure({ info: null, results: null, error: "Something went wrong" })
      );
    }
  };
