import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
// import Axios from 'axios';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
import FullPost from './FullPost/FullPost';

// LAZY LOADING
// Load a component only when needed.
const AsycNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: false
    }

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    textDecoration: 'underline'
                                }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?q=hello'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ?<Route path="/new-post" component={AsycNewPost} /> : null }
                    <Route path="/posts" exact component={Posts} />
                    <Redirect from="/" to="/posts" />
                    <Route path="/posts/:id" exact component={FullPost} />
                    <Route render ={ () => <h1 align = "center">Page Not Found</h1>}/>
                </Switch>

            </div>
        );
    }
}

export default Blog;