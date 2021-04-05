import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, toggleLikes } from "../../redux/post/postActions";

const useStyles = makeStyles(() => ({
  card: {
    marginTop: "20px",
  },
  avatar: {
    width: "56px",
    height: "56px",
    margin: "8px auto 8px auto",
  },
  username: {
    marginTop: "8px",
  },
  numLikes: {
    fontSize: "16px",
  },

  buttonControls: {
    padding: "0",
  },
  text: {
    width: "95%",
    margin: "6px 0",
    overflowWrap: "break-word",
  },
  postControls: {
    marginLeft: "80px", //This is for positioning
    // marginBottom: "10px",
    padding: "8px 0 ",
  },
}));
const Post = ({ post }) => {
  const userId = useSelector((state) => state.userLogin.userInfo._id);
  const dispatch = useDispatch();
  const classes = useStyles();
  const {
    _id: postId,
    likes,
    text,
    createdAt,
    user: { photo, _id, username },
  } = post;

  const handleDelete = () => {
    dispatch(deletePost(postId));
  };

  const handleLike = () => {
    dispatch(toggleLikes(postId));
  };

  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={2}>
          <Avatar className={classes.avatar}>{photo}</Avatar>
        </Grid>
        <Grid item xs={10}>
          <Typography className={classes.username} variant="h5" color="primary">
            {username}
          </Typography>
          <Typography variant="caption" color="primary">
            {createdAt}
          </Typography>
          {/* <CardMedia
         className={classes.media}
         image="/static/images/cards/paella.jpg"
        title="Paella dish"
       /> */}
          <Typography
            className={classes.text}
            align="left"
            variant="body1"
            color="textPrimary"
          >
            {text}
          </Typography>
        </Grid>
        <Grid className={classes.postControls} container>
          <Grid item xs={4}>
            <IconButton
              onClick={handleLike}
              size="small"
              className={classes.buttonControls}
              aria-label="like post"
            >
              <FavoriteBorderIcon fontSize="small" />
              <span className={classes.numLikes}>{likes.length}</span>
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            {userId === _id && (
              <IconButton
                className={classes.buttonControls}
                aria-label="add or view comments"
              >
                <ChatBubbleOutlineIcon fontSize="small" />
                <span className={classes.numLikes}>0</span>
              </IconButton>
            )}
          </Grid>
          <Grid item xs={4}>
            {userId === _id && (
              <IconButton
                onClick={handleDelete}
                className={classes.buttonControls}
                aria-label="delete"
              >
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Card>
    // <Card className={classes.root}>
    //   <CardHeader
    //     className={classes.cardHeader}
    //     avatar={
    //       <Avatar aria-label="recipe" className={classes.avatar}>
    //         {photo}
    //       </Avatar>
    //     }
    //     titleTypographyProps={{ variant: "h6", color: "primary" }}
    //     subheaderTypographyProps={{ color: "primary" }}
    //     title={username}
    //     subheader={createdAt}
    //   />
    //   {/* <CardMedia
    //     className={classes.media}
    //     image="/static/images/cards/paella.jpg"
    //     title="Paella dish"
    //   /> */}
    //   <CardContent className={classes.CardContent}>
    //     <Typography variant="body2" color="textSecondary" component="p">
    //       {text}
    //     </Typography>
    //   </CardContent>
    //   <CardActions disableSpacing>
    //     <IconButton
    //       className={classes.likeButton}
    //       aria-label="add to favorites"
    //     >
    //       <FavoriteIcon />{" "}
    //       <span className={classes.numLikes}>{likes.length}</span>
    //     </IconButton>
    //     {userId === _id && (
    //       <IconButton
    //         onClick={handleDelete}
    //         className={classes.deleteButton}
    //         aria-label="delete"
    //       >
    //         <DeleteIcon />{" "}
    //       </IconButton>
    //     )}

    //     <IconButton aria-label="share">{/* <ShareIcon /> */}</IconButton>
    //   </CardActions>
    // </Card>
  );
};

export default Post;
