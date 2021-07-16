import { AnyAction } from "redux";
import { GET_CHARACTERS } from "@actions/Characters/actionTypes";

type Info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
};

export type Characters = {
  info: Info | null;
  results: Character[] | null;
  error: string | null;
};

const initialState: Characters = {
  info: null,
  results: null,
  error: null,
};

const updateState = (
  info: Info,
  results: Character[],
  error: string
): Characters => {
  return { info, results, error };
};

const characterReducer = (state = initialState, action: AnyAction) => {
  const { payload } = action;
  switch (action.type) {
    case GET_CHARACTERS:
      return updateState(payload.info, payload.results, payload.error);
    default:
      return state;
  }
};

export default characterReducer;
