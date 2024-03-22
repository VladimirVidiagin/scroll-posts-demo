import {
  PostsAction,
  PostsActionTypes,
  CurrentPostActionTypes,
  PostsState,
} from "../../app/types/posts";

const initialState: PostsState = {
  loading: false,
  error: null,
  posts: [],
  currentPage: 1,
  totalPostsCount: 0,
};

export const postReducer = (
  state = initialState,
  action: PostsAction
): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return {
        loading: true,
        error: null,
        currentPage: state.currentPage,
        posts: state.posts,
        totalPostsCount: state.totalPostsCount,
      };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        error: null,
        currentPage: state.currentPage + 1,
        posts: [...state.posts, ...action.payload],
        totalPostsCount: action.totalPostsCount,
      };
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return {
        loading: false,
        error: action.payload,
        currentPage: state.currentPage,
        posts: [],
        totalPostsCount: state.totalPostsCount,
      };
    case CurrentPostActionTypes.FETCH_CURRENT_POST:
      return {
        loading: true,
        error: null,
        currentPage: 1,
        posts: [],
        totalPostsCount: 0,
      };
    case CurrentPostActionTypes.FETCH_CURRENT_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        currentPage: 1,
        posts: [],
        totalPostsCount: 0,
        currentPost: action.payload,
      };
    case CurrentPostActionTypes.FETCH_CURRENT_POST_ERROR:
      return {
        loading: false,
        error: action.payload,
        currentPage: 1,
        posts: [],
        totalPostsCount: 0,
      };
    default:
      return state;
  }
};
