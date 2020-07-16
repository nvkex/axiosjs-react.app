import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './Blog.css';
// import Axios from 'axios';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render() {
        return (
            <div className = "Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/" 
                                exact
                                activeClassName="active"
                                activeStyle={{
                                    textDecoration:'underline'
                                }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search:'?q=hello'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>    
                <Route path = "/" exact component={Posts} />
                <Route path = "/new-post" component={NewPost} />            
            </div>
        );
    }
}

export default Blog;