import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/post/postActions";
import { getUser } from "../../redux/users/usersActions";

const ProfilePage = ({ match }) => {
  const postLoading = useSelector((state) => state.post.loading);
  const postError = useSelector((state) => state.post.error);
  const posts = useSelector((state) => state.post.posts);

  const userLoading = useSelector((state) => state.users.loading);
  const userError = useSelector((state) => state.users.error);
  const user = useSelector((state) => state.users.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(match.params.id.toString()));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPosts(match.params.id.toString()));
  }, [dispatch]);

  return (
    <div>
      <div>Go Back name </div>
      {postLoading || userLoading ? (
        <div>LOADING</div>
      ) : postError ?? userError ? (
        <div>ERROR!!!!!!!!!!!!!!!!!!!!!!!!</div>
      ) : (
        <div>
          {" "}
          <div>image </div>
          <div>(username) </div>
          <div>username </div>
          <div>followers, following </div>
          <div>posts </div>
          <div>posts list </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
