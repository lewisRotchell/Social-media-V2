import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/auth/authActions";
import { clearPosts } from "../../redux/post/postActions";
import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import UserSearch from "../userSearch/UserSearch";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "block",
    width: "auto",
    paddingRight: "5px",
    marginRight: theme.spacing(0),
    "&:hover": {
      cursor: "pointer",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
  navButton: {
    marginLeft: "auto",

    [theme.breakpoints.up("lg")]: {
      marginRight: "60px",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

  const handleLogout = () => {
    dispatch(clearPosts());
    dispatch(logout());
  };

  const handleReturn = () => {
    if (userInfo === null) {
      history.push("/");
    } else {
      history.push("/dashboard");
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            onClick={handleReturn}
            variant="h6"
            className={classes.title}
          >
            Social Media
          </Typography>
          <UserSearch />

          {userInfo ? (
            <Link className={classes.navButton} to="/">
              <Button onClick={handleLogout} color="inherit">
                Logout
              </Button>
            </Link>
          ) : (
            <Link className={classes.navButton} to="/">
              <Button color="inherit">Log in</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
