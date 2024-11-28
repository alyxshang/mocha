import { useEffect, useState } from "react";
import { ReactElement } from "react";
import { postLink } from "./loader";

export function Home(): ReactElement{
    const [url, setUrl] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [data, setData] = useState<string>('');
    const [isWatcherSet, setIsWatcherSet] = useState(false);
    const [watcher, setWatcher] = useState(
        {
            urlName: '',
            urlLink: '',
            baseUrl: ''
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
    useEffect(
        () => {
            if (isWatcherSet){
                const fetchData = async () => {
                    console.log(watcher.urlName, watcher.urlLink);
                    await postLink(watcher.urlName, watcher.urlLink, watcher.baseUrl)
                        .then((val) => setData(JSON.stringify(val)))
                        .catch((e) => setData(JSON.stringify(JSON.stringify({'error': e.toString()}))))
                }
                fetchData()
                setIsWatcherSet(false);
            }
        },
        [watcher, isWatcherSet]
    )
    const handleClick = (e: any) => {
        e.preventDefault();
        setWatcher(
            {
                urlName: name,
                urlLink: url,
                baseUrl: 'http://127.0.0.1:8080'

            }
        );
        setIsWatcherSet(true);
    }
    return (
        <>
         <label>{"Link Name:"}</label>
         <input onChange={handleNameChange} value={name}/>
         <label>{"Link URL:"}</label>
         <input onChange={handleUrlChange} value={url}/>
         <button onClick={handleClick}>{"Submit"}</button>
         <p>{data}</p>
        </>
    )
}

export default Home;