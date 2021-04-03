import React, { useState, useEffect } from "react";
import SignIn from "../../components/sign-in/SignIn";
import { useSelector } from "react-redux";
import RegisterAlt from "../../components/RegisterAlt";

const LandingPage = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, isAuth } = userLogin;

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (isAuth) {
      history.push("/dashboard");
    }
  }, [history, isAuth]);

  return (
    <div>
      {!toggle ? (
        <SignIn handleToggle={handleToggle} />
      ) : (
        <RegisterAlt handleToggle={handleToggle} />
      )}
    </div>
  );
};

export default LandingPage;
