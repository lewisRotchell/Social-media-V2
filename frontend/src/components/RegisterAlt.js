import React from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

const useStyles = makeStyles({
  avatar: {
    margin: "0 auto .5rem auto",
    backgroundColor: "#f50057",
  },
  submit: {
    marginTop: "1rem",
  },
  container: {
    marginTop: "4rem",
  },
});

const RegisterAlt = ({ handleToggle }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="xs">
      <Avatar className={classes.avatar} align="center">
        <CreateOutlinedIcon />
      </Avatar>
      <Typography align="center" component="h2" variant="h5">
        Register
      </Typography>
      <form>
        <TextField
          autoFocus
          fullWidth
          required
          variant="outlined"
          label="Username"
          margin="normal"
        >
          Username
        </TextField>

        <TextField
          margin="normal"
          fullWidth
          required
          variant="outlined"
          label="Email"
        >
          Email
        </TextField>

        <TextField
          margin="normal"
          fullWidth
          required
          type="password"
          variant="outlined"
          label="Password"
        >
          Password
        </TextField>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Create an account
        </Button>
        <Button
          onClick={handleToggle}
          type="submit"
          fullWidth
          variant="contained"
          color="default"
          className={classes.submit}
        >
          Already have an account?
        </Button>
      </form>
    </Container>
  );
};

export default RegisterAlt;
