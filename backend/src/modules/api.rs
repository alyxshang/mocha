/*
Mocha Backend by Alyx Shang.
Licensed under the FSL v1.
*/

/// Importing the "get"
/// decorator to make a service
/// that accepts "GET" requests.
use actix_web::get;

/// Importing the "Result"
/// enum for Actix Web services.
use actix_web::Result;

/// Importing the "Path"
/// structure to read URL
/// paths.
use actix_web::web::Path;

/// Importing the "Json"
/// structure to return JSON
/// responses.
use actix_web::web::Json;

/// Importing this crate's
/// error structure.
use super::err::MochaErr;

/// Importing the function
/// to retrieve a link from
/// a database.
use super::rw::read_link;

/// Importing the "Data"
/// structure to register
/// persistent app data.
use actix_web::web::Data;

/// Importing the function
/// to write a link to the
/// a database.
use super::rw::write_link;

/// Importing the "LinkObj"
/// for explicit type-casting.
use super::units::LinkObj;

/// Importing the "AppData"
/// structure to register
/// persistent app data.
use super::units::AppData;

/// Importing the function
/// to return a HTTP response.
use actix_web::HttpResponse;

/// Importing the "LinkPostPayload"
/// for explicit type-casting.
use super::units::LinkPostPayload;

/// This function contains the
/// service to write an instance
/// of the "LinkObj" structure
/// to the database and return
/// the instance once it is written
/// to the database.
pub async fn submit_link(
    payload: Json<LinkPostPayload>,
    data: Data<AppData>
) -> Result<HttpResponse, MochaErr> {
    let link_obj: LinkObj = match write_link(
        &payload, 
        &data.pool
    ).await {
        Ok(link_obj) => link_obj,
        Err(e) => return Err::<HttpResponse, MochaErr>(MochaErr::new(&e.to_string()))
    };
    Ok(HttpResponse::Ok().json(link_obj))
}

/// This function contains the
/// service to retrieve an instance
/// of the "LinkObj" structure.
#[get("/retrieve/{id}")]
pub async fn retrieve_link(
    id: Path<String>,
    data: Data<AppData>
) -> Result<HttpResponse, MochaErr> {
    let link_obj: LinkObj = match read_link(
        &id, 
        &data.pool
    ).await {
        Ok(link_obj) => link_obj,
        Err(e) => return Err::<HttpResponse, MochaErr>(MochaErr::new(&e.to_string()))
    };
    Ok(HttpResponse::Ok().json(link_obj))
}
