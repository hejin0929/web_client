import "antd/dist/reset.css";
import "./index.css";
import type { AppProps } from "next/app";
import StoreCentext, { store } from "@/store";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreCentext.Provider value={store}>
      <RecoilRoot>
        <main>
          <Component {...pageProps} />
        </main>
      </RecoilRoot>
    </StoreCentext.Provider>
  );
}
