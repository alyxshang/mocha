import { useState } from "react";
import { ReactElement } from "react";
import { postLink } from "./loader";

export function Home(): ReactElement{
    const [url, setUrl] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [data, setData] = useState(
        {
            data: '',
            loading: true
        }
    );
    const handleNameChange = (e: any) => {
        e.preventDefault();
        setName(e.target.value);
    }
    const handleUrlChange = (e: any) => {
        e.preventDefault();
        setUrl(e.target.value);
    }
    const handleClick = (e: any) => {
        e.preventDefault();
        console.log(name);
        console.log(url);
        const fetchData = async () => {
            await postLink(name, url, 'http://127.0.0.1:8080')
                .then((val) => setData({ data: JSON.stringify(val), loading: false}))
                .catch((e) => setData({ data: JSON.stringify({'error': e.toString()}), loading: false}))
        }
        fetchData()
    }
    return (
        <>
         <label>{"Link Name:"}</label>
         <input onChange={handleNameChange} value={name}/>
         <label>{"Link URL:"}</label>
         <input onChange={handleUrlChange} value={url}/>
         <button onClick={handleClick}>{"Submit"}</button>
         <p>{data.loading ? '' : data.data}</p>
        </>
    )
}

export default Home;