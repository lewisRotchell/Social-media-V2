import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/core";
import PostList from "../../components/postList/PostList";
import AddPostForm from "../../components/add-post-form/AddPostForm";
import { getPosts } from "../../redux/post/postActions";

const loaderCSS = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Dashboard = () => {
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const userLoading = useSelector((state) => state.userLogin.loading);
  const userError = useSelector((state) => state.userLogin.error);

  const posts = useSelector((state) => state.post.posts);
  const postsLoading = useSelector((state) => state.post.loading);
  const postsError = useSelector((state) => state.post.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getPosts());
    }
  }, [dispatch]);

  return (
    <>
      {userLoading || postsLoading ? (
        <BeatLoader loading css={loaderCSS} />
      ) : userError || postsError ? (
        <h1>ERROR</h1>
      ) : (
        <Container maxWidth="sm">
          <AddPostForm userInfo={userInfo} />
          <PostList posts={posts} loading={postsLoading} />
        </Container>
      )}
    </>
  );
};

export default Dashboard;
