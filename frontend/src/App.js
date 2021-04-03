import { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/user/userActions";
import Header from "./components/header/Header";
import LandingPage from "./pages/landing-page/LandingPage";
import Dashboard from "./pages/dashboard/Dashboard";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./routes/PrivateRoute";
import SearchPage from "./pages/search-page/SearchPage";
import Container from "@material-ui/core/Container";

const App = () => {
  const dispatch = useDispatch();

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  useEffect(() => {
    if (localStorage.token) {
      dispatch(loadUser());
    }
  });
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/search-page" component={SearchPage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
