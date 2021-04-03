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
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  numLikes: {
    fontSize: "16px",
  },
  likeButton: {
    padding: "0 16px 0 8px",
  },
  cardHeader: {
    padding: "4px 8px 8px 8px",
  },
  typographyStyle: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  iconStyle: {
    fontSize: "16px",
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
        <div style={{ display: "flex", marginLeft: "8px" }}>
          <PersonIcon className={classes.iconStyle} color="primary" />
          <Typography className={classes.typographyStyle} color="primary">
            Following
          </Typography>
        </div>
      )}
      <CardHeader
        titleTypographyProps={{ variant: "h6", color: "primary" }}
        className={classes.cardHeader}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {photo}
          </Avatar>
        }
        title={username}
      />
    </Card>
  );
};

export default SearchResults;
