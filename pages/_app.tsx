import { RecoilRoot } from "recoil";

import type { AppProps } from "next/app";
import "./styles/global-styles.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />;
    </RecoilRoot>
  );
}
