import { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, fade } from "@material-ui/core/styles";

import { clearUsers, getUsers } from "../../redux/users/usersActions";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { debounce } from "../../utils/debounce";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "block",
    width: "auto",
    paddingRight: "5px",
    marginRight: theme.spacing(0),
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

const UserSearch = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.users.userList);

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUsers(text));
    history.push("/search-page");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          // onChange={debounce(handleOnChange, 500)}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </form>
  );
};

export default UserSearch;
