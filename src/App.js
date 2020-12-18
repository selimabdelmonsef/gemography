import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { landingPage } from './components/landing-page/landing-page';
import starredGithubPage from './components/starred-github-page/starred-github-page';


export default class App extends React.Component {
  render() {
    return (

      <Router>

        <Switch>
          <Route path="/" exact component={landingPage} />
          <Route path="/starredgithubpage" component={starredGithubPage} />
        </Switch>
      </Router >
    )
  }
}
 