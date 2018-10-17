import React, { Component } from "react";
import styled from "styled-components";
import { Router, Route, Switch } from "react-router-dom";
import Header from "../common/Header";
import Home from "../containers/Home/index";
import Form from "../containers/Home/containers/Form/index";
import NotFound from "../common/NotFound";
import history from "../history";

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <AppWrapper>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={Form} />
            <Route component={NotFound} />
          </Switch>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
