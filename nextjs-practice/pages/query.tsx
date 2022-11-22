import {useQuery} from "react-query"
import axios from "axios"
import { useEffect, useState } from "react";




export default function Query(){
    const [nowid, setId]=useState("");
    //                  쿼리 이름, 데이터 패칭 비동기함수, 리패칭 주기

    const url="https://jsonplaceholder.typicode.com/posts?_limit=10&_page=0"
    async function titleAxios(){
        const response=await axios.get(url);
        return response.data;
    }
    
    
    async function commentAxios(){
        const commentURL=`https://jsonplaceholder.typicode.com/comments?postId=${nowid}`
        const response=await axios.get(commentURL);
        return response.data;
    }

    const post =useQuery("posts", titleAxios);
    const comments=useQuery(['comment', nowid], commentAxios);

    const onclick=(Id:string)=>{
        setId(Id);
    }

    useEffect(()=>{
        
        if(comments.data) setId(nowid);
    }, [nowid]);

    return <div>
        {post.isLoading ? "Loading..." : post.data.map((x:any, key:number)=>
        <div key={key} onClick={()=>onclick(x.id)}>{x.title}</div>)}
        {comments.isFetching? "Fetching..." : comments.data.map((x:any, key:number)=>
        <div key={key}>{x.body}</div>)}
        
    </div> 
}