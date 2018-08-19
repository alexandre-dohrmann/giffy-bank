import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import './App.css';
import GifsContainer from './components/GifsContainer';
import Nav from './components/Nav';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom';

const My404 = () => {
  return (
    <div>
      You're Lost
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/gifs" component={GifsContainer} />
        <Route component={My404} />
      </Switch>
    </main>
  )
}



export default App;