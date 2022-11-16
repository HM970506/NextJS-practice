import Head from "next/head"

export default function HeadTest({title}:{title:string}){

    return <Head> <title>{title}</title></Head>
}