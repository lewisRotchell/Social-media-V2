import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/post/postActions";
import { getUser } from "../../redux/users/usersActions";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import PostList from "../../components/postList/PostList";

const useStyles = makeStyles({
  backButton: {
    marginTop: "25px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileImage: {
    height: "130px",
    width: "130px",
  },
  titleUsername: {
    paddingTop: "6px",
  },
  followNums: {
    display: "flex",
    padding: "16px",
  },
  followItems: {
    padding: "0 6px",
  },
  changeProfile: {
    fontSize: "12px",
    backgroundColor: "#fff",
    border: "none",
    outline: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

const loaderCSS = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ProfilePage = ({ match }) => {
  const classes = useStyles();

  const postsLoading = useSelector((state) => state.post.loading);
  const postError = useSelector((state) => state.post.error);
  const posts = useSelector((state) => state.post.posts);

  const userLoading = useSelector((state) => state.users.loading);
  const userError = useSelector((state) => state.users.error);
  const userInfo = useSelector((state) => state.users.user);

  const authInfo = useSelector((state) => state.userLogin.userInfo);
  const authLoading = useSelector((state) => state.userLogin.loading);

  const { photo, following, followers, username, _id } = userInfo;

  const authFollowing = useSelector(
    (state) => state.userLogin.userInfo?.following
  );

  const isFollowing = () => {
    if (authFollowing) {
      return authFollowing.find((i) => i === _id);
    } else return;
  };

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUser(match.params.id.toString()));
    dispatch(getPosts(match.params.id.toString()));
  }, [dispatch, match]);

  const handleReturn = () => {
    if (authInfo === null) {
      history.push("/");
    } else {
      history.push("/dashboard");
    }
  };

  return (
    <div>
      <Button onClick={handleReturn} className={classes.backButton}>
        <ArrowBackIcon />
      </Button>

      {postsLoading || userLoading || authLoading ? (
        <BeatLoader loading css={loaderCSS} />
      ) : postError || userError ? (
        <div>ERROR!!!!!!!!!!!!!!!!!!!!!!!!</div>
      ) : (
        <div className={classes.profileContainer}>
          {" "}
          <Avatar className={classes.profileImage} src={photo}></Avatar>{" "}
          {authInfo._id === userInfo._id && (
            <button className={classes.changeProfile}>
              Change Profile Picture
            </button>
          )}
          <Typography variant="h4" className={classes.titleUsername}>
            {username}
          </Typography>
          {authInfo._id !== userInfo._id && (
            <Button size="small" variant="contained" color="primary">
              {isFollowing() !== undefined ? "Following" : "Follow"}
            </Button>
          )}
          <div className={classes.followNums}>
            <Typography className={classes.followItems} variant="body2">
              followers:{followers.length}
            </Typography>{" "}
            <Typography className={classes.followItems} variant="body2">
              following:{following.length}
            </Typography>{" "}
          </div>
          <Typography variant="h6">Posts</Typography>
          <Container maxWidth="sm">
            <PostList posts={posts} />
          </Container>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
