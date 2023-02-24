import React from 'react'
import {
    Route,
    Redirect
} from "react-router-dom";

function PrivateRoute({ path, children }) {
    const token = localStorage.getItem('type');
    return token ? (
        <div>
            <Route exact path={path}>
                {children}
            </Route>
        </div>
    ) : (
        <Redirect to="/login" />

    )
}

export default PrivateRoute;