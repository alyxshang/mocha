use cliply::App;
use std::env::var;
use dotenvy::dotenv;
use super::err::MochaErr;
use super::runner::run_app;
use super::units::ConfigData;

pub async fn cli() -> Result<String, MochaErr>{
    let result: String;
    let mut mocha: App = App::new(
        "Mocha",
        "0.1.0",
        "Alyx Shang"
    );
    mocha.add_arg("runa", "run the application", &false);
    if mocha.version_is(){
        result = mocha.version_info();
    }
    else if mocha.help_is(){
        result = mocha.help_info();
    }
    else if mocha.arg_was_used("runa"){
        dotenv().ok();
        let db_url: String = match var("DATABASE_URL"){
            Ok(db_url) => db_url,
            Err(e) => return Err::<String, MochaErr>(MochaErr::new(&e.to_string()))
        };
        let host: String = match var("ACTIX_HOST"){
            Ok(host) => host,
            Err(e) => return Err::<String, MochaErr>(MochaErr::new(&e.to_string()))
        };
        let port: String = match var("ACTIX_PORT"){
            Ok(port) => port,
            Err(e) => return Err::<String, MochaErr>(MochaErr::new(&e.to_string()))
        };
        let config: ConfigData = ConfigData::new(
            &db_url,
            &host,
            &port
        );
        let _runner: () = match run_app(&config).await{
            Ok(_runner) => _runner,
            Err(e) => return Err::<String, MochaErr>(MochaErr::new(&e.to_string()))
        };
        result = format!("App running on \"{}:{}\".", &host, &port);
    }
    else {
        result = mocha.help_info();
    }
    Ok(result)
}
