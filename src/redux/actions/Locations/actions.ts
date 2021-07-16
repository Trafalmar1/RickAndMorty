import API from "@api";
import { Locations } from "@redux/reducers/Locations";
import { AppDispatch } from "@redux/store";

import { GET_LOCATIONS } from "./actionTypes";

const onSuccessFetching = (data: Locations) => {
  return {
    type: GET_LOCATIONS,
    payload: {
      info: data.info,
      results: data.results,
      error: null,
    },
  };
};

const onFailure = (data: Locations) => {
  return {
    type: GET_LOCATIONS,
    payload: {
      info: null,
      results: null,
      error: data.error,
    },
  };
};

export const getLocations =
  (page: string | null) => async (dispatch: AppDispatch) => {
    try {
      if (page === null) {
        dispatch(
          onFailure({ info: null, results: null, error: "Page number is null" })
        );
        return;
      }
      const data: Locations = await API.getLocations(page);

      dispatch(onSuccessFetching({ ...data, error: null }));
    } catch {
      dispatch(
        onFailure({ info: null, results: null, error: "Something went wrong" })
      );
    }
  };
