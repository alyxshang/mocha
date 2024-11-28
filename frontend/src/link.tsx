/*
Mocha Frontend by Alyx Shang.
Licensed under the FSL v1.
*/

'use strict';

// Importing the "ReactElement"
// entity for type annotation.
import { ReactElement } from "react";

// Importing the "LinkObj" interface
// to use props for the "Link" component.
import { LinkProps } from "./types";

/**
 * Returns the component for the page heading.
 * @param {LinkProps} props The props to use for the component.
 * @returns {number} Returns the component for the page heading.
 */
export function Link(props: LinkProps): ReactElement{
    return (
        <div className="content">
         <h2 className="display">{props.name}</h2>
         <p className="display">{props.linkLabel + ': ' + props.link}</p>
         <p className="display">{props.timeSubmitted + ': ' + props.time}</p>
         <p className="display">{props.shaLabel + ': ' + props.shasum}</p>
         <p className="display">{props.idLabel + ': ' + props.id}</p>
         <button className="submit">{props.visitLabel}</button>
        </div>
    );
}

// Exporting the "Link" component.
export default Link;