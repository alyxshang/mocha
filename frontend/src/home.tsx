/*
Mocha Frontend by Alyx Shang.
Licensed under the FSL v1.
*/

'use strict';

// Importing the "useState" hook
// to mutate stateful variables.
import { useState } from 'react';

// Importing the "LinkObj" interface
// to receive info about a saved link.
import { LinkObj } from "./types";

// Importing the "useEffect" hook
// to fetch asynchronous data.
import { useEffect } from "react";

// Importing the "postLink"
// function to post links.
import { postLink } from "./loader";

// Importing the "HeadingProps" interface
// to use props for the "Heading" component.
import { HomeProps } from "./types";

// Importing the "ReactElement"
// entity for type annotation.
import { ReactElement } from 'react';

// Importing the "Spacer" component to
// render a spacer.
import { Spacer } from './spacer.tsx';

// Importing the "Status" component to
// render information regarding operation
// status.
import { Status } from './status.tsx';

// Importing the "Heading" component
// to render the page heading.
import { Heading } from './heading.tsx';

// Importing the "Pretext" component to
// render a guide.
import { Pretext } from './pretext.tsx';

/**
 * Returns the main component for the main home page.
 * @returns {ReactElement} Returns the widget tree for the main page.
 */
export function Home(props: HomeProps): ReactElement{
    const [url, setUrl] = useState<string>('');
    const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
    const [name, setName] = useState<string>('');
    const [statusHeading, setStatusHeading] = useState<string>('');
    const [statusText, setStatusText] = useState<string>('');
    const [isWatcherSet, setIsWatcherSet] = useState(false);
    const [statusColor, setStatusColor] = useState<string>('#AEBCC4');
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
                        .then(
                            (val) => {
                                setStatusHeading(props.successHeading);
                                let values: LinkObj = val as LinkObj;
                                let msg: string = props.linkPrefix + ': ' + values.id;
                                setStatusText(msg);
                                setStatusColor('#A9DDB1');
                                setIsLoadingData(false);
                            }

                        )
                        .catch(
                            (_e) => {
                                setStatusHeading(props.failureHeading);
                                setStatusText(props.failureMessage);
                                setIsLoadingData(false);
                                setStatusColor('#FF5733');
                            }
                        )
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
                baseUrl: props.baseUrl

            }
        );
        setIsWatcherSet(true);
    }
    return (
        <>

         <Heading name={props.appName}/>

         <div className="main">

          <Pretext heading={props.guideHeading} pretext={props.guideText}/>

          <div className="content">
           <label>{props.nameLabel}</label>
           <input onChange={handleNameChange} value={name}/>
           <label>{props.linkLabel}</label>
           <input onChange={handleUrlChange} value={url}/>
           <button onClick={handleClick}>{props.submitButtonLabel}</button>
          </div>

          <Spacer/>

          {isLoadingData && <Status color={statusColor} statusHeading={statusHeading} statusText={statusText}/>}         

         </div>
        </>
    )
}

// Exporting the "Home" component.
export default Home;