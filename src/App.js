import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Comp/login';
import Gallery from './Comp/Gallery';
import Student from './Comp/Student';
import Signup from './Comp/Signup';
import PasswordValidation from './Comp/PasswordValidation';
import Animal from './Comp/Animal';
import Nature from './Comp/Nature';
import Computer from './Comp/Computer';
import Emoji from './Comp/Emoji';
import Fly from './Comp/Fly';
import Fish from './Comp/Fish'

const App = () => {
return(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/Gallery" component={Gallery}/>
    <Route path="/Student" component={Student}/>
    <Route path="/Signup" component={Signup}/>
    <Route path="/Animal" component={Animal}/>
    <Route path="/Nature" component={Nature}/>
    <Route path="/Computer" component={Computer}/>
    <Route path="/Emoji" component={Emoji}/>
    <Route path="/Fly" component={Fly}/>
    <Route path="/Fish" component={Fish}/>
    <Route path="/PasswordValidation" component={PasswordValidation}/>
  </Switch>
  </BrowserRouter>
)
};

export default App;
