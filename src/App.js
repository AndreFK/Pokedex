import React, { Component } from 'react';

import Pokedex from './PokemonList.js';
import Login from './Login';

import './App.css';
import pokeball from './p.png';

import {Route, BrowserRouter as Router} from "react-router-dom";
import Switch from 'react-router-dom/Switch';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const routing = (
  <Router>
    <Switch>
      <Route exact path = "/" component={Login}/>
      <Route path = "/pokedex" component={Pokedex}/>
    </Switch>
  </Router>
);

class App extends Component {
  render() {
    return (
      <div className = "App">
        <header className = "App-header">
          <img  src = {pokeball} className = "animate" alt = "app.logo"></img>
        </header>
        <ReduxProvider store={reduxStore}>
          <div className = 'App-header'>
            {routing}
          </div>
        </ReduxProvider>
      </div>
    );
  }
}

export default App;
