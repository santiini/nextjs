import React, { Fragment } from "react";
import { NextPage } from "next";
import Layout from "../components/Layout";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
}

const PostLink: NextPage<{ post: Post }> = ({ post }) => (
  <li>
    <Link href="/post/[id]" as={`/post/${post.id}`}>
      {post.title}
    </Link>
  </li>
);

interface PostPageProps {
  posts: Post[];
}
const PostPage: NextPage<PostPageProps> = props => {
  return (
    <Layout>
      <Fragment>
        <h1>Blogs --- markdown </h1>
        <ul>
          {props.posts.map(item => (
            <PostLink key={item.id} post={item} />
          ))}
        </ul>
        <style jsx>{`
          a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </Fragment>
    </Layout>
  );
};

PostPage.getInitialProps = () => {
  return {
    posts: [
      { id: "hello-next", title: "Hello Next" },
      { id: "learn-next", title: "Learn Next" },
      { id: "deply-next", title: "Deploy Next" }
    ]
  };
};

export default PostPage;
