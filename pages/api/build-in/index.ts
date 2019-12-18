import { NextApiRequest, NextApiResponse } from "next";

/**
 * nextjs 的内置插件，用以解析 request
 *   1. req.cookies: cookies, 默认 {}
 *   2. req.query: query string, 默认是 {}
 *   3. req.body: content-type 解析 body, 默认是 null
 */
export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.method);
  console.log(req.cookies);
  console.log(req.query);
  console.log(req.body);

  res.status(200).json({
    code: 200,
    message: "success"
  });
};

// config 导出，用以 middlewares
export const config = {
  api: {
    // 默认会自动解析 req.body, 但如果需要原始的 body 作为 Stream 解析时，可以关闭 bodyParser: false
    // bodyParser: false,
    bodyParser: {
      // body 内容的大小限制
      sizeLimit: "1mb"
    }
  }
};
