import React from "react";
import RegisterForm from "../register-form/RegisterForm";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const RegisterModal = React.forwardRef(({ open, onClose }, ref) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        ref={ref}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={open} ref={ref}>
          <RegisterForm ref={ref} />
        </Fade>
      </Modal>
    </div>
  );
});

export default RegisterModal;
