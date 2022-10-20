//next js는 이곳을 가장 먼저 봅니다!

import NavBar from "../components/NavBar";
import Layout from "./Layout";

//여기서는 Layout안에 있는 것들이 children이 된다!
export default function MyApp({Component, pageProps}:any){
    return <Layout>
        <Component {...pageProps}/>
        <div>이곳에 전역적인 내용이 들어갑니다</div>
    </Layout>
}