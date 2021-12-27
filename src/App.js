import logo from './logo.svg';
import './App.css';
import React, {Fragment} from "react";
import {Route, Switch } from 'react-router-dom';
import SignUp from "./components/SingUp";
import {Header} from "./components/Header";
import SignIn from "./components/SignIn";

function App() {
  return (
     <Fragment>
        <Header/>
        <Switch>
            <Route path='/' exact component={SignUp}/>
            <Route path='/sign-in' component={SignIn}/>
        </Switch>
     </Fragment>
  );
}

export default App;
