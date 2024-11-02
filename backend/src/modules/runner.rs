use sqlx::Pool;
use actix_web::App;
use actix_web::web::post;
use actix_web::web::Data;
use super::err::MochaErr;
use actix_web::HttpServer;
use super::units::AppData;
use super::api::submit_link;
use super::units::ConfigData;
use sqlx::postgres::Postgres;
use super::api::retrieve_link;
use super::utils::create_connection;

pub async fn run_app(config: &ConfigData) -> Result<(), MochaErr> {
    let app_addr: String = format!("{}:{}", config.actix_host, config.actix_port);
    let connection: Pool<Postgres> = match create_connection(&config.db_url).await{
        Ok(connection) => connection,
        Err(e) => return Err::<(), MochaErr>(MochaErr::new(&e.to_string()))
    };
    let data: Data<AppData> = Data::new(AppData::new(&connection));
    let server = match HttpServer::new(
        move || {
            App::new()
                .app_data(data.clone())
                .route("/submit", post().to(submit_link))
                .service(retrieve_link)
        }
    ).bind(app_addr){
        Ok(server) => server,
        Err(e) => return Err::<(), MochaErr>(MochaErr::new(&e.to_string()))
    };
    let running: () = match server.run().await{
        Ok(running) => running,
        Err(e) => return Err::<(), MochaErr>(MochaErr::new(&e.to_string()))
    };
    Ok(running)
}