import '../styles/globals.css'
import Layout from '../components/Layout';
import type { AppProps } from 'next/app'
import {QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
//클라이언트, 즉 사용자를 만들고..
const queryClient = new QueryClient();

//이후에 공급자<QueryClientProvider>를 추가해 준다!
//이렇게 하면 이제 리액트 쿼리 훅을 사용할 수 있음..

export default function App({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}>
        <Layout/>
        여기는 앱입니다
       <Component {...pageProps} />
       <ReactQueryDevtools/>
    </QueryClientProvider>
}