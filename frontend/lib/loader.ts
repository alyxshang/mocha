import { Result } from "./units.ts";
import { LinkObj } from "./units.ts";
import { LinkPostPayload } from "./units.ts";

export async function postLink(
    name: string,
    link: string,
    baseUrl: string,
): Promise<Result<number>>{
    const apiUrl: string = baseUrl + '/submit';
    const postPayload: LinkPostPayload = {
        name: name,
        link: link,
        time: getTimeStamp()
    };
    const fetched: Result<string> = await makeRequest(
        apiUrl,
        "GET",
        true,
        postPayload
    );
    let error: number = 0;
    let resp: number = 1;
    if (fetched.err != 1){
        resp = 0;
    }
    else {
        error = 1;
    }
    const resultObj: Result<number> = {
        ok: resp,
        err: error
    };
    return resultObj;
}

export async function fetchLink(
    id: string,
    baseUrl: string
): Promise<Result<LinkObj>>{
    const apiUrl: string = baseUrl + '/retrieve' + '/' + id;
    const fetched: Result<string> = await makeRequest(
        apiUrl,
        "GET",
        false
    );
    let error: number = 0;
    let resp: LinkObj;
    if (fetched.err != 1){
        resp = JSON.parse(fetched.ok!);
    }
    else {
        error = 1;
    }
    const resultObj: Result<LinkObj> = {
        ok: resp,
        err: error
    };
    return resultObj;
}

export async function makeRequest<T>(
    apiPath: string,
    requestType: string,
    body: boolean,
    payload?: T
): Promise<Result<string>> {
    let result: string = "";
    let error: number = 0;
    let _response: Response;
    if (body){
        _response = await fetch(
            apiPath, 
            {
                method: requestType,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            },
        )
        .then(
            (response) => {
                if (response == null){
                    error = 1;
                }
                else {
                    result = response.body!.toString();
                }
            }
        )
        .catch((_e) => error = 1);
    }
    else {
        _response = await fetch(
            apiPath, 
            {
                method: requestType,
                headers: {
                    "Content-Type": "application/json",
                }
            },
        )
        .then(
            (response) => {
                if (response == null){
                    error = 1;
                }
                else {
                    result = response.body!.toString();
                }
            }
        )
        .catch((_e) => error = 1);
    }
    const resultObj: Result<string> = {
        ok: result,
        err: error
    };
    return resultObj;
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