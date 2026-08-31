import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;
    return (
        <Route
            {...rest}
            render={(props) => {
                return userInfo !== null ? (
                    <Component {...props}></Component>
                ) : (
                    <Redirect
                        to={{ pathname: '/login' }}
                    />
                );
            }}
        />
    );
};
export default PrivateRoute;

