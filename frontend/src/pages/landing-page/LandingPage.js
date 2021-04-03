import React, { useState, useEffect } from "react";
import SignIn from "../../components/sign-in/SignIn";
import { useSelector } from "react-redux";
import Register from "../../components/register/Register";

const LandingPage = ({ history }) => {
  const isAuth = useSelector((state) => state.userLogin.isAuth);

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
        <div>
          <SignIn handleToggle={handleToggle} />
        </div>
      ) : (
        <Register handleToggle={handleToggle} />
      )}
    </div>
  );
};

export default LandingPage;
