import React from "react";
import Post from "../post/Post";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} userId={post._id} />
      ))}
    </div>
  );
};

export default PostList;
