import React, { useState, MouseEvent } from "react";
import Link from "next/link";

export default function About() {
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
