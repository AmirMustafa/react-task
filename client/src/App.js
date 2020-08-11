import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";

// App subscribing to redux store
import { connect } from "react-redux";
import { fetchUserAction } from "./actions/myaction";

function App(props) {
  // this is similar to componentDidMount of class component - here we call mapDispatchToProps
  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <BrowserRouter className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/profile" component={Profile}></Route>
      </Switch>
    </BrowserRouter>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => {
      dispatch(fetchUserAction());
    }
  };
};

// para 1 is null as we don't need mapStateToProps
export default connect(null, mapDispatchToProps)(App);
