import {Header} from "../components/header.tsx";
import {InputForm} from "../components/form.tsx";
import {Description} from "../components/description.tsx";

export default function Home() {
  return (
    <>
     <Header name={"MOCHA"}/>
     <div className="main">
      <Description heading={"A link-shortening app."} description={"Type a name and your link and click \"Submit\"!"}/>
      <InputForm nameLabel={"Name"} urlLabel={"Link"} buttonLabel={"Submit"}/>
     </div>
    </>
  )  
}
