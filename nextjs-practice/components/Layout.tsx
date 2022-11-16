import HeadTest from "./headTest";
import type { AppProps } from 'next/app'
export default function Layout({props}:any){
    return <>
        <HeadTest title="title"/>
        {props}
    </>
}