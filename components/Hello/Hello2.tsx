/**
 * 导出函数组件
 */
import { NextPage } from "next";

interface Hello2Props {
  name: string;
}
export const Hello2: NextPage<Hello2Props> = props => (
  <div>
    <h3>Hello2</h3>
    <p>{props.name}</p>
  </div>
);
