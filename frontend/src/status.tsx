/*
Mocha Frontend by Alyx Shang.
Licensed under the FSL v1.
*/

'use strict';

// Importing the "ReactElement"
// entity for type annotation.
import { ReactElement } from "react";

// Importing the "StatusProps" interface
// to use props for the "Status" component.
import { StatusProps } from "./types";

/**
 * Returns the component for the giving status feedback.
 * @param {StatusProps} props The props to use for the component.
 * @returns {number} Returns the component for the giving status feedback.
 */
export function Status(props: StatusProps): ReactElement{
    return (
        <div className="status" style={{backgroundColor: props.color}}>
         <h2 className="status">{props.statusHeading}</h2>    
         <p className="status">{props.statusText}</p>    
        </div>
    );
}

// Exporting the "Status" component.
export default Status;