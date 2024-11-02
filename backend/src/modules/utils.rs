use sqlx::Pool;
use sha2::Digest;
use sha2::Sha256;
use super::err::MochaErr;
use sqlx::postgres::Postgres;

pub fn hash_string(link: &String) -> String {
    let mut hasher: Sha256 = Sha256::new();
    hasher.update(link);
    format!("{:X}", hasher.finalize())
}

pub fn generate_id(shasum: &String) -> String {
    let shasum_chars: Vec<char> = shasum.chars().collect();
    let start: usize = shasum_chars.len() - 4;
    let end: usize = shasum_chars.len();
    let mut result_vec: Vec<String> = Vec::new();
    for i in start..end {
        result_vec.push(shasum_chars[i].to_string());
    }
    let result: String = result_vec.join("");
    result
}

pub async fn create_connection(db_url: &String) -> Result<Pool<Postgres>, MochaErr> {
    let conn = match sqlx::postgres::PgPool::connect(db_url).await{
        Ok(conn) => conn,
        Err(e) => return Err::<Pool<Postgres>, MochaErr>(MochaErr::new(&e.to_string()))
    };
    Ok(conn)
}
