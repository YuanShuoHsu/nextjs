import React, { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface SiteInfo {
  name: string;
  youtube: string;
}

export default function SiteInfo() {
  const [siteInfo, setSiteInfo] = useState<SiteInfo>({ name: "", youtube: "" });

  const { data, error } = useSWR("/api/hello", fetcher);
  
  useEffect(() => {
    if (data) {
      console.log(data);
      setSiteInfo(data);
    }
  }, [data]);

  if (error) {
    console.error(error);
    return <div>數據取得失敗！</div>;
  }

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch("/api/hello");
  //     const data = await res.json();
  //     console.log(data);
  //     setSiteInfo(data);
  //   })();
  // }, []);

  return (
    <div>
      <h1>SiteInfo</h1>
      <hr />
      {siteInfo && (
        <>
          <h2>{siteInfo.name}</h2>
          <h3>{siteInfo.youtube}</h3>
        </>
      )}
    </div>
  );
}
