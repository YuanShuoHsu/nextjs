import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import KomaWebContext from "@/store";

export default function Admin() {
  const router = useRouter();
  const komaWebCtx = useContext(KomaWebContext);

  useEffect(() => {
    if (komaWebCtx && !komaWebCtx.isLogin) {
      console.log("未登入");
      router.push({
        pathname: "/",
      });
    }
  }, []);

  const btn_login_onclick = () => {
    komaWebCtx.logout();
    router.push({
      pathname: "/",
    });
  };

  return (
    <div className="fs-1 p-3">
      <h1>管理頁面</h1>
      <hr />
      {komaWebCtx && (
        <p>
          用戶：{komaWebCtx.username.toString()}
          <br />
          狀態：{komaWebCtx.isLogin.toString()}
        </p>
      )}
      <hr />
      <button
        className="btn btn-danger btn-lg"
        onClick={() => btn_login_onclick()}
      >
        退出
      </button>
    </div>
  );
}
