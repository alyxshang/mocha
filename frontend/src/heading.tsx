/*
Mocha Frontend by Alyx Shang.
Licensed under the FSL v1.
*/

'use strict';

// Importing the "ReactElement"
// entity for type annotation.
import { ReactElement } from "react";

// Importing the "HeadingProps" interface
// to use props for the "Heading" component.
import { HeadingProps } from "./types";

/**
 * Returns the component for the page heading.
 * @param {HeadingProps} props The props to use for the component.
 * @returns {number} Returns the component for the page heading.
 */
export function Heading(props: HeadingProps): ReactElement{
    return (
        <>
         <h1>{props.name}</h1>
        </>
    );
}

// Exporting the "Heading" component.
export default Heading;