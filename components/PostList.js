import PostItem from './PostItem';
import postStyles from '../styles/Post.module.css';

const PostList = ({ posts }) => {
    return (
        <div className={postStyles.grid}>
            {posts.map(post => <PostItem key={post.id} post={post} />)}
        </div>
    );
}

export default PostList;