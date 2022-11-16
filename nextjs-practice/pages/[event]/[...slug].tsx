import {useRouter} from "next/router"

export default function Idpage(){

    const router=useRouter();
    const slug=router.query.slug;

    console.log(router.query);

    return <div>
        <h2>event/.../slug링크를 담당합니다</h2>
        <h3>{Array.isArray(slug) ? slug.map((x:String, key)=><div key={key}>받은 slug는 {x}입니다</div>) :
        slug}</h3>
    </div>
}