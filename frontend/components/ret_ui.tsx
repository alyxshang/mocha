import { baseUrl } from '../config.ts';
import { useEffect } from "preact/hooks";
import { useState } from 'preact/hooks';
import { PostStatus } from "./status.tsx";
import { LinkObj } from "../lib/units.ts";
import { fetchLink } from "../lib/loader.ts";
import {DisplayData} from "./display.tsx";

interface RetrievalProps {
    id: string
}

export function RetrievalDisplay(props: RetrievalProps){
    const [status, setStatus] = useState<number>();
    const [data, setData] = useState<LinkObj>();
    useEffect(
        () => {
            fetchLink(props.id, baseUrl).then(
                (result) => {
                    setData(result.ok);
                    setStatus(0)
                }
            ).catch(
                (_e) => {
                    setStatus(1);
                }
            )
        }
    );
    if (status === 0){
        return (
            <>
             <DisplayData url={data!.link_url} name={data!.name} id={data!.id} time={data!.date_time}/>
            </>
        )
    }
    else {
        return (
            <>
             <PostStatus heading={"Result"} text={"Could not retrieve data."}/>
            </>
        )
    }
}

export default RetrievalDisplay;