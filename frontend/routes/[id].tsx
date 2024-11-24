import { PageProps } from "$fresh/server.ts";
import {Header} from "../components/header.tsx";
import {RetrievalDisplay} from "../components/ret_ui.tsx";

export function IdPage(props: PageProps){
    const { id } = props.params;
    return (
        <>
         <Header name={"MOCHA"}/>
         <div className="main">
          <RetrievalDisplay id={id}/>
         </div>
        </>
    )
}