/*
Mocha Frontend by Alyx Shang.
Licensed under the FSL v1.
*/

'use strict';

// Importing the "ReactElement"
// entity for type annotation.
import { ReactElement } from "react";

// Importing the "PretextProps" interface
// to use props for the "Pretext" component.
import { PretextProps } from "./types";

/**
 * Returns the component for the page's pretext.
 * @param {PretextProps} props The props to use for the component.
 * @returns {number} Returns the component for the page's pretext.
 */
export function Pretext(props: PretextProps): ReactElement{
    return (
        <>
         <h2>{props.heading}</h2>
         <p>{props.pretext}</p>
        </>
    );
}

// Exporting the "Pretext" componetn.
export default Pretext;