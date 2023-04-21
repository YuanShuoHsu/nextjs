import React from "react";
import { useRouter } from "next/router";

type QueryParams = {
  slug: string[];
};

export default function Isbnslug() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  const queryParams = router.query as QueryParams;

  return (
    <div>
      <h1>Isbnslug</h1>
      <hr />
      {router.pathname && <h3>{router.pathname}</h3>}
      {queryParams.slug && <h3>{queryParams.slug.join(",")}</h3>}
    </div>
  );
}
