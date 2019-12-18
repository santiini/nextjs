/**
 * 使用 micro-cors 解决跨域
 */
import { NextApiRequest, NextApiResponse } from "next";
import Cors from "micro-cors";
import { RequestHandler } from "micro";

const cors = Cors({
  //  allowedMethods: ['GET', 'HEAD'],
  allowMethods: ["GET", "Head"]
});

function endPoint(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  res.status(200).json({
    code: 200,
    message: "success"
  });
}

export default cors(endPoint as RequestHandler);

/**
 * TS 常见问题: 函数的比较和兼容， 这里主要是函数参数的问题
 *   问题: RequestHandler 和 (req: NextApiRequest, res:  NextApiResponse) => any 的不兼容问题解决
 *   理论:
 *     1. RequestHandler: (req: IncomingMessage, res: ServerResponse) => any;
 *     2. NextApiRequest = IncomingMessage & { ... }
 *     3. NextApiResponse = ServerResponse & { ... }
 *     4. 这里，RequestHandler 的参数拓展函数 (req: IncomingMessage, res: ServerResponse) => any 无法兼容，
 *   解决:
 *    1. 使用 as: endPoint as RequestHandler
 *    2. 在 endPoint 内部，兼容 req as NextApiRequest, res as NextApiResponse
 *
 *   参考地址: https://www.typescriptlang.org/docs/handbook/type-compatibility.html
 */
