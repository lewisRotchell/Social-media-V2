import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/core";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchResults from "../../components/search-results/SearchResults";

const loaderCSS = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const useStyles = makeStyles({
  root: {
    marginTop: "16px",
  },
  button: {
    display: "block",
    fontSize: "16px",
    margin: "auto",
  },
  searchMsg: {
    textAlign: "center",
    marginTop: "32px",
  },
});

const SearchPage = () => {
  const classes = useStyles();
  const users = useSelector((state) => state.users.userList);
  const loading = useSelector((state) => state.users.loading);
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const history = useHistory();

  const handleReturn = () => {
    if (userInfo === null) {
      history.push("/");
    } else {
      history.push("/dashboard");
    }
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleReturn} className={classes.button} color="primary">
        Go Back
      </Button>

      {loading ? (
        <BeatLoader loading css={loaderCSS} />
      ) : !loading && users.length > 0 ? (
        users.map((user) => (
          <SearchResults
            key={user._id}
            username={user.username}
            photo={user.photo}
            id={user._id}
          />
        ))
      ) : (
        <Typography className={classes.searchMsg} color="primary" variant="h4">
          No Search Results
        </Typography>
      )}
    </div>
  );
};

export default SearchPage;
