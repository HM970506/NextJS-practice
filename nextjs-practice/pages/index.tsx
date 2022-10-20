import Head from "next/head"
import { useEffect, useState } from "react";
import Seo from "../components/Seo"
//🙂 helmet에 그 많은 script를 우겨넣던 시간은 대체 무엇이었는가?

const API_KEY="ef84351b94903c34ce113fddd7775209";

export default function Home(){
    const [movies, setMovies]=useState([]);
    useEffect(()=>{
        (async()=>{
            const response= await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
            const {results}=await response.json();
            console.log(results);
            setMovies(results); //이렇게 하지 말랬는데.....
        })();
       
    },[])

    return (
        <div>
            <Seo title="Home"/>
            <h1>Home</h1>
        {!movies && <h4>Loading...</h4>}

            {movies?.map((movie:any) =>(
            <div key={movie.id}>
            <h4>{movie.original_title}</h4>
            </div>))}
    </div>
    )
}

//export default를 꼭 붙여야 한다.
//라우터 없이 pages에 추가하는 것만으로 url을 표현할 수 있다...
//🙂내가 리액트 돔 라우터에 썼던 그 많은 시간은 대체 무엇이었는가....
//jsx가 기본적으로 동작한다. 훅 쓰고싶으면 react를 가져오긴 해야 함
//nextjs는 html을 가지고 있어 js가 끊겨도 html만은 보여줄 수 있다!
//SEO에 좋음...👍 