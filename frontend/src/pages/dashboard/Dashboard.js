import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/core";
import PostList from "../../components/postList/PostList";
import AddPostForm from "../../components/add-post-form/AddPostForm";

const loaderCSS = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Dashboard = () => {
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo, loading, error } = userLogin;

  return (
    <>
      {loading ? (
        <BeatLoader loading css={loaderCSS} />
      ) : error ? (
        <h1>ERROR</h1>
      ) : (
        <Container maxWidth="sm">
          <AddPostForm userInfo={userInfo} />
          <PostList />
        </Container>
      )}
    </>
  );
};

export default Dashboard;
