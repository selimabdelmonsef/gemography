import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {landingPage} from './components/landingPage/landingPage';


export default class App extends React.Component {
  render() {
    return (
 
      <Router>

        <Switch>
<Route path = "/" exact component = {landingPage}/>
        </Switch>
      </Router >
    )
  }
}
