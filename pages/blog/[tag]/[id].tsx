import React from "react";
import { useRouter } from "next/router";

export default function Blogtagid() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>Blogtagid</h1>
      <hr />
      {router.pathname && <h3>{router.pathname}</h3>}
      {router.query.id && <h3>{router.query.id}</h3>}
    </div>
  );
}
