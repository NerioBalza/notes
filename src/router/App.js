import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "../pages/Home";
import Notes from "../pages/Notes";
import NotesEdit from "../pages/NotesEdit";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/note/:id/edit" component={NotesEdit} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
