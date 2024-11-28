/*
Mocha Frontend by Alyx Shang.
Licensed under the FSL v1.
*/

'use strict';

// Importing the "ReactElement"
// entity for type annotation.
import { ReactElement } from "react";

/**
 * Returns the component for a page spacer.
 * @returns {number} Returns the component for a page spacer.
 */
export function Spacer(): ReactElement{
    return (
        <>
         <div className="spacer"></div>
        </>
    );
}

// Exporting the "Spacer" component.
export default Spacer;