import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts(); 
    }

    render() {
        const postItems = this.props.posts.map(post => (
            // "put in a key in your div or react will bitch about it"
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: propTypes.func.isRequired, 
    posts: propTypes.array.isRequired
};

const mapStateToProps = state => ({
    posts: state.posts.items
})  

export default connect(mapStateToProps, { fetchPosts })(Posts);
