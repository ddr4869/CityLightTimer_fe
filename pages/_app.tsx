import type { AppProps } from 'next/app'
import './styles/global-styles.css'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}