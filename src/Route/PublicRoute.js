import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLogin } from '../utils/index';

function PublicRoute({component: Component , restricated=false , ...khushal}) {
    return (
   <Route {... khushal} render={props => (
    isLogin() && restricated ? 
    <Redirect to={"/"} />
    :
    <Component {...props} />
   )}
   />
    );
}

export default PublicRoute;