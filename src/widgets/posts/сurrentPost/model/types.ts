import { Post } from "../../../../app/types/posts";

export enum CurrentPostActionTypes {
  FETCH_CURRENT_POST = "FETCH_CURRENT_POST",
  FETCH_CURRENT_POST_SUCCESS = "FETCH_CURRENT_POST_SUCCESS",
  FETCH_CURRENT_POST_ERROR = "FETCH_CURRENT_POST_ERROR",
}

interface FetchCurrentPostAction {
  type: CurrentPostActionTypes.FETCH_CURRENT_POST;
}

interface FetchCurrentPostSuccessAction {
  type: CurrentPostActionTypes.FETCH_CURRENT_POST_SUCCESS;
  payload: Post;
}

interface FetchCurrentPostErrorAction {
  type: CurrentPostActionTypes.FETCH_CURRENT_POST_ERROR;
  payload: string;
}

export type PostsAction =
  | FetchCurrentPostAction
  | FetchCurrentPostSuccessAction
  | FetchCurrentPostErrorAction;
