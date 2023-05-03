import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/formsControls/formsControls";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likeCount} />
  ));

  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addNewPost} />
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder="Post message"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button className="btn btn-secondary">Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "profileAddPostForm" })(
  AddNewPostForm
);
export default MyPosts;
