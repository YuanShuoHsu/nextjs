import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, url } = req;
  let result = "[id].ok";

  switch (req.method) {
    case "DELETE":
      res.status(200).json({ result, url, message: "DELETE", query });
      break;
    case "GET":
      res.status(200).json({ result, url, message: "GET", query });
      break;
    case "PUT":
      res.status(200).json({ result, url, message: "PUT", query });
      break;
    default:
      res.status(405).end();
      break;
  }
}
