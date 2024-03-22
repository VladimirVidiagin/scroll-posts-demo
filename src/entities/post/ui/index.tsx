import React from "react";
import { Post } from "../../../app/types/posts";
import { Link } from "react-router-dom";

export const PostInFeed: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link className="link-to-post" key={post.id} to={`/posts/${post.id}`}>
      <article className="post-in-feed">
        <h1 className="post-in-feed__title">
          {post.id} - {post.title}
        </h1>
        <p className="post-in-feed__body">{post.body}</p>
      </article>
    </Link>
  );
};
