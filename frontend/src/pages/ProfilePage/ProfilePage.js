import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/post/postActions";
import { getUser } from "../../redux/users/usersActions";
import { makeStyles } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import PostList from "../../components/postList/PostList";

const useStyles = makeStyles({
  backButton: {
    margin: "25px 0",
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
});

const ProfilePage = ({ match }) => {
  const classes = useStyles();

  const postsLoading = useSelector((state) => state.post.loading);
  const postError = useSelector((state) => state.post.error);
  const posts = useSelector((state) => state.post.posts);

  const userLoading = useSelector((state) => state.users.loading);
  const userError = useSelector((state) => state.users.error);
  const userInfo = useSelector((state) => state.users.user);

  const { photo, following, followers, username } = userInfo;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(match.params.id.toString()));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPosts(match.params.id.toString()));
  }, [dispatch]);

  console.log(posts);

  return (
    <div>
      <ArrowBackIcon className={classes.backButton} />

      {postsLoading || userLoading ? (
        <div>LOADING</div>
      ) : postError ?? userError ? (
        <div>ERROR!!!!!!!!!!!!!!!!!!!!!!!!</div>
      ) : (
        <div className={classes.profileContainer}>
          {" "}
          <Avatar className={classes.profileImage} src={photo}></Avatar>{" "}
          <Typography variant="h4" className={classes.titleUsername}>
            {username}
          </Typography>
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
