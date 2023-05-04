import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;
  const { owner, repo } = query;

  let res_github = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  let json = await res_github.json();
  let stars = json.stargazers_count;

  res.status(200).json({
    result: "ok",
    method: req.method,
    url: req.url,
    owner,
    repo,
    stars,
  });
}
