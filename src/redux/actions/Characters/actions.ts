import API from "@api";
import { Characters, Character } from "src/redux/reducers/Characters";
import { AppDispatch } from "src/redux/store";

import { GET_CHARACTERS } from "./actionTypes";

const onSuccessFetching = (data: Characters) => {
  return {
    type: GET_CHARACTERS,
    payload: {
      info: data.info,
      results: data.results,
      error: null,
    },
  };
};

const onFailure = (data: Characters) => {
  return {
    type: GET_CHARACTERS,
    payload: {
      info: null,
      results: null,
      error: data.error,
    },
  };
};

export const getCharacters =
  (page: string | null) => async (dispatch: AppDispatch) => {
    try {
      if (page === null) {
        dispatch(
          onFailure({ info: null, results: null, error: "Page number is null" })
        );
        return;
      }
      const data: Characters = await API.getCharacters(page);

      dispatch(onSuccessFetching({ ...data, error: null }));
    } catch {
      dispatch(
        onFailure({ info: null, results: null, error: "Something went wrong" })
      );
    }
  };

export const getCharacter = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const data: Character = await API.getCharacter(id);
    dispatch(onSuccessFetching({ info: null, results: [data], error: null }));
  } catch {
    dispatch(
      onFailure({ info: null, results: null, error: "Something went wrong" })
    );
  }
};
