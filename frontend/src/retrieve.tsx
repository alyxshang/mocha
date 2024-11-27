import { useState } from "react";
import { useEffect } from "react";
import { ReactElement } from "react";
import { fetchLink } from "./loader";
import { useParams } from "react-router";

export function RetrieveData(): ReactElement{
    // http://localhost:5173/244F
    let params = useParams();
    const [data, setData] = useState<string>('loading');
    useEffect(
        () => {
            const fetchData = async () => {
                await fetchLink(params.id!, 'http://127.0.0.1:8080')
                    .then((val) => setData(JSON.stringify(val)))
                    .catch((e) => setData(JSON.stringify({'error': e.toString()})))
            }
            fetchData()
        }
    )
    return (
        <p>{data}</p>
    );
}

export default RetrieveData;