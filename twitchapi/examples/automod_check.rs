use twitch_api2::HelixClient;
use twitch_oauth2::{AccessToken, TwitchToken, UserToken};

fn main() {
    use std::error::Error;
    if let Err(err) = run() {
        println!("Error: {}", err);
        let mut e: &'_ dyn Error = err.as_ref();
        while let Some(cause) = e.source() {
            println!("Caused by: {:?}", cause);
            e = cause;
        }
    }
}

#[tokio::main]
async fn run() -> Result<(), Box<dyn std::error::Error + Send + Sync + 'static>> {
    dotenv::dotenv().unwrap();
    let mut args = std::env::args().skip(1);
    let token = UserToken::from_existing(
        std::env::var("TWITCH_TOKEN")
            .ok()
            .or_else(|| args.next())
            .map(AccessToken::new)
            .expect("Please set env: TWITCH_TOKEN or pass token as first argument"),
        None,
    )
    .await?;

    let broadcaster_id = token.validate_token().await?.user_id.unwrap();

    let client = HelixClient::new();

    let req = twitch_api2::helix::moderation::CheckAutoModStatusRequest::builder()
        .broadcaster_id(&broadcaster_id)
        .build();
    let data = twitch_api2::helix::moderation::CheckAutoModStatusBody::builder()
        .msg_id("123")
        .msg_text("fuck you")
        .user_id("1234")
        .build();
    println!("scopes: {:?}", token.scopes());
    let response = client.req_post(req, vec![data], &token).await?;
    println!("{:?}", response.data);

    Ok(())
}
