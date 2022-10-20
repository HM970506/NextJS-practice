import NavBar from "../components/NavBar";
import Seo from "../components/Seo";

//children이란? 하나의 컴포넌트를 다른 컴포넌트 안에 넣게해주는 리액트 제공 기능

//img의 url등을 넣을때 위치는 무조건 public에 고정된다. 절대/상대경로 안해줘도 됨!

export default function Layout({children}:any){
    return(<>

    <NavBar/>
    <div>{children}</div>
    </>)
}