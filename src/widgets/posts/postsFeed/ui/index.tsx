import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../app/hooks/useTypedSelector";
import { PostsActionTypes } from "../../../../app/types/posts";
import { fetchPosts } from "../api/fetchAC";
import { PostInFeed } from "../../../../entities/post/index";
import Loader from "../../../../shared/loader/Loader";
import ErrorMessage from "../../../../shared/errorMessage/ErrorMessage";

export const PostsFeed: React.FC = () => {
  const dispatch = useDispatch();
  const [isFetchingMore, setIsFetchingMore] = useState(true);
  const {
    posts,
    error: errorMessage,
    loading,
    currentPage,
    totalPostsCount,
  } = useTypedSelector((state) => state.posts);

  const fetchData = async () => {
    try {
      dispatch({
        type: PostsActionTypes.FETCH_POSTS,
      });
      const action = await fetchPosts(currentPage);
      dispatch(action);
    } catch (err) {
      console.error("Произошла ошибка при загрузке постов", err);
    } finally {
      setIsFetchingMore(false);
    }
  };

  useEffect(() => {
    if (isFetchingMore) {
      fetchData();
    }
  }, [isFetchingMore]);

  useEffect(() => {
    const scrollHandler = () => {
      if (
        !isFetchingMore &&
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 10 &&
        posts.length < totalPostsCount
      ) {
        setIsFetchingMore(true);
      }
    };
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [isFetchingMore, posts.length, totalPostsCount]);

  return (
    <>
      <div className="post-feed">
        {posts.map((post) => (
          <PostInFeed key={post.id} post={post} />
        ))}
      </div>
      {loading && <Loader />}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </>
  );
};
