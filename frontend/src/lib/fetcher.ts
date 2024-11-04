import { LinkObj } from "./types.ts";
import { LinkWritePayload } from "./types.ts";
import { apiServerURL } from '../../config.ts';

export async function writeLinkObj(
    name: string, 
    link: string, 
): Promise<LinkObj> {
    const apiRoute: string = apiServerURL + '/submit';
    const time: string = getTimeStamp();
    const payload: LinkWritePayload = {
        name: name,
        time: time,
        link: link
    };
    console.log(apiRoute);
    const resp = await fetch(
        apiRoute, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        }
    );
    const result: LinkObj = await resp.json();
    return result;
}

export async function readLinkObj(
    id: string
): Promise<Object> {
    const apiRoute: string = apiServerURL + '/retrieve' + '/' + id;
    console.log(apiRoute);
    let result: Object;
    const resp = await fetch(
        apiRoute, 
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
    .then((response) => result = response.json())
    .catch((e) => result = {"error": e})
    return result;
}

export function getTimeStamp(){
    const date: Date = new Date();
    const year: number = date.getFullYear();
    const month: number = date.getMonth();
    const day: number = date.getDay();
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    const seconds: number = date.getSeconds();
    const milis: number = date.getMilliseconds();
    const result: string = year + '/' + month + '/' + day + '/' + hours + ':' + minutes + ':' + seconds + ':' + milis;
    return result;
}

export default {
    writeLinkObj,
    readLinkObj,
    getTimeStamp
};