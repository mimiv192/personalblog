import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
// import GoodbyeWorld from './goodbye';
import Frontpage from './frontpage';
import BlogsTimeline from './blogstimeline';
import SingleBlog from './singleblog';





class Navigation extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/blogstimeline" id="bloggielink" >Bloggie</Link>


                    <Switch>
                        <Route exact path="/" component={Frontpage} />



                        <Route path="/blogstimeline" component={BlogsTimeline} />

                        <Route path="/single/:id" component={SingleBlog} />
                    </Switch>
                </Fragment>
            </Router>

        )
    }
}

export default Navigation;