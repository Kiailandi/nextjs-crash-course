import { server } from '../config';
import Head from 'next/head';
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
      <Head>
        <title>WebDev News</title>
        <meta name="keyworkds" content="web development, programming" />
      </Head>
      <PostList posts={posts} />
    </div>
  )
}
