import React, { useState } from "react";
import { login } from "../../redux/auth/authActions";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

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

const SignIn = ({ handleToggle }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <Container className={classes.container} maxWidth="xs">
      <Avatar className={classes.avatar} align="center">
        <LockOutlinedIcon />
      </Avatar>
      <Typography align="center" component="h2" variant="h5">
        Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
          required
          variant="outlined"
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
          autoFocus
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
          name="password"
          value={password}
          onChange={handleChange}
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
          Sign In
        </Button>
        <Button
          onClick={handleToggle}
          type="submit"
          fullWidth
          variant="contained"
          color="default"
          className={classes.submit}
        >
          Create Account
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;
