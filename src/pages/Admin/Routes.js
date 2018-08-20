import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
// pages
import DashBoardAdmin from './Home';
import ListBlog from './Blog/ListBlog';
import AddBlog from './Blog/AddBlog';
import UserEmail from './UserEmail';
import AddAdmin from './AddAdmin';

const PrivateRoute = ({ component: Component, role, token, ...rest }) => {
    return (
        <Route {...rest} render={(props) =>
            token !== null ?
                (
                    <div>
                        <Component {...props} />
                    </div>
                )
                :
                (
                    <Redirect
                        to={{
                            pathname: '/admin/login',
                            state: { from: props.location }
                        }}
                    />
                )
        } />
    )
}

class Routes extends Component {
    render() {
        const TOKEN = localStorage.getItem('token')
        const ROLE = localStorage.getItem('role')
        return (
            <Switch>
                <PrivateRoute role={ROLE} token={TOKEN} path="/admin" exact={true} component={DashBoardAdmin}  />
                <PrivateRoute role={ROLE} token={TOKEN} path="/admin/add-admin" component={AddAdmin} />
                <PrivateRoute role={ROLE} token={TOKEN} path="/admin/listblog" component={ListBlog} />
                <PrivateRoute role={ROLE} token={TOKEN} path="/admin/addblog" component={AddBlog} />
                <PrivateRoute role={ROLE} token={TOKEN} path="/admin/user" component={UserEmail} />
            </Switch>
        );
    }
}

export default Routes;