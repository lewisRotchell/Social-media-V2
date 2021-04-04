import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";

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
  likeButton: {
    padding: "0 16px 0 8px",
  },
  deleteButton: {
    marginLeft: "auto",
  },
  text: {
    width: "95%",
    margin: "6px 0",
    overflowWrap: "break-word",
  },
}));
const Post = ({ post, userId }) => {
  const classes = useStyles();
  const {
    likes,
    text,
    createdAt,
    user: { photo, _id, username },
  } = post;

  const handleDelete = () => {
    console.log("deleted");
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
            variant="body2"
            color="textPrimary"
          >
            {text}
          </Typography>
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
