import { AnyAction } from "redux";
import {
  CHARACTER_LOADING,
  GET_CHARACTERS,
} from "@actions/Characters/actionTypes";

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
  loading?: boolean | null;
};

const initialState: Characters = {
  info: null,
  results: null,
  error: null,
  loading: false,
};

const updateState = (state: Characters, payload: Characters): Characters => {
  return { ...state, ...payload };
};

const characterReducer = (state = initialState, action: AnyAction) => {
  const { payload } = action;
  switch (action.type) {
    case GET_CHARACTERS:
      return updateState(state, payload);
    case CHARACTER_LOADING:
      return updateState(state, payload);
    default:
      return state;
  }
};

export default characterReducer;
