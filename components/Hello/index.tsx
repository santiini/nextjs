/**
 * 导出函数组件
 */
import { NextPage } from "next";

interface HelloProps {
  name: string;
}
const Hello: NextPage<HelloProps> = props => (
  <div>
    <h3>Hello</h3>
    <p>{props.name}</p>
  </div>
);

export default Hello;
