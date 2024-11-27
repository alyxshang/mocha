interface LinkPostPayload {
    name: string,
    link: string,
    time: string
}
export type { LinkPostPayload }

export async function postLink(
    name: string,
    link: string,
    baseUrl: string
): Promise<Object>{
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
    let result: Object;
    if (resp.ok){
        result = await resp.json();
    }
    else {
        result = {'error': 'error'};
    }
    console.log(result);
    return result;
}

export async function fetchLink(
    id: string,
    baseUrl: string
): Promise<Object>{
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