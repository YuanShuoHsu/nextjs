import { GetServerSidePropsContext } from "next";
import React from "react";

interface UseridProps {
  userid: string;
}

export default function Userid(props: UseridProps) {
  const { userid } = props;

  return (
    <div>
      <h1>Userid - {userid}</h1>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log("/user/[id].tsx -> getServerSideProps is running");

  const { params } = context;
  const userid = params?.id;

  return {
    props: {
      sitename: "小碩學 Next.js",
      userid,
    },
  };
}
