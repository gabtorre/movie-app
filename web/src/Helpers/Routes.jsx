import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Signin from '../Pages/Signin'
import App from '../Pages/Home'

const Routes = (props) => {

    return (
        <Switch>
                <Route path='/' component={App} exact />
                <Route path='/signin' component={Signin} exact />
        </Switch>
    );
};

export default Routes;
