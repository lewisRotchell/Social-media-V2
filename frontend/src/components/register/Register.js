import React, { useState } from "react";
import { register } from "../../redux/auth/authActions";
import { useDispatch } from "react-redux";
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

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };
  return (
    <Container className={classes.container} maxWidth="xs">
      <Avatar className={classes.avatar} align="center">
        <CreateOutlinedIcon />
      </Avatar>
      <Typography align="center" component="h2" variant="h5">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          fullWidth
          required
          variant="outlined"
          label="Username"
          margin="normal"
          name="username"
          value={username}
          onChange={handleChange}
        >
          Username
        </TextField>

        <TextField
          margin="normal"
          fullWidth
          required
          variant="outlined"
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
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
