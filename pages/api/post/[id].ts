import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.query.id);

    const text = fs.readFileSync(
      path.join(process.env.PROJECT_DIRNAME || "", "pages/api/post/test.txt"),
      "utf8"
    );

    const md1 = fs.readFileSync(
      path.join(
        process.env.PROJECT_DIRNAME || "",
        "pages/api/post/post1.markdown"
      ),
      "utf8"
    );

    res.status(200).json({ data: text, md: md1 });
  } catch (err) {
    console.log(err);

    res.status(404).json({ statusCode: 404, message: err.message });
  }
};
