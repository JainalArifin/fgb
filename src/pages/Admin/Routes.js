import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
// pages
import DashBoardAdmin from './Home';
import ListBlog from './Blog/ListBlog';
import AddBlog from './Blog/AddBlog';
import UserEmail from './UserEmail';
import AddAdmin from './AddAdmin';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/admin" exact={true} component={DashBoardAdmin}  />
                <Route path="/admin/add-admin" component={AddAdmin} />
                <Route path="/admin/listblog" component={ListBlog} />
                <Route path="/admin/addblog" component={AddBlog} />
                <Route path="/admin/user" component={UserEmail} />
            </Switch>
        );
    }
}

export default Routes;