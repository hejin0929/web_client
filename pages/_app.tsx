import "antd/dist/reset.css";
import "./index.css";
import type { AppProps } from "next/app";
import store from "@/store/index";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
