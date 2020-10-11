(function() {var implementors = {};
implementors["twitch_api2"] = [{"text":"impl Debug for GetChannelInformationRequest","synthetic":false,"types":[]},{"text":"impl Debug for ChannelInformation","synthetic":false,"types":[]},{"text":"impl Debug for ModifyChannelInformationRequest","synthetic":false,"types":[]},{"text":"impl Debug for ModifyChannelInformationBody","synthetic":false,"types":[]},{"text":"impl Debug for ModifyChannelInformation","synthetic":false,"types":[]},{"text":"impl Debug for CommercialLength","synthetic":false,"types":[]},{"text":"impl Debug for CommercialLengthParseError","synthetic":false,"types":[]},{"text":"impl Debug for StartCommercialRequest","synthetic":false,"types":[]},{"text":"impl Debug for StartCommercialBody","synthetic":false,"types":[]},{"text":"impl Debug for StartCommercial","synthetic":false,"types":[]},{"text":"impl Debug for GetClipsRequest","synthetic":false,"types":[]},{"text":"impl Debug for Clip","synthetic":false,"types":[]},{"text":"impl Debug for TwitchGame","synthetic":false,"types":[]},{"text":"impl Debug for GetGamesRequest","synthetic":false,"types":[]},{"text":"impl Debug for GetTopGamesRequest","synthetic":false,"types":[]},{"text":"impl Debug for GetModeratorsRequest","synthetic":false,"types":[]},{"text":"impl Debug for Moderators","synthetic":false,"types":[]},{"text":"impl Debug for GetModeratorEventsRequest","synthetic":false,"types":[]},{"text":"impl Debug for ModeratorEvents","synthetic":false,"types":[]},{"text":"impl Debug for GetBannedUsersRequest","synthetic":false,"types":[]},{"text":"impl Debug for BannedUsers","synthetic":false,"types":[]},{"text":"impl Debug for GetBannedEventsRequest","synthetic":false,"types":[]},{"text":"impl Debug for BannedEvents","synthetic":false,"types":[]},{"text":"impl Debug for CheckAutoModStatusRequest","synthetic":false,"types":[]},{"text":"impl Debug for CheckAutoModStatusBody","synthetic":false,"types":[]},{"text":"impl Debug for CheckAutoModStatus","synthetic":false,"types":[]},{"text":"impl Debug for StreamType","synthetic":false,"types":[]},{"text":"impl Debug for GetStreamsRequest","synthetic":false,"types":[]},{"text":"impl Debug for Stream","synthetic":false,"types":[]},{"text":"impl Debug for GetStreamTagsRequest","synthetic":false,"types":[]},{"text":"impl Debug for GetBroadcasterSubscriptionsRequest","synthetic":false,"types":[]},{"text":"impl Debug for BroadcasterSubscriptions","synthetic":false,"types":[]},{"text":"impl Debug for AutoGenerated","synthetic":false,"types":[]},{"text":"impl Debug for TwitchTag","synthetic":false,"types":[]},{"text":"impl Debug for GetAllStreamTagsRequest","synthetic":false,"types":[]},{"text":"impl Debug for GetUsersRequest","synthetic":false,"types":[]},{"text":"impl Debug for User","synthetic":false,"types":[]},{"text":"impl Debug for GetUsersFollowsRequest","synthetic":false,"types":[]},{"text":"impl Debug for UsersFollows","synthetic":false,"types":[]},{"text":"impl Debug for DeleteUserFollowsRequest","synthetic":false,"types":[]},{"text":"impl Debug for DeleteUserFollows","synthetic":false,"types":[]},{"text":"impl Debug for CreateUserFollowsRequest","synthetic":false,"types":[]},{"text":"impl Debug for CreateUserFollowsBody","synthetic":false,"types":[]},{"text":"impl Debug for CreateUserFollows","synthetic":false,"types":[]},{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;Debug, D:&nbsp;Debug&gt; Debug for Response&lt;R, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Request&lt;Response = D&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: DeserializeOwned,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Debug for Pagination","synthetic":false,"types":[]},{"text":"impl&lt;RE:&nbsp;Debug + Error + Send + Sync + 'static&gt; Debug for RequestError&lt;RE&gt;","synthetic":false,"types":[]},{"text":"impl Debug for GetChatters","synthetic":false,"types":[]},{"text":"impl Debug for Chatters","synthetic":false,"types":[]},{"text":"impl Debug for HostsRequestId","synthetic":false,"types":[]},{"text":"impl Debug for GetHosts","synthetic":false,"types":[]},{"text":"impl Debug for Host","synthetic":false,"types":[]},{"text":"impl&lt;RE:&nbsp;Debug + Error + Send + Sync + 'static&gt; Debug for RequestError&lt;RE&gt;","synthetic":false,"types":[]},{"text":"impl Debug for SurfError","synthetic":false,"types":[]},{"text":"impl Debug for DummyHttpClient","synthetic":false,"types":[]}];
implementors["twitch_oauth2"] = [{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl&lt;EF:&nbsp;Debug, TT:&nbsp;Debug&gt; Debug for TwitchTokenResponse&lt;EF, TT&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TT: TokenType,<br>&nbsp;&nbsp;&nbsp;&nbsp;EF: ExtraTokenFields,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Debug for TwitchTokenErrorResponse","synthetic":false,"types":[]},{"text":"impl Debug for Scope","synthetic":false,"types":[]},{"text":"impl Debug for AppAccessToken","synthetic":false,"types":[]},{"text":"impl&lt;RE:&nbsp;Debug + Error + Send + Sync + 'static&gt; Debug for TokenError&lt;RE&gt;","synthetic":false,"types":[]},{"text":"impl&lt;RE:&nbsp;Debug + Error&gt; Debug for ValidationError&lt;RE&gt;","synthetic":false,"types":[]},{"text":"impl&lt;RE:&nbsp;Debug + Error + Send + Sync + 'static&gt; Debug for RevokeTokenError&lt;RE&gt;","synthetic":false,"types":[]},{"text":"impl&lt;RE:&nbsp;Debug + Error + Send + Sync + 'static&gt; Debug for RefreshTokenError&lt;RE&gt;","synthetic":false,"types":[]},{"text":"impl Debug for UserToken","synthetic":false,"types":[]},{"text":"impl Debug for ValidatedToken","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()