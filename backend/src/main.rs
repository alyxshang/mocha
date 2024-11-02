use mocha_backend::cli;

#[actix_web::main]
async fn main(){
    match cli().await{
        Ok(feedback) => println!("{}", feedback),
        Err(e) => eprintln!("{}", e.to_string())
    };
}
