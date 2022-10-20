import Head from "next/head"

export default function Seo({title}:{title:string}){
    return         <Head>
    <title>{title} | 이것은 Next의 헤드 부분입니다</title>
</Head>
}