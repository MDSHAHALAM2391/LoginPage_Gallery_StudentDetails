import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Comp/login';
import Gallery from './Comp/Gallery';
import Student from './Comp/Student';

const App = () => {
return(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/Gallery" component={Gallery}/>
    <Route path="/Student" component={Student}/>
  </Switch>
  </BrowserRouter>
)
};

export default App;
