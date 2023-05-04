import { createContext, useState } from "react";

type KomaWebContextType = {
  isLogin: boolean;
  username: string;
  login: (username: string) => void;
  logout: () => void;
};

const KomaWebContext = createContext<KomaWebContextType>({
  isLogin: false,
  username: "",
  login: (username: string) => {},
  logout: () => {},
});

export default KomaWebContext;

export function KomaWebContextProvider(props: { children: React.ReactNode }) {
  const [isLogin, setLoginned] = useState(false);
  const [username, setUsername] = useState("");

  function login(username: string) {
    setUsername(username);
    setLoginned(true);
  }

  function logout() {
    setUsername("");
    setLoginned(false);
  }

  const context = {
    isLogin,
    username,
    login,
    logout,
  };

  return (
    <KomaWebContext.Provider value={context}>
      {props.children}
    </KomaWebContext.Provider>
  );
}
