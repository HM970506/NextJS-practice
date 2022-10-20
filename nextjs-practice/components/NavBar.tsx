import Link from "next/link";
import { useRouter } from "next/router";
//a태그 대신 nextjs에서는 link를 이용합시다.
//새로고침이 안돼서 훨씬 빠르다 👍 !
//link에는 href만을 넣어주고, 기타 css등 속성은 a쪽에 넣어주어야 함.

export default function NavBar(){
    const route=useRouter(); //next의 훅이다. next에 기본탑재되어있음
    return(
        <nav>
           <Link href="/"><a>Home</a></Link> 
           <Link href="/about"><a>About</a></Link> 
        </nav>
    )
}

//🙂 라이브러리 버전을맞추느라 고생했던 지난날들은 무엇이었나....