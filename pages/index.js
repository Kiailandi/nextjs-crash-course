import { server } from '../config';
import PostList from '../components/PostList';

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const posts = await res.json();
//   return {
//     props: {
//       posts
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/posts`);
  const posts = await res.json();

  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }) {
  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}
