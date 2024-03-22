import { combineReducers } from "@reduxjs/toolkit";
import { postReducer } from "./postReducer";

export const rootReducer = combineReducers({
  posts: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
