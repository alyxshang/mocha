import { LinkObj } from "./types.ts";
import { serverURL } from '../config.ts';
import { LinkWritePayload } from "./types.ts";

async function writeLinkObj(
    name: string, 
    link: string, 
    time: string
): Promise<LinkObj> {
    const apiRoute: string = serverURL + '/submit';
    const payload: LinkWritePayload = {
        name: name,
        time: time,
        link: link
    };
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

async function readLinkObj(
    id: string
): Promise<LinkObj> {
    const apiRoute: string = serverURL + '/retrieve' + '/' + id;
    const resp = await fetch(
        apiRoute, 
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const result: LinkObj = await resp.json();
    return result;
}

async function main(){
    const wobj = await writeLinkObj(
        "A new link",
        "https://comics.8muses.com",
        "2024/11/02/00:50::30"
    );
    const obj = await readLinkObj("1552");
    console.log(obj);
    console.log(wobj);
}

await main();