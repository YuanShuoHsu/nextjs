import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, url } = req;
  let result = "index.ok";

  switch (req.method) {
    case "POST":
      res.status(200).json({ result, url, message: "POST", body });
      break;
    case "GET":
      res.status(200).json({ result, url, message: "GET", body });
      break;
    default:
      res.status(405).end();
      break;
  }
}
