//! Endpoints regarding clips
//!
//! # Examples
//!
//! ```rust,no_run
//! # use twitch_api2::helix::{HelixClient, clips::GetClipsRequest};
//! # #[tokio::main]
//! # async fn main() -> Result<(), Box<dyn std::error::Error + Send + Sync + 'static>> {
//! # let token = twitch_oauth2::AccessToken::new("validtoken".to_string());
//! # let token = twitch_oauth2::UserToken::from_existing(twitch_oauth2::dummy_http_client, token, None).await?;
//! let client = HelixClient::new();
//! # let _: &HelixClient<twitch_api2::DummyHttpClient> = &client;
//! let req = GetClipsRequest::builder()
//!     .game_id("1234".to_string())
//!     .first(100) // max 100, 20 if left unspecified
//!     .build();
//!
//!
//! println!("{:?}", &client.req_get(req, &token).await?.data.get(0));
//! # Ok(())
//! # }
//! ```
#[doc(inline)]
pub use get_clips::{Clip, GetClipsRequest};

use crate::helix;
use serde::{Deserialize, Serialize};

/// Gets clip information by clip ID (one or more), broadcaster ID (one only), or game ID (one only).
/// [`get-clips`](https://dev.twitch.tv/docs/api/reference#get-clips)
pub mod get_clips {
    use super::*;
    /// Query Parameters for [Get Clips](super::get_clips)
    ///
    /// [`get-clips`](https://dev.twitch.tv/docs/api/reference#get-clips)
    #[derive(PartialEq, typed_builder::TypedBuilder, Deserialize, Serialize, Clone, Debug)]
    #[non_exhaustive]
    pub struct GetClipsRequest {
        /// ID of the broadcaster for whom clips are returned. The number of clips returned is determined by the first query-string parameter (default: 20). Results are ordered by view count.
        #[builder(default)]
        #[serde(skip_serializing_if = "Option::is_none")]
        pub broadcaster_id: Option<String>,
        /// ID of the game for which clips are returned. The number of clips returned is determined by the first query-string parameter (default: 20). Results are ordered by view count.
        #[builder(default, setter(into))]
        #[serde(skip_serializing_if = "Option::is_none")]
        pub game_id: Option<String>,
        /// ID of the clip being queried. Limit: 100.
        #[builder(default)]
        #[serde(skip_serializing_if = "Vec::is_empty")]
        pub id: Vec<String>,
        // one of above is needed.
        /// Cursor for forward pagination: tells the server where to start fetching the next set of results, in a multi-page response. This applies only to queries specifying broadcaster_id or game_id. The cursor value specified here is from the pagination response field of a prior query.
        #[builder(default)]
        #[serde(skip_serializing_if = "Option::is_none")]
        pub after: Option<helix::Cursor>,
        /// Cursor for backward pagination: tells the server where to start fetching the next set of results, in a multi-page response. This applies only to queries specifying broadcaster_id or game_id. The cursor value specified here is from the pagination response field of a prior query.
        #[builder(default)]
        #[serde(skip_serializing_if = "Option::is_none")]
        pub before: Option<helix::Cursor>,
        /// Ending date/time for returned clips, in RFC3339 format. (Note that the seconds value is ignored.) If this is specified, started_at also must be specified; otherwise, the time period is ignored.
        #[builder(default)]
        #[serde(skip_serializing_if = "Option::is_none")]
        pub ended_at: Option<String>,
        /// Maximum number of objects to return. Maximum: 100. Default: 20.
        #[builder(default, setter(into))]
        #[serde(skip_serializing_if = "Option::is_none")]
        pub first: Option<usize>,
        /// Starting date/time for returned clips, in RFC3339 format. (Note that the seconds value is ignored.) If this is specified, ended_at also should be specified; otherwise, the ended_at date/time will be 1 week after the started_at value.
        #[builder(default)]
        #[serde(skip_serializing_if = "Option::is_none")]
        pub started_at: Option<String>,
    }

    /// Return Values for [Get Clips](super::get_clips)
    ///
    /// [`get-clips`](https://dev.twitch.tv/docs/api/reference#get-clips)
    #[derive(PartialEq, Deserialize, Serialize, Debug, Clone)]
    #[non_exhaustive]
    pub struct Clip {
        /// User ID of the stream from which the clip was created.
        pub broadcaster_id: String,
        /// Display name corresponding to broadcaster_id.
        pub broadcaster_name: String,
        /// Date when the clip was created.
        pub created_at: String,
        /// ID of the user who created the clip.
        pub creator_id: String,
        /// Display name corresponding to creator_id.
        pub creator_name: String,
        /// URL to embed the clip.
        pub embed_url: String,
        /// ID of the game assigned to the stream when the clip was created.
        pub game_id: String,
        /// ID of the clip being queried.
        pub id: String,
        /// Language of the stream from which the clip was created.
        pub language: String,
        /// URL of the clip thumbnail.
        pub thumbnail_url: String,
        /// Title of the clip.
        pub title: String,
        /// URL where the clip can be viewed.
        pub url: String,
        /// ID of the video from which the clip was created.
        pub video_id: String,
        /// Number of times the clip has been viewed.
        pub view_count: usize,
    }

    impl helix::Request for GetClipsRequest {
        type Response = Vec<Clip>;

        const PATH: &'static str = "clips";
        #[cfg(feature = "twitch_oauth2")]
        const SCOPE: &'static [twitch_oauth2::Scope] = &[];
    }

    impl helix::RequestGet for GetClipsRequest {}

    impl helix::Paginated for GetClipsRequest {
        fn set_pagination(&mut self, cursor: Option<helix::Cursor>) { self.after = cursor }
    }

    #[test]
    fn parse_response() {
        use helix::*;
        let req = GetClipsRequest::builder()
            .id(vec![String::from("AwkwardHelplessSalamanderSwiftRage")])
            .build();

        // From twitch docs
        let data = br#"
{
    "data": [
      {
        "id": "AwkwardHelplessSalamanderSwiftRage",
        "url": "https://clips.twitch.tv/AwkwardHelplessSalamanderSwiftRage",
        "embed_url": "https://clips.twitch.tv/embed?clip=AwkwardHelplessSalamanderSwiftRage",
        "broadcaster_id": "67955580",
        "broadcaster_name": "ChewieMelodies",
        "creator_id": "53834192",
        "creator_name": "BlackNova03",
        "video_id": "205586603",
        "game_id": "488191",
        "language": "en",
        "title": "babymetal",
        "view_count": 10,
        "created_at": "2017-11-30T22:34:18Z",
        "thumbnail_url": "https://clips-media-assets.twitch.tv/157589949-preview-480x272.jpg"
      }
    ]
}
"#
        .to_vec();

        let http_response = http::Response::builder().body(data).unwrap();

        let uri = req.get_uri().unwrap();

        dbg!(req.parse_response(&uri, http_response).unwrap());
    }
}
