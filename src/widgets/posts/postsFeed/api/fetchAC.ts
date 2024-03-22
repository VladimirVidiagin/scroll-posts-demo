import axios from "axios";
import { PostsActionTypes } from "../model/types";

export const fetchPosts = async (currentPage: number) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`
    );
    return {
      type: PostsActionTypes.FETCH_POSTS_SUCCESS,
      payload: response.data,
      totalPostsCount: response.headers["x-total-count"],
    };
  } catch (e) {
    return {
      type: PostsActionTypes.FETCH_POSTS_ERROR,
      payload: "Произошла ошибка при загрузке постов",
      totalPostsCount: 0,
    };
  }
};
