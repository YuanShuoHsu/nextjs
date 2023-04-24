import React from "react";
import { useRouter } from "next/router";
import { GetStaticPropsContext, GetStaticPaths } from "next";

interface BlogidProps {
  result: string;
}

export default function Blogid(props: BlogidProps) {
  const router = useRouter();
  const { result } = props;

  console.log(router.query);

  return (
    <div>
      <h1>Blogid - {result}</h1>
      <hr />
      {router.query.id && <h3>{router.query.id}</h3>}
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  console.log("/blog/[id].js -> getStaticProps is running...");

  const { params } = context;
  const blogid = params?.id as string;

  return {
    props: {
      result: blogid,
    },
  };
}

export async function getStaticPaths(context: GetStaticPaths) {
  return {
    paths: [
      { params: { id: "react" } },
      { params: { id: "vue" } },
      { params: { id: "angular" } },
    ],
    fallback: false,
  };
}
