import React, { useEffect } from "react";
import Post from "../post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/post/postActions";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);
  const { _id } = useSelector((state) => state.userLogin.userInfo);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
    }
  }, [dispatch]);

  return loading ? (
    ""
  ) : (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} userId={_id} />
      ))}
    </div>
  );
};

export default PostList;
