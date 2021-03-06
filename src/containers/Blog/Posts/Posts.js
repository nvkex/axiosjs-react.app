import React, { Component } from 'react';
import Axios from '../../../axios';
// import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        Axios.get('/posts')
            .then(response => {
                console.log(response);
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return { ...post, author: 'nvkex' };
                });
                this.setState({ posts: updatedPosts });
            })
            .catch(error => {
                console.log(error);
                // this.setState({ error: true });
            });

    }

    postSelectedHandler(id) {
        this.props.history.push({pathname: '/' +id});
        // this.props.history.push('/' +id);
    }

    render() {

        let posts = <p style={{ textAlign: 'center', color: 'red' }}>Something went wrong!!</p>

        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                // <Link to={'/' + post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)} 
                    />
                /* </Link> */
                );
            });
        }
        return (

            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;