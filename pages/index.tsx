import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const btn_click = () => {
    router.push({ pathname: "/news/[id]", query: { id: "001" } });
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Next.js</h1>
      <hr />
      <Link href={"/about"}>About</Link>
      <hr />
      <Link href={{ pathname: "news/[id]", query: { id: "001" } }}>
        新聞001
      </Link>
      <Link href={{ pathname: "news/[id]", query: { id: "002" } }}>
        新聞002
      </Link>
      <Link href={{ pathname: "news/[id]", query: { id: "003" } }}>
        新聞003
      </Link>
      <hr />
      <button className="btn btn-success" onClick={btn_click}>
        新聞001
      </button>
      <hr />
      <div
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" className="btn btn-danger">
          Left
        </button>
        <button type="button" className="btn btn-warning">
          Middle
        </button>
        <button type="button" className="btn btn-success">
          Right
        </button>
      </div>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}
