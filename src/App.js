import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Comp/login';
import Gallery from './Comp/Gallery';
import Student from './Comp/Student';
import Signup from './Comp/Signup';
import PasswordValidation from './Comp/PasswordValidation';
import Category from './Comp/Category';


const App = () => {
return(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/Gallery" component={Gallery}/>
    <Route path="/Student" component={Student}/>
    <Route path="/Signup" component={Signup}/>
    <Route path="/Category/:category" component={Category}/>
  
    <Route path="/PasswordValidation" component={PasswordValidation}/>
  </Switch>
  </BrowserRouter>
)
};

export default App;
