use actix_web::get;
use actix_web::Result;
use actix_web::web::Path;
use actix_web::web::Json;
use super::err::MochaErr;
use super::rw::read_link;
use actix_web::web::Data;
use super::rw::write_link;
use super::units::LinkObj;
use super::units::AppData;
use actix_web::HttpResponse;
use super::units::LinkPostPayload;

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
