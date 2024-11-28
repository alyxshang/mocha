/*
Mocha Frontend by Alyx Shang.
Licensed under the FSL v1.
*/

'use strict';

// Importing the "useState" hook
// to mutate stateful variables.
import { useState } from "react";

// Importing the "LinkObj" interface
// to receive info about a saved link.
import { LinkObj } from "./types";

// Importing the "Link" component to
// render a link.
import { Link } from './link.tsx';

// Importing the "useEffect" hook
// to fetch asynchronous data.
import { useEffect } from "react";

// Importing the "ReactElement"
// entity for type annotation.
import { ReactElement } from "react";

// Importing the "fetchLink"
// function to fetch links.
import { fetchLink } from "./loader";

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

// Importing the "usePrams"
// hook to read URL parameters.
import { useParams } from "react-router";

// Importing the "RetrievalProps" interface
// to use props for the "RetrieveData" component.
import { RetrievalProps } from "./types";

export function RetrieveData(props: RetrievalProps): ReactElement{
    let params = useParams();
    const [data, setData] = useState<LinkObj>();
    const [loadingColor, setLoadingColor] = useState<string>(props.loadingColor);
    const [statusHeading, setStatusHeading] = useState<string>(props.loadingStatusHeading);
    const [statusText, setStatusText] = useState<string>(props.loadingStatusText);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(
        () => {
            const fetchData = async () => {
                await fetchLink(params.id!, props.baseUrl)
                    .then(
                        (val) => {
                            let aData: LinkObj = val as LinkObj;
                            setData(aData);
                            setIsLoading(false)
                        }
                    )
                    .catch(
                        (_e) => {
                            setStatusHeading(props.errorLoadingHeading);
                            setStatusText(props.errorLoadingText);
                            setLoadingColor(props.errorColor);                            
                        }
                        
                    )
            }
            fetchData()
        }
    )
    return (
        <>
         <Heading name={props.name}/>
         <div className="main">
          <Pretext heading={props.heading} pretext={props.pretext}/>
          {isLoading ? <Link 
                name={data!.name} 
                linkLabel={props.linkLabel} 
                link={data!.link_url} 
                timeSubmitted={props.timeSubmitted} 
                time={data!.date_time} 
                shaLabel={props.shaLabel} 
                shasum={data!.shasum} 
                idLabel={props.idLabel} 
                id={data!.id}
                visitLabel={props.visitLabel}
            />: 
            <Status 
                color={loadingColor} 
                statusHeading={statusHeading} 
                statusText={statusText}
            />}
            <Spacer/>
         </div>
        </>
    );
}

export default RetrieveData;