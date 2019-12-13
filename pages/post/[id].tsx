import React, { Fragment } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Markdown from "react-markdown";
import fetch from "isomorphic-unfetch";
import Layout from "../../components/Layout";

const initialSource = `
# This is our blog post.

  Yes. We can have a [link](/link).
  And we can have a title as well.

## This is a title

And here's the content.
`;

interface PostDetailProps {}
const PostDetail: NextPage<PostDetailProps> = () => {
  const router = useRouter();
  return (
    <Layout>
      <Fragment>
        <h2>{router.query.id}</h2>
        <div className="markdown">
          <Markdown source={initialSource} />
        </div>
        <style jsx global>{`
          .markdown {
            font-family: "Arial";
          }

          .markdown a {
            text-decoration: none;
            color: blue;
          }

          .markdown a:hover {
            opacity: 0.6;
          }

          .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        `}</style>
      </Fragment>
    </Layout>
  );
};

PostDetail.getInitialProps = async ({ query }) => {
  try {
    const post = await fetch(
      `http://localhost:4000/api/post/${query.id}`
    ).then(res => res.json());
    return {
      data: post.data
    };
  } catch (err) {
    return {
      data: ""
    };
  }
};

export default PostDetail;
