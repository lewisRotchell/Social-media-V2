import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "20px",
    padding: ".5rem 1rem",
  },

  avatar: {
    width: "56px",
    height: "56px",
  },
  numLikes: {
    fontSize: "16px",
  },
  likeButton: {
    padding: "0 16px 0 8px",
  },

  following: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  iconStyle: {
    fontSize: "16px",
  },
  username: {
    marginLeft: "16px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  imgAndName: {
    display: "flex",
    alignItems: "center",
  },
}));

const SearchResults = ({ username, photo, id }) => {
  const following = useSelector((state) => state.userLogin.userInfo?.following);

  const isFollowing = () => {
    if (following) {
      return following.find((i) => i === id);
    } else return;
  };

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      {isFollowing() !== undefined && (
        <div style={{ display: "flex", marginLeft: "4px" }}>
          <PersonIcon className={classes.iconStyle} color="primary" />
          <Typography variant="p" className={classes.following} color="primary">
            Following
          </Typography>
        </div>
      )}
      <div className={classes.imgAndName}>
        <Avatar aria-label="recipe" className={classes.avatar}>
          {photo}
        </Avatar>

        <Typography variant="h5" color="primary" className={classes.username}>
          {username}
        </Typography>
      </div>
    </Card>
  );
};

export default SearchResults;
