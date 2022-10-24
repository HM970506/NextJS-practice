import { useRouter } from "next/router";
//변수를 url에 넣는 방법
export default function Detail(){
    const router=useRouter();
    console.log(router) //여기에서 query라는 속성에 id:url끝값이 들어있다!
    return "detail";
}

