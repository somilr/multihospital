import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '.';

function PrivateRoute({component :Component , ... khushal}) {
    return (
       <Route {...khushal} render={props => (
        isLogin() ? 
        <Component {...props} />
        :

        <Redirect to={"/Auth"} />
       )}/>
    );
}

export default PrivateRoute;