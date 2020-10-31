(function() {var implementors = {};
implementors["twitch_api2"] = [{"text":"impl&lt;'a, C&gt; Freeze for HelixClient&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, C&gt; Freeze for TMIClient&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, C&gt; Freeze for TwitchClient&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for TwitchCategory","synthetic":true,"types":[]},{"text":"impl Freeze for User","synthetic":true,"types":[]},{"text":"impl Freeze for SubscriptionTier","synthetic":true,"types":[]},{"text":"impl Freeze for BroadcasterType","synthetic":true,"types":[]},{"text":"impl Freeze for UserType","synthetic":true,"types":[]},{"text":"impl Freeze for VideoPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for VideoType","synthetic":true,"types":[]},{"text":"impl Freeze for VideoPrivacy","synthetic":true,"types":[]},{"text":"impl Freeze for CommercialLength","synthetic":true,"types":[]},{"text":"impl Freeze for CommercialLengthParseError","synthetic":true,"types":[]},{"text":"impl&lt;R, D&gt; Freeze for Response&lt;R, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Freeze for HelixRequestPutError","synthetic":true,"types":[]},{"text":"impl !Freeze for HelixRequestPatchError","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; !Freeze for ClientRequestError&lt;RE&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for CreateRequestError","synthetic":true,"types":[]},{"text":"impl Freeze for InvalidUri","synthetic":true,"types":[]},{"text":"impl !Freeze for HelixRequestGetError","synthetic":true,"types":[]},{"text":"impl !Freeze for HelixRequestPostError","synthetic":true,"types":[]},{"text":"impl !Freeze for HelixRequestDeleteError","synthetic":true,"types":[]},{"text":"impl Freeze for ChannelInformation","synthetic":true,"types":[]},{"text":"impl Freeze for GetChannelInformationRequest","synthetic":true,"types":[]},{"text":"impl Freeze for ModifyChannelInformationBody","synthetic":true,"types":[]},{"text":"impl Freeze for ModifyChannelInformationRequest","synthetic":true,"types":[]},{"text":"impl Freeze for StartCommercial","synthetic":true,"types":[]},{"text":"impl Freeze for StartCommercialBody","synthetic":true,"types":[]},{"text":"impl Freeze for StartCommercialRequest","synthetic":true,"types":[]},{"text":"impl Freeze for ModifyChannelInformation","synthetic":true,"types":[]},{"text":"impl Freeze for Clip","synthetic":true,"types":[]},{"text":"impl Freeze for GetClipsRequest","synthetic":true,"types":[]},{"text":"impl Freeze for GetGamesRequest","synthetic":true,"types":[]},{"text":"impl Freeze for GetTopGamesRequest","synthetic":true,"types":[]},{"text":"impl Freeze for CheckAutoModStatus","synthetic":true,"types":[]},{"text":"impl Freeze for CheckAutoModStatusBody","synthetic":true,"types":[]},{"text":"impl Freeze for CheckAutoModStatusRequest","synthetic":true,"types":[]},{"text":"impl Freeze for BannedEvents","synthetic":true,"types":[]},{"text":"impl Freeze for GetBannedEventsRequest","synthetic":true,"types":[]},{"text":"impl Freeze for BannedUsers","synthetic":true,"types":[]},{"text":"impl Freeze for GetBannedUsersRequest","synthetic":true,"types":[]},{"text":"impl Freeze for GetModeratorEventsRequest","synthetic":true,"types":[]},{"text":"impl Freeze for ModeratorEvents","synthetic":true,"types":[]},{"text":"impl Freeze for GetModeratorsRequest","synthetic":true,"types":[]},{"text":"impl Freeze for Moderators","synthetic":true,"types":[]},{"text":"impl Freeze for SearchCategoriesRequest","synthetic":true,"types":[]},{"text":"impl Freeze for Channels","synthetic":true,"types":[]},{"text":"impl Freeze for SearchChannelsRequest","synthetic":true,"types":[]},{"text":"impl Freeze for GetStreamsRequest","synthetic":true,"types":[]},{"text":"impl Freeze for Stream","synthetic":true,"types":[]},{"text":"impl Freeze for GetStreamTagsRequest","synthetic":true,"types":[]},{"text":"impl Freeze for StreamType","synthetic":true,"types":[]},{"text":"impl Freeze for BroadcasterSubscriptions","synthetic":true,"types":[]},{"text":"impl Freeze for GetBroadcasterSubscriptionsRequest","synthetic":true,"types":[]},{"text":"impl Freeze for GetAllStreamTagsRequest","synthetic":true,"types":[]},{"text":"impl Freeze for TwitchTag","synthetic":true,"types":[]},{"text":"impl Freeze for AutoGenerated","synthetic":true,"types":[]},{"text":"impl Freeze for GetUsersRequest","synthetic":true,"types":[]},{"text":"impl Freeze for User","synthetic":true,"types":[]},{"text":"impl Freeze for GetUsersFollowsRequest","synthetic":true,"types":[]},{"text":"impl Freeze for UsersFollows","synthetic":true,"types":[]},{"text":"impl Freeze for DeleteUserFollowsRequest","synthetic":true,"types":[]},{"text":"impl Freeze for CreateUserFollowsBody","synthetic":true,"types":[]},{"text":"impl Freeze for CreateUserFollowsRequest","synthetic":true,"types":[]},{"text":"impl Freeze for DeleteUserFollows","synthetic":true,"types":[]},{"text":"impl Freeze for CreateUserFollows","synthetic":true,"types":[]},{"text":"impl Freeze for GetVideosRequest","synthetic":true,"types":[]},{"text":"impl Freeze for Video","synthetic":true,"types":[]},{"text":"impl Freeze for Sort","synthetic":true,"types":[]},{"text":"impl Freeze for VideoPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for VideoTypeFilter","synthetic":true,"types":[]},{"text":"impl Freeze for GetChatters","synthetic":true,"types":[]},{"text":"impl Freeze for Chatters","synthetic":true,"types":[]},{"text":"impl Freeze for GetHosts","synthetic":true,"types":[]},{"text":"impl Freeze for Host","synthetic":true,"types":[]},{"text":"impl Freeze for HostsRequestId","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; Freeze for RequestError&lt;RE&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for TwitchResponse","synthetic":true,"types":[]},{"text":"impl Freeze for TopicSubscribe","synthetic":true,"types":[]},{"text":"impl Freeze for TopicData","synthetic":true,"types":[]},{"text":"impl Freeze for Response","synthetic":true,"types":[]},{"text":"impl Freeze for ChannelBitsEventsV2","synthetic":true,"types":[]},{"text":"impl Freeze for BitsEventData","synthetic":true,"types":[]},{"text":"impl Freeze for BadgeEntitlement","synthetic":true,"types":[]},{"text":"impl Freeze for ChannelBitsEventsV2Reply","synthetic":true,"types":[]},{"text":"impl Freeze for BitsContext","synthetic":true,"types":[]},{"text":"impl Freeze for ChannelCheerEventsPublicV1","synthetic":true,"types":[]},{"text":"impl Freeze for ChannelCheerEventsPublicV1Reply","synthetic":true,"types":[]},{"text":"impl Freeze for TriggerType","synthetic":true,"types":[]},{"text":"impl Freeze for ChannelPointsChannelV1","synthetic":true,"types":[]},{"text":"impl Freeze for Redemption","synthetic":true,"types":[]},{"text":"impl Freeze for Reward","synthetic":true,"types":[]},{"text":"impl Freeze for Image","synthetic":true,"types":[]},{"text":"impl Freeze for GlobalCooldown","synthetic":true,"types":[]},{"text":"impl Freeze for RedemptionStatus","synthetic":true,"types":[]},{"text":"impl Freeze for Max","synthetic":true,"types":[]},{"text":"impl Freeze for ChannelPointsChannelV1Reply","synthetic":true,"types":[]},{"text":"impl Freeze for ChannelSubGiftsV1","synthetic":true,"types":[]},{"text":"impl Freeze for ChannelSubGiftsV1Reply","synthetic":true,"types":[]},{"text":"impl Freeze for ChannelSubscribeEventsV1","synthetic":true,"types":[]},{"text":"impl Freeze for Emote","synthetic":true,"types":[]},{"text":"impl Freeze for SubMessage","synthetic":true,"types":[]},{"text":"impl Freeze for ChannelSubscribeEventsV1Reply","synthetic":true,"types":[]},{"text":"impl Freeze for CommunityPointsChannelV1","synthetic":true,"types":[]},{"text":"impl Freeze for Following","synthetic":true,"types":[]},{"text":"impl Freeze for FollowingReply","synthetic":true,"types":[]},{"text":"impl Freeze for HypeTrainEventsV1","synthetic":true,"types":[]},{"text":"impl Freeze for HypeTrainEventsV1Rewards","synthetic":true,"types":[]},{"text":"impl Freeze for Config","synthetic":true,"types":[]},{"text":"impl Freeze for Kickoff","synthetic":true,"types":[]},{"text":"impl Freeze for ParticipationConversionRates","synthetic":true,"types":[]},{"text":"impl Freeze for NotificationThresholds","synthetic":true,"types":[]},{"text":"impl Freeze for ConductorRewards","synthetic":true,"types":[]},{"text":"impl Freeze for BitsRewards","synthetic":true,"types":[]},{"text":"impl Freeze for SubsRewards","synthetic":true,"types":[]},{"text":"impl Freeze for Participations","synthetic":true,"types":[]},{"text":"impl Freeze for Conductors","synthetic":true,"types":[]},{"text":"impl Freeze for HypeTrainProgress","synthetic":true,"types":[]},{"text":"impl Freeze for Level","synthetic":true,"types":[]},{"text":"impl Freeze for HypeTrainEventsV1Reply","synthetic":true,"types":[]},{"text":"impl Freeze for HypeTrainDifficulty","synthetic":true,"types":[]},{"text":"impl Freeze for Reward","synthetic":true,"types":[]},{"text":"impl Freeze for SourceType","synthetic":true,"types":[]},{"text":"impl Freeze for ActionType","synthetic":true,"types":[]},{"text":"impl Freeze for EndingReason","synthetic":true,"types":[]},{"text":"impl Freeze for ChatModeratorActions","synthetic":true,"types":[]},{"text":"impl Freeze for ChatModeratorActionsReply","synthetic":true,"types":[]},{"text":"impl Freeze for ModerationActionCommand","synthetic":true,"types":[]},{"text":"impl Freeze for ModerationType","synthetic":true,"types":[]},{"text":"impl Freeze for Raid","synthetic":true,"types":[]},{"text":"impl Freeze for RaidReply","synthetic":true,"types":[]},{"text":"impl Freeze for VideoPlayback","synthetic":true,"types":[]},{"text":"impl Freeze for VideoPlaybackById","synthetic":true,"types":[]},{"text":"impl Freeze for Vod","synthetic":true,"types":[]},{"text":"impl Freeze for VideoPlaybackReply","synthetic":true,"types":[]},{"text":"impl Freeze for WatchpartyType","synthetic":true,"types":[]},{"text":"impl Freeze for BroadcastType","synthetic":true,"types":[]},{"text":"impl Freeze for DummyHttpClient","synthetic":true,"types":[]},{"text":"impl Freeze for SurfError","synthetic":true,"types":[]}];
implementors["twitch_oauth2"] = [{"text":"impl Freeze for AppAccessToken","synthetic":true,"types":[]},{"text":"impl Freeze for UserToken","synthetic":true,"types":[]},{"text":"impl Freeze for ValidatedToken","synthetic":true,"types":[]},{"text":"impl Freeze for Scope","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl&lt;EF, TT&gt; Freeze for TwitchTokenResponse&lt;EF, TT&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;EF: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;TT: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for TwitchTokenErrorResponse","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; Freeze for TokenError&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; Freeze for ValidationError&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; Freeze for RevokeTokenError&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; Freeze for RefreshTokenError&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()