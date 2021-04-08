import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/post/postActions";
import { getUser } from "../../redux/users/usersActions";

const ProfilePage = ({ match }) => {
  console.log(match.params.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(match.params.id.toString()));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPosts(match.params.id.toString()));
  }, [dispatch]);

  return <div>Profile page</div>;
};

export default ProfilePage;
