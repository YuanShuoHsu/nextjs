import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Newsid() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>Newsid</h1>
      <Link href={"/"}>Home</Link>
      <hr />
      {router.pathname && <h3>{router.pathname}</h3>}
      {router.query.id && <h3>{router.query.id}</h3>}
    </div>
  );
}
