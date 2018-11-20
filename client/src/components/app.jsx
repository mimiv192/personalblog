import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
// import GoodbyeWorld from './goodbye';
import Frontpage from './frontpage';
import BlogsTimeline from './blogstimeline';
import SingleBlog from './singleblog';
import PrivateRoute from './auth/PrivateRoute';
import AuthButton from './auth/authButton';
import Login from './auth/login';
import Logout from './auth/logout';
import Form from './form'
import router from '../services/blogs';

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/blogstimeline" id="bloggielink" >Bloggie</Link>
                    


                        <AuthButton />
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route exact path="/" component={Frontpage} />

                        <PrivateRoute exact path='/compose' component={Form} />

                        <Route path="/blogstimeline" component={BlogsTimeline} />

                        <Route path="/single/:id" component={SingleBlog} />

                    </Switch>
                </Fragment>
            </Router>

        )
    }
}

export default Navigation;