use sqlx::Pool;
use super::err::MochaErr;
use super::units::LinkObj;
use sqlx::postgres::Postgres;
use super::utils::hash_string;
use super::utils::generate_id;
use super::units::LinkPostPayload;

pub async fn write_link(
    payload: &LinkPostPayload, 
    pool: &Pool<Postgres>
) -> Result<LinkObj, MochaErr> {
    let shasum: String = hash_string(&payload.time);
    let id: String = generate_id(&shasum);
    let link_obj: LinkObj = LinkObj::new(
    &payload.name,
        & payload.time,
        &payload.link,
        &shasum,
        &id
    );
    let _insert_op = match sqlx::query!(
        "INSERT INTO links (name, date_time, link_url, shasum, id) VALUES ($1, $2, $3, $4, $5)",
        link_obj.name,
        link_obj.date_time,
        link_obj.link_url,
        link_obj.shasum,
        link_obj.id
    )
        .execute(pool)
        .await
    {
        Ok(_feedback) => {},
        Err(e) => return Err::<LinkObj, MochaErr>(MochaErr::new(&e.to_string()))
    };
    let inserted_object: LinkObj = match read_link(&id, pool).await {
        Ok(inserted_object) => inserted_object,
        Err(e) => return Err::<LinkObj, MochaErr>(MochaErr::new(&e.to_string()))
    };
    Ok(inserted_object)
}

pub async fn read_link(
    id: &String, 
    pool: &Pool<Postgres>
) -> Result<LinkObj, MochaErr> {
    let objects = match sqlx::query_as!(LinkObj,"SELECT * FROM links").fetch_all(pool).await {
        Ok(objects) => objects,
        Err(e) => return Err::<LinkObj, MochaErr>(MochaErr::new(&e.to_string()))
    };
    let mut res_vec: Vec<LinkObj> = Vec::new();
    for link_obj in objects {
        if &link_obj.id == id{
            res_vec.push(link_obj);
        }
        else {}
    }
    if res_vec.len() == 1 {
        Ok(res_vec[0].clone())
    }
    else {
        let e: String = format!("The object with the ID \"{}\" could not be retrieved.", &id);
        return Err::<LinkObj, MochaErr>(MochaErr::new(&e.to_string()))
    }

}
