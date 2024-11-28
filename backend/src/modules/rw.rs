/*
Mocha Backend by Alyx Shang.
Licensed under the FSL v1.
*/

/// Importing the
/// "Pool" structure
/// from the "sqlx" crate
/// to make a pool for
/// database connections.
use sqlx::Pool;

/// Importing this crate's
/// error structure.
use super::err::MochaErr;

/// Importing the "LinkObj"
/// for explicit type-casting.
use super::units::LinkObj;

/// Importing the "Postgres"
/// structure from the "sqlx"
/// crate.
use sqlx::postgres::Postgres;

/// Importing the function
/// to hash a string to generate
/// a SHA-256 sum of the timestamp.
use super::utils::hash_string;

/// Importing the function
/// to hash a string to generate
/// a unique ID for any link submitted.
use super::utils::generate_id;

/// Importing the "LinkPostPayload"
/// for explicit type-casting.
use super::units::LinkPostPayload;

/// Attempts to post an instance
/// of the "LinkObj" structure to
/// the database. Once the instance 
/// is written to the database, it is
/// returned.
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

/// Attempts to retrieve an instance
/// of the "LinkObj" structure from
/// the database and returns it.
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
