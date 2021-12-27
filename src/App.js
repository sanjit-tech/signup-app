import logo from './logo.svg';
import './App.css';
import React, {Fragment} from "react";
import {Route, Switch } from 'react-router-dom';
import SignUp from "./components/SingUp";
import {Header} from "./components/Header";
import SignIn from "./components/SignIn";
import Thanks from "./components/thanks";

function App() {
  return (
     <Fragment>
        <Header/>
        <Switch>
            <Route path='/' exact component={SignUp}/>
            <Route path='/sign-in' component={SignIn}/>
            <Route path='/thank-you' component={Thanks}/>
        </Switch>
     </Fragment>
  );
}

export default App;
