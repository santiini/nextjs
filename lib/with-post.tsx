import React from "react";
import marked from "marked";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
// import Highlight from "react-highlight";

// lazy-component
const Highlight = dynamic(() => import("react-highlight"));

marked.setOptions({
  gfm: true,
  // tables: true,
  breaks: true // 需要 gfm 为 true, <br> 换行
});

interface WithPostOptions {
  title?: React.ReactNode;
  content: string;
}
// export default function withPost(options: WithPostOptions) {
//   return class PostPage extends React.Component {
//     render() {
//       return (
//         <Layout>
//           <h1>{options.title}</h1>
//           <div>
//             <Highlight innerHTML>{marked(options.content)}</Highlight>
//           </div>
//         </Layout>
//       );
//     }
//   };
// }

export default function withPost(options: WithPostOptions) {
  return class PostPage extends React.Component {
    renderMarkdown = () => {
      // 匹配文本内容
      if (/~~~/.test(options.content)) {
        return (
          <div>
            <Highlight innerHTML>{marked(options.content)}</Highlight>
          </div>
        );
      }

      return (
        <div dangerouslySetInnerHTML={{ __html: marked(options.content) }} />
      );
    };

    render() {
      return (
        <Layout>
          <h2>{options.title}</h2>
          {this.renderMarkdown()}
        </Layout>
      );
    }
  };
}
