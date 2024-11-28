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
    const [name, setName] = useState<string>('');
    const [isWatcherSet, setIsWatcherSet] = useState(false);
    const [statusText, setStatusText] = useState<string>('');
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [statusHeading, setStatusHeading] = useState<string>('');
    const [statusColor, setStatusColor] = useState<string>(props.loadingColor);
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
                    await postLink(watcher.urlName, watcher.urlLink, watcher.baseUrl)
                        .then(
                            (val) => {
                                setStatusHeading(props.successHeading);
                                let values: LinkObj = val as LinkObj;
                                let msg: string = props.linkPrefix + ': ' + values.id;
                                setStatusText(msg);
                                setStatusColor(props.successColor);
                                setDataLoaded(true);
                            }

                        )
                        .catch(
                            (_e) => {
                                setStatusHeading(props.failureHeading);
                                setStatusText(props.failureMessage);
                                setStatusColor(props.errorColor);
                                setDataLoaded(true);
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
        setDataLoaded(false);
    }
    return (
        <>

         <Heading name={props.appName}/>
         <div className="main">
          <Pretext heading={props.guideHeading} pretext={props.guideText}/>
          <div className="content">
           <label>{props.nameLabel}</label>
           <input type="text" onChange={handleNameChange} value={name}/>
           <label>{props.linkLabel}</label>
           <input type="text" onChange={handleUrlChange} value={url}/>
           <button className="submit" onClick={handleClick}>{props.submitButtonLabel}</button>
          </div>
          <Spacer/>
          {dataLoaded ? <Status statusHeading={statusHeading} statusText={statusText} color={statusColor}/>: '' }      

         </div>
        </>
    )
}

// Exporting the "Home" component.
export default Home;