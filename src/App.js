import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //BrowserRouter interacts with History library.
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/userdetail/:username" component={UserDetail} />
            <Route path="/" component={UserList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
