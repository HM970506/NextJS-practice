import {useRouter} from "next/router"

export default function Idpage(){

    const router=useRouter();
    const {id}=router.query;

    return <h2>event/{id} 링크를 담당합니다.</h2>;
}