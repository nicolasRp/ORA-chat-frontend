import React from 'react';

import {Route,Switch} from 'react-router-dom';

import Chat from './Chat';
import SignIn from './SignIn';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={SignIn}/>
        <Route path="/chat" exact component={Chat} />   
    </Switch>
)

export default Routes;
