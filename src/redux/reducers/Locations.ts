import { AnyAction } from "redux";
import { GET_LOCATIONS } from "@actions/Locations/actionTypes";

type Info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
};

export type Locations = {
  info: Info | null;
  results: Location[] | null;
  error: string | null;
};

const initialState: Locations = {
  info: null,
  results: null,
  error: null,
};

const updateState = (
  info: Info,
  results: Location[],
  error: string
): Locations => {
  return { info, results, error };
};

const episodeReducer = (state = initialState, action: AnyAction) => {
  const { payload } = action;
  switch (action.type) {
    case GET_LOCATIONS:
      return updateState(payload.info, payload.results, payload.error);
    default:
      return state;
  }
};

export default episodeReducer;
