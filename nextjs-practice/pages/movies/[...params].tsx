import { useRouter } from "next/router";

interface Params{
    title: string,
    id: string
}

//변수를 url에 넣는 방법
export default function Detail({params}){
    const router=useRouter();
    const [title, id]=params;//아직 서버에서는 배열이 아님!
    console.log(router) //여기에서 query라는 속성에 id:url끝값이 들어있다!
    return <div>
        <h4>{title} : {id}</h4>
    </div>
}

//서버사이드 하고 싶은 부분에 그냥 다 때려넣으면 된다~
export async function getServerSideProps({params}:any){ //서버사이드 컨텍스트를 제공해줌!
    return {props: {title: params.title, id:params.id}};
}
