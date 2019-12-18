import React, { useEffect, useRef } from "react";
import { NextPage } from "next";
import Router, { withRouter, NextRouter, useRouter } from "next/router";
import Layout from "components/Layout";
import { Button } from "antd";
import "./index.less";

interface ShallowRouting {
  router: NextRouter;
}
const ShallowRouting: NextPage<ShallowRouting> = props => {
  const { router } = props;
  const savedProps = useRef<ShallowRouting>(props);
  const usedRouter = useRouter();

  const toShallow = () => {
    const href = "/shallowRouting?name=test1";
    const as = href;
    // 形式1： 利用 Router 跳转
    Router.push(href, as, { shallow: true });
  };

  const toShallow2 = () => {
    const href = "/shallowRouting?name=test2";
    const as = href;
    // 形式2： withRouter 中的 router
    props.router.push(href, as, { shallow: true });
  };

  const toShallow3 = () => {
    const href = "/shallowRouting?name=test3";
    const as = href;
    // 形式2： withRouter 中的 router
    usedRouter.push(href, as, { shallow: true });
  };

  useEffect(() => {
    // 避免重复的逻辑
    if (router.query.name != savedProps.current.router.query.name) {
      savedProps.current = {
        ...savedProps,
        router
      };
      console.log("changed shallow routing", router);
    }
  }, [router]);

  return (
    <Layout>
      <h3>Shallow Routing</h3>
      <div className="shallow">
        <Button onClick={toShallow}>1. To /shallowRouting?name=test1</Button>
      </div>
      <div className="shallow">
        <Button onClick={toShallow2}>2. To /shallowRouting?name=test2</Button>
      </div>
      <div className="shallow">
        <Button onClick={toShallow3}>3. To /shallowRouting?name=test3</Button>
      </div>
    </Layout>
  );
};

export default withRouter(ShallowRouting);

/**
 * TS--withRouter
 * export declare type ExcludeRouterProps<P> = Pick<P, Exclude<keyof P, keyof WithRouterProps>>;
 * export default function withRouter<P extends WithRouterProps, C = NextPageContext>(ComposedComponent: NextComponentType<C, any, P>): React.ComponentType<ExcludeRouterProps<P>>;
 */
