/*
Mocha Frontend by Alyx Shang.
Licensed under the FSL v1.
*/

'use strict';

// Importing the "LinkPostPayload" interface
// to submit a payaload.
import { LinkPostPayload } from "./types";

/**
 * Attempts to post an instance of a link and return
 * this instance as an object.
 * @param {string} name The name of the link submitted.
 * @param {string} link The URL of the link submitted.
 * @param {string} baseUrl The base URL of the API service.
 * @returns {object} The receieved (response) object.
 */
export async function postLink(
    name: string,
    link: string,
    baseUrl: string
): Promise<object>{
    const url: string = baseUrl + '/submit';
    const payload: LinkPostPayload = {
        name: name,
        time: getTimeStamp(),
        link: link
    };
    const resp: Response = await fetch(
        url,
        {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        },
    );
    let result: any;
    await resp.json()
        .then((val) => {result=val;})
        .catch((e) => result = {'error':e.toString()});
    return result;
}

/**
 * Attempts to retrieve the instance of the saved link object.
 * @param {string} id The id of the saved link
 * @param {string} baseUrl The base URL of the API service.
 * @returns {object} The receieved (response) object.
 */
export async function fetchLink(
    id: string,
    baseUrl: string
): Promise<object>{
    const url: string = baseUrl + '/retrieve/' + id;  
    const resp: Response = await fetch(
        url, { method: "GET" },
    );
    let result: Object;
    if (resp.ok){
        result = await resp.json();
    }
    else {
        result = {'error': 'error'};
    }
    return result;
}

export function getTimeStamp(){
    const now = new Date();
    const year: string = now.getFullYear().toString();
    const month: string = now.getMonth().toString();
    const day: string = now.getDay().toString();
    const hour: string = now.getHours().toString();
    const minutes: string = now.getMinutes().toString();
    const seconds: string = now.getSeconds().toString();
    const result: string = year + '/' + month + '/' + day + '/' + hour + '/' + minutes + '/' + seconds;
    return result;
}

export default { postLink, fetchLink, getTimeStamp };