
import HeadTest from "../components/headTest";
import PropsTest from "../components/propsTest";
import Query from "./query";


export default function HomePage() {
  console.log("수정");
  
  return (
    <div>
   <HeadTest title="index"/>
    <h1>메인페이지</h1>
    <PropsTest title="this is title"/>
    </div>
  )
}
