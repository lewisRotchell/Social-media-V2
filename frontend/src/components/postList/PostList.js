import React, { useEffect } from "react";
import Post from "../post/Post";
import { useDispatch, useSelector } from "react-redux";

const PostList = ({ posts, loading }) => {
  // const { posts, loading } = useSelector((state) => state.post);
  // const { _id } = useSelector((state) => state.userLogin.userInfo);

  console.log(loading);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} userId={post._id} />
      ))}
    </div>
  );
};

export default PostList;
