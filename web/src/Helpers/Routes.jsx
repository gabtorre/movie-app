import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Signin from '../Pages/Signin'
import App from '../Pages/Landing'
import Profile from '../Pages/Profile'
import Home from '../Pages/Home'

const Routes = (props) => {

    return (
        <Switch>
                <Route path='/' component={App} exact />
                <Route path='/home' component={Home} exact />
                <Route path='/signin' component={Signin} exact />
                <Route path='/profile' component={Profile} exact />
        </Switch>
    );
};

export default Routes;
