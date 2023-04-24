import React, { useState, MouseEvent } from "react";
import Link from "next/link";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface AboutProps {
  sitename: string;
}

export default function About(props: AboutProps) {
  const { sitename } = props;

  const [message, setMessage] = useState<string>("");

  const handlerEvent = async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    // console.log(res, data);
    setMessage(JSON.stringify(data, null, 4));
  };

  const btn_click = async (event: MouseEvent<HTMLButtonElement>) => {
    await handlerEvent();
  };

  return (
    <div>
      <h1>About</h1>
      <hr />
      <h1 className="p-3">About - {sitename}</h1>
      <hr />
      <Link href={"/"}>Home</Link>
      <div>
        <button className="btn btn-success" onClick={(e) => btn_click(e)}>
          數據取得
        </button>
        <pre>{message}</pre>
      </div>
    </div>
  );
}

export async function getServerSideProps(context:  GetServerSidePropsContext) {
  console.log("getServerSideProps is running...");

  const { params, req, res } = context;

  // console.log(req);

  // console.log("req.headers",req.headers)
  // console.log("req.method",req.method)

  console.log(req.constructor.name)
  console.log(res.constructor.name)

  return {
    props: {
      sitename: "小碩學 Next.js",
    },
  };
}
