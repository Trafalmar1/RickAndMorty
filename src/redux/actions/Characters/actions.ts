import API from "@api";
import { Characters, Character } from "src/redux/reducers/Characters";
import { AppDispatch } from "src/redux/store";

import { GET_CHARACTERS, CHARACTER_LOADING } from "./actionTypes";

const onSuccessFetching = (data: Characters) => {
  return {
    type: GET_CHARACTERS,
    payload: {
      info: data.info,
      results: data.results,
      error: null,
      loading: false,
    },
  };
};

const onFailure = (error: string) => {
  return {
    type: CHARACTER_LOADING,
    payload: {
      error,
      loading: false,
    },
  };
};

const onLoading = () => {
  return {
    type: CHARACTER_LOADING,
    payload: {
      loading: true,
    },
  };
};

export const getCharacters =
  (params: string | null) => async (dispatch: AppDispatch) => {
    try {
      if (params === null) {
        dispatch(onFailure("Params are null"));
        return;
      }
      const data: Characters = await API.getCharacters(params);
      dispatch(onLoading());
      setTimeout(() => {
        dispatch(onSuccessFetching({ ...data, error: null }));
      }, 500);
    } catch {
      dispatch(onFailure("Something went wrong"));
    }
  };

export const getCharacter = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const data: Character = await API.getCharacter(id);
    dispatch(onSuccessFetching({ info: null, results: [data], error: null }));
  } catch {
    dispatch(onFailure("Something went wrong"));
  }
};
