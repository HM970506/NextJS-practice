//next js는 이곳을 가장 먼저 봅니다!

import NavBar from "../components/NavBar";
import Layout from "./Layout";

//여기서는 Layout안에 있는 것들이 children이 된다!
//pageProps에 getServerSideProps()의 리턴인 props:result가 들어간다
export default function MyApp({Component, pageProps}:any){
    return <Layout>
        <Component {...pageProps}/>
        <div>이곳에 전역적인 내용이 들어갑니다</div>
    </Layout>
}

//home에서는 ssr (html다 만들고 감), about에서는 csr(html 나중에 js로 만듦)