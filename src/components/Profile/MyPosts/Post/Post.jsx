import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg" />
      {props.message}
      <div>
        <span>like{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
