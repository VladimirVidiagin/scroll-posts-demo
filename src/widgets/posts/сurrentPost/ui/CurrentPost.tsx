import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../../app/hooks/useTypedSelector"; // TODO
import { CurrentPostActionTypes } from "../model/types";
import { fetchCurrentPost } from "../api/fetchAC";
import Loader from "../../../../shared/loader/Loader";
import ErrorMessage from "../../../../shared/errorMessage/ErrorMessage";
import LinkButton from "../../../../shared/linkButton/LinkButton";

export const CurrentPost: React.FC = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const id = params.id;

  const {
    loading,
    error: errorMessage,
    currentPost,
  } = useTypedSelector((state) => state.posts);

  const fetchData = async () => {
    try {
      dispatch({
        type: CurrentPostActionTypes.FETCH_CURRENT_POST,
      });
      const action = await fetchCurrentPost(Number(id));
      dispatch(action);
    } catch (err) {
      console.error("Произошла ошибка при загрузке поста", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (errorMessage) {
    return <ErrorMessage errorMessage={errorMessage} />;
  }

  return (
    <div className="current-post-page">
      <article className="current-post-block">
        <h1 className="current-post-block__title">
          {currentPost?.id} - {currentPost?.title}
        </h1>
        <p className="current-post-block__body">{currentPost?.body}</p>
        <LinkButton buttonText="назад" linkAddress="/" />
      </article>
    </div>
  );
};
