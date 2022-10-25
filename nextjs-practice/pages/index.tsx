import Head from "next/head"
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Seo from "../components/Seo"
//🙂 helmet에 그 많은 script를 우겨넣던 시간은 대체 무엇이었는가?
//export default를 꼭 붙여야 한다.
//라우터 없이 pages에 추가하는 것만으로 url을 표현할 수 있다...
//🙂내가 리액트 돔 라우터에 썼던 그 많은 시간은 대체 무엇이었는가....
//jsx가 기본적으로 동작한다. 훅 쓰고싶으면 react를 가져오긴 해야 함
//nextjs는 html을 가지고 있어 js가 끊겨도 html만은 보여줄 수 있다!
//SEO에 좋음...👍 



export default function Home({results}:any){
    const router= useRouter();

    //link와 a태그는 텍스트만 담고 있어야 한다.
    //이미지 등을 넣고 싶은 땐 router의 push기능을 이용하자
    const onClick=(id:string, title:string)=>{
        /*
        router.push({  //놀랍게도!!! string이 아니라 객체를 push해줄수도있다...!!!
            pathname: `/movies/${id}`,
        query: {title: title} //이 내용이 get처럼 들어간당
        }, `/movies/${id}`); //마스킹 기능. 실제로는 이 url이 보인다
        //이미 로딩된 객체를 보내주므로 좀 더 속도가 빠르다!
        //그리고 받은객체가 없는 시크릿모드에서는 해당 값이 표시되지 않는다
        */

        router.push(`/movies/${title}/${id}`);
    }
    return (
        <div>
            <Seo title="Home"/>
            <h1>Home</h1>
            {results?.map((movie:any) =>(
                <div onClick={()=>onClick(movie.id, movie.title)}>
                    <div>영화 이미지 들어가는 곳</div>

                <div key={movie.id}>
                <Link href={`/movies/${movie.id}`} key={movie.id}>
                    <a>   <h4>{movie.original_title}</h4></a>
                    </Link>
                </div>
          
            </div>
            ))}
    </div>
    )
}


//pre-render란?
//사전에 HTML파일들을 만든다는의미!
//이는 퍼포먼스와 검색SEO를 향상 시킬 수 있다
//서버사이드 렌더링을 하는 방법
//해당 함수의 이름은 고정.
export async function getServerSideProps(){
    //서버에서만 돌아가는 코드
    //유저에게는 보이지 않는 과정!

    const { results } = await ( await fetch(`http://localhost:3000/api/movies`)).json();
    return {props: {results}};
}