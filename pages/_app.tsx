import '../styles/globalsSiteWeb1.css'
import '../styles/persoSiteWeb1.css'
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
