export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface PostsState {
  loading: boolean;
  error: null | string;
  currentPage: number;
  posts: Post[];
  totalPostsCount: number;
  currentPost?: Post;
}

export enum PostsActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
}

interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: Post[];
  totalPostsCount: number;
}

interface FetchPostsErrorAction {
  type: PostsActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

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
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction
  | FetchCurrentPostAction
  | FetchCurrentPostSuccessAction
  | FetchCurrentPostErrorAction;
