import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './Index';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Forgot from './Forgot';
import Reset from './Reset';

export default class Main extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Index}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/forgotpassword' component={Forgot}/>
                    <Route path='/password/reset/:token' component={Reset}/>
                </Switch>
            </Router>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
