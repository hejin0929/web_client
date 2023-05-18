import "antd/dist/reset.css";
import "./index.css";
import type { AppProps } from "next/app";
import StoreCentext, { store } from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreCentext.Provider value={store}>
      <Component {...pageProps} />
    </StoreCentext.Provider>
  );
}
