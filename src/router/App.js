import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../pages/Home";
import Notes from "../pages/Notes";
import NoteNew from "../pages/NoteNew";
import NoteEdit from "../pages/NoteEdit";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

function App({ user, history }) {
  const [isLoging, setIsLogin] = useState("");
  useEffect(() => {
    setIsLogin(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <BrowserRouter>
      <Layout>
        {isLoging ? (
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
            <Route exact path="/login" component={Login} />
            <Route exact path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        )}
      </Layout>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.email,
  };
};

export default connect(mapStateToProps, null)(App);
