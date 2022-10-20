import Link from "next/link";
//a태그 대신 nextjs에서는 link를 이용합시다.
//새로고침이 안돼서 훨씬 빠르다 👍 !
export default function NavBar(){
    return(
        <nav>
           <Link href="/"><a>Home</a></Link> 
           <Link href="/about"><a>About</a></Link> 
        </nav>
    )
}