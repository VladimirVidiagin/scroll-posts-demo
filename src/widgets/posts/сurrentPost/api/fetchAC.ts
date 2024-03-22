import axios from "axios";
import { CurrentPostActionTypes } from "../model/types";

export const fetchCurrentPost = async (postId: number) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return {
      type: CurrentPostActionTypes.FETCH_CURRENT_POST_SUCCESS,
      payload: response.data,
    };
  } catch (e) {
    return {
      type: CurrentPostActionTypes.FETCH_CURRENT_POST_ERROR,
      payload: "Произошла ошибка при загрузке поста",
    };
  }
};
