import React, { useState, useEffect } from "react";
import RegisterModal from "../../components/register-modal/RegisterModal";
import SignIn from "../../components/sign-in/SignIn";
import { useSelector } from "react-redux";

const LandingPage = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, isAuth } = userLogin;

  useEffect(() => {
    if (isAuth) {
      history.push("/dashboard");
    }
  }, [history, isAuth]);

  return (
    <div>
      <SignIn onOpen={() => setIsOpen(true)} open={isOpen} />
      <RegisterModal onClose={() => setIsOpen(false)} open={isOpen} />
    </div>
  );
};

export default LandingPage;
