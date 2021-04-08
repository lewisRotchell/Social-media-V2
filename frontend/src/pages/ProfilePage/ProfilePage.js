import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ProfilePage = ({ match }) => {
  console.log(match.params.id);

  const dispatch = useDispatch();
  return <div>Profile page</div>;
};

export default ProfilePage;
