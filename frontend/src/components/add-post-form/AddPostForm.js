import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../redux/post/postActions";

import { css } from "@emotion/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "20px",
    marginBottom: "30px",
  },
  form: {
    width: "100%",
    paddingTop: "20px",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  follow: {
    marginBottom: "0",
    padding: "0 5px",
    color: "primary",
  },
}));

const AddPostForm = ({ userInfo }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(text));
    setText("");
  };
  return (
    <Card className={classes.root}>
      <form
        // onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        className={classes.form}
      >
        <Grid container spacing={9} justify="center" alignItems="flex-end">
          <Grid item xs={1}>
            <Avatar
              justify="center"
              className={classes.avatar}
              alt={userInfo.username}
              src={userInfo.photo}
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={10}>
            <TextField
              onChange={(e) => setText(e.target.value)}
              value={text}
              fullWidth
              id="standard-basic"
              label={`Say something, ${userInfo.username}`}
              multiline
              variant="filled"
            />
          </Grid>
        </Grid>
        <CardActions style={{ marginLeft: "8px" }}>
          <Button size="small" color="primary">
            Followers: {userInfo.followers.length}
          </Button>
          <Button size="small" color="primary">
            Following: {userInfo.following.length}
          </Button>
          <Button onClick={handleSubmit} size="small" color="primary">
            SEND
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default AddPostForm;
