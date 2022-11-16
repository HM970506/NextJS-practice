import '../styles/globals.css'
import Layout from '../components/Layout';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
        <Layout/>
        여기는 앱입니다
       <Component {...pageProps} />
    </>
}