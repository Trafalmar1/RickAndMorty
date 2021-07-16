import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers } from "redux";

import characterReducer from "./reducers/Characters";
import episodeReducer from "./reducers/Episodes";
import locationReducer from "./reducers/Locations";

const rootReducer = combineReducers({
  characterReducer,
  episodeReducer,
  locationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
