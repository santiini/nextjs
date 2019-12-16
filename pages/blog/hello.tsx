import withPost from "../../lib/with-post";

export default withPost({
  title: "Hello Next.js",
  content: `
## Hello Test

add following content in a file

~~~js
export default () => (
  <div>
    <p>Next.js is great!</p>
  </div>
)
~~~
  `
});
