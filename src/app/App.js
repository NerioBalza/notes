import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Route Pages
import Home from "../pages/Home";
import Notes from "../pages/Notes";
import NoteNew from "../pages/NoteNew";
import NoteEdit from "../pages/NoteEdit";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";

function App({ isLoging }) {
  const [loging, setLogin] = useState(false);

  useEffect(() => {
    setLogin(isLoging);
  }, [isLoging]);

  return (
    <BrowserRouter>
      {loging ? (
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route exact path="/note/new" component={NoteNew} />
          <Route exact path="/note/:id/edit" component={NoteEdit} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      )}
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoging: state.user.isLoging,
  };
};

export default connect(mapStateToProps, null)(App);
