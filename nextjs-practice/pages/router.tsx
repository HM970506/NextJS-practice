import Link from "next/link"
import {useRouter} from "next/router"

export default function Routerpage(){

    const route=useRouter();

    return <nav>
        <Link href="/">index로 이동</Link>
        <Link href="id/and/slugs">id and slugs로 이동</Link>
    </nav>
}