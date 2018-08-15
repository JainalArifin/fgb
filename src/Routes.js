import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable';
// Layout
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Trading from './pages/Trading';
// import Blog from './pages/Blog';
import Education from './pages/Education';
import CallMe from './pages/CallMe';
// detail pages
import DetailBlog from './pages/Blog/DetailBlog';
// Auth
import Register from './pages/Register';
import Login from './pages/Login';
// admin
// import SidebarAdmin from './components/LayoutAdmin/SidebarAdmin';
// import Admin from './pages/Admin/Home';
import AdminLayout from './pages/Admin';
import ListBlog from './pages/Blog/ListBlog';

const PrivateRoute = ({ component: Component, role, token, ...rest }) => {
    return (
        <Route {...rest} render={(props) =>
            token !== null ?
                (role == 'admin' ? (
                    <div>
                        <Component {...props} />
                    </div>
                ) : (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: { from: props.location }
                            }}
                        />
                    )
                )
                :
                (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                )
        } />
    )
}

const LoadBlog = Loadable({
    loader: () => import('./pages/Blog'),
    loading() {
        return <div style={{ marginTop: '200px' }}>Loading...</div>
    },
    delay: 700,
})

const ListHeader = [
    { exact: true, path: '/', component: Header },
    { exact: true, path: '/tentang', component: Header },
    { exact: true, path: '/trading', component: Header },
    { exact: true, path: '/edukasi', component: Header },
    { exact: true, path: '/blog', component: Header },
    { exact: true, path: '/callme', component: Header },
    { exact: true, path: '/blog/:id', component: Header },
    { exact: true, path: '/register', component: Header },
    { exact: true, path: '/login', component: Header }
]

const ListFooter = [
    { exact: true, path: '/', component: Footer },
    { exact: true, path: '/tentang', component: Footer },
    { exact: true, path: '/trading', component: Footer },
    { exact: true, path: '/edukasi', component: Footer },
    { exact: true, path: '/blog', component: Footer },
    { exact: true, path: '/callme', component: Footer },
    { exact: true, path: '/blog/:id', component: Footer },
    { exact: true, path: '/register', component: Footer },
    { exact: true, path: '/login', component: Footer }
]

class Routes extends Component {
    render() {
        const TOKEN = localStorage.getItem('token')
        const ROLE = localStorage.getItem('role')
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        {/* <Route path="/admin" exact={true} component={SidebarAdmin} /> */}
                        {ListHeader.map((item, key) => {
                            return (
                                <Route exact={item.exact} path={item.path} component={item.component} key={key}/>
                            )
                        })}
                    </Switch>
                    <Switch>
                        {/* pages */}
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/tentang" component={About} />
                        <Route path="/trading" component={Trading} />
                        <Route path="/edukasi" component={Education} />
                        <Route path="/blog" exact={true} component={LoadBlog} />
                        <Route path="/callme" component={CallMe} />
                        {/* detail */}
                        <Route path="/blog/:id" component={DetailBlog} />
                        {/* auth */}
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        {/* admin */}
                        {/* <PrivateRoute token={TOKEN} role={ROLE} path="/admin" exact={true} component={AdminLayout} /> */}
                        <AdminLayout />
                    </Switch>
                    <Switch>
                        {ListFooter.map((item, key) => {
                            return (
                                <Route exact={item.exact} path={item.path} component={item.component} key={key} />
                            )
                        })}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;