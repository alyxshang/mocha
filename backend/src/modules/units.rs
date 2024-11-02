use sqlx::Pool;
use sqlx::FromRow;
use serde::Serialize;
use serde::Deserialize;
use sqlx::postgres::Postgres;

#[derive(Serialize, FromRow, Clone)]
pub struct LinkObj{
    pub name: String,
    pub date_time: String,
    pub link_url: String,
    pub shasum: String,
    pub id: String
}

impl LinkObj{
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

#[derive(Deserialize)]
pub struct LinkPostPayload{
    pub name: String,
    pub time: String,
    pub link: String,
}

pub struct AppData {
    pub pool: Pool<Postgres>
}

impl AppData{
    pub fn new(pg_pool: &Pool<Postgres>) -> AppData{
        AppData { pool: pg_pool.to_owned() }
    }
}

pub struct ConfigData{
    pub db_url: String,
    pub actix_host: String,
    pub actix_port: String
}

impl ConfigData{
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