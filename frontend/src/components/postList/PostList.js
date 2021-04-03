import React, { useEffect } from "react";
import Post from "../post/Post";
import { useDispatch, useSelector } from "react-redux";

const PostList = ({ posts, loading }) => {
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
