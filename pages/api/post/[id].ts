import { NextApiRequest, NextApiResponse } from "next";
// import fs from "fs";
// import path from "path";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.query.id);

    // const text = fs.readFileSync(path.join(__dirname, "./post1.markdown"), {
    //   encoding: "utf-8"
    // });
    // const text = fs.readFileSync("/test.txt", "utf8");
    console.log("-----------markdown---start");
    console.log("-----------markdown---end");

    res.status(200).json({ data: "testTxt" });
  } catch (err) {
    console.log(err);

    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
