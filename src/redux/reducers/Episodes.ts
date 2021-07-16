import { AnyAction } from "redux";
import { GET_EPISODES } from "@actions/Episodes/actionTypes";

type Info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type Episode = {
  id: number;
  name: string;
  air_date: Date;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
};

export type Episodes = {
  info: Info | null;
  results: Episode[] | null;
  error: string | null;
};

const initialState: Episodes = {
  info: null,
  results: null,
  error: null,
};

const updateState = (
  info: Info,
  results: Episode[],
  error: string
): Episodes => {
  return { info, results, error };
};

const episodeReducer = (state = initialState, action: AnyAction) => {
  const { payload } = action;
  switch (action.type) {
    case GET_EPISODES:
      return updateState(payload.info, payload.results, payload.error);
    default:
      return state;
  }
};

export default episodeReducer;
