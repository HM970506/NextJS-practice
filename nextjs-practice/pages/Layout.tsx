import NavBar from "../components/NavBar";

//children이란? 하나의 컴포넌트를 다른 컴포넌트 안에 넣게해주는 리액트 제공 기능

export default function Layout({children}:any){
    return(<>
    <NavBar/>
    <div>{children}</div>
    </>)
}