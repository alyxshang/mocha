/*
Mocha Backend by Alyx Shang.
Licensed under the FSL v1.
*/

/// Importing the 
/// "Client" structure
/// to make a new client.
use reqwest::Client;

/// Importing the "from_str"
/// method from the "serde_json"
/// to deserialize JSON.
use serde_json::from_str;

/// Importing the "LinkObj"
/// for explicit type-casting.
use super::units::LinkObj;

/// Importing the 
/// "CONTENT_TYPE" setting
/// to set the content type
/// of the response to JSON.
use reqwest::header::CONTENT_TYPE;

/// Importing the "LinkPostPayload"
/// for explicit type-casting.
use super::units::LinkPostPayload;

/// Testing the "$host:$port/submit" route.
#[tokio::test]
pub async fn test_post_link_route()  {
    let client = Client::new();
    let url: String = format!("http://127.0.0.1:8080/submit");
    let payload: LinkPostPayload = LinkPostPayload{
        link: "https://github.com".to_string(),
        name: "GitHub".to_string(),
        time: "2023/05/06/13:45:56".to_string()
    };
    let _resp = match client.post(url)
        .header(CONTENT_TYPE, "application/json")
        .json(&payload)
        .send()
        .await
    {
        Ok(res_resp) => {
            let _body = match res_resp.text().await {
                Ok(res_body) => {
                    let recvd: Result<LinkObj, serde_json::Error> = from_str(&res_body);
                    match recvd {
                        Ok(res) => assert_eq!(res.name, payload.name),
                        Err(re) => println!("{}", &re.to_string()) 
                    };
                },
                Err(be) => println!("{}", &be.to_string())
            };
        },
        Err(e) => println!("{}", &e.to_string())
    };
}

/// Testing the "$host:$port/retrieve/$id" route.
#[tokio::test]
pub async fn test_retrieve_link_route()  {
    let client = Client::new();
    let id: String = "whatever".to_string();
    let url: String = format!("http://127.0.0.1:8080/{}", &id);
    let _resp = match client.get(url)
        .header(CONTENT_TYPE, "application/json")
        .send()
        .await
    {
        Ok(res_resp) => {
            let _body = match res_resp.text().await {
                Ok(res_body) => {
                    let recvd: Result<LinkObj,serde_json::Error> = from_str(&res_body);
                    match recvd{
                        Ok(res) => assert_eq!(res.id, id),
                        Err(re) => println!("{}", &re.to_string())
                    };

                },
                Err(be) => println!("{}", &be.to_string())
            };
        },
        Err(e) => println!("{}", &e.to_string())
    };
}