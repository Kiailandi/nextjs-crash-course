import React from 'react';
import postStyles from '../styles/Post.module.css';

const PostList = ({ posts }) => {
    return (
        <div className={postStyles.grid}>
            {posts.map(post => <h3>{post.title}</h3>)}
        </div>
    );
}

export default PostList;