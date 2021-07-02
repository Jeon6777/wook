import Layout from "../components/MyLayout"
import Link from 'next/link'

function getPosts() {
  return [
    { id: 'hello-brad', title: 'Hello, Brad' },
    { id: 'hi-brad', title: 'Hi, Brad' },
    { id: 'bye-brad', title: 'Bye, Brad' }
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My BLOG</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post}/>
      ))}
      <style jsx>{`
    h1, a{
      font-familly:"Arial";
    }
    ul {
      padding:3;
    }
    li{
      list-style:none;
      margin:5px 0;
    }
    a{
      text-decoration:none;
      coloe:blue;
    }
    a:hover{
      opacity:0.6;
    }
    `}
      </style>
    </ul>
  </Layout>
)

