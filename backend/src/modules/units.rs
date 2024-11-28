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

/// Importing the 
/// "FromRow" trait
/// to derive it.
use sqlx::FromRow;

/// Importing the 
/// "Serialize" trait
/// to derive it.
use serde::Serialize;

/// Importing the 
/// "Deserialize" trait
/// to derive it.
use serde::Deserialize;

/// Importing the "Postgres"
/// structure from the "sqlx"
/// crate.
use sqlx::postgres::Postgres;

/// A structure containing
/// the information on a link
/// stored in the database.
#[derive(Deserialize, Serialize, FromRow, Clone)]
pub struct LinkObj{
    pub name: String,
    pub date_time: String,
    pub link_url: String,
    pub shasum: String,
    pub id: String
}

/// Implementing generic
/// methods for the "LinkObj"
/// structure.
impl LinkObj{

    /// Implementing a method
    /// to create a new instance
    /// of the "LinkObj"
    /// structure.
    pub fn new(
        name: &String,
        date_time: &String,
        link_url: &String,
        shasum: &String,
        id: &String
    ) -> LinkObj {
        LinkObj {
            name: name.to_owned(),
            date_time: date_time.to_owned(),
            link_url: link_url.to_owned(),
            shasum: shasum.to_owned(),
            id: id.to_owned()
        }
    }
    
}

/// A structure containing the fields
/// for submitting a link.
#[derive(Deserialize, Serialize)]
pub struct LinkPostPayload{
    pub name: String,
    pub time: String,
    pub link: String,
}

/// A structure containing
/// a pool of database connections
/// to make app data persist.
pub struct AppData {
    pub pool: Pool<Postgres>
}

/// Implementing generic
/// methods for the "AppData"
/// structure.
impl AppData{

    /// Implementing a method
    /// to create a new instance
    /// of the "AppData"
    /// structure.
    pub fn new(pg_pool: &Pool<Postgres>) -> AppData{
        AppData { pool: pg_pool.to_owned() }
    }

}

/// A structure containing
/// the fields required to run the
/// backend.
pub struct ConfigData{
    pub db_url: String,
    pub actix_host: String,
    pub actix_port: String
}

/// Implementing generic
/// methods for the "ConfigData"
/// structure.
impl ConfigData{

    /// Implementing a method
    /// to create a new instance
    /// of the "ConfigData"
    /// structure.
    pub fn new(
        db_url: &String,
        actix_host: &String,
        actix_port: &String
    ) -> ConfigData {
        ConfigData {
            db_url: db_url.to_owned(),
            actix_host: actix_host.to_owned(),
            actix_port: actix_port.to_owned()
        }
    }
    
}