(function() {var implementors = {};
implementors["twitch_api2"] = [{"text":"impl&lt;'a, C&gt; Unpin for HelixClient&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, C&gt; Unpin for TMIClient&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, C&gt; Unpin for TwitchClient&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for TwitchCategory","synthetic":true,"types":[]},{"text":"impl Unpin for User","synthetic":true,"types":[]},{"text":"impl Unpin for SubscriptionTier","synthetic":true,"types":[]},{"text":"impl Unpin for BroadcasterType","synthetic":true,"types":[]},{"text":"impl Unpin for UserType","synthetic":true,"types":[]},{"text":"impl Unpin for VideoPeriod","synthetic":true,"types":[]},{"text":"impl Unpin for VideoType","synthetic":true,"types":[]},{"text":"impl Unpin for VideoPrivacy","synthetic":true,"types":[]},{"text":"impl Unpin for CommercialLength","synthetic":true,"types":[]},{"text":"impl Unpin for CommercialLengthParseError","synthetic":true,"types":[]},{"text":"impl&lt;R, D&gt; Unpin for Response&lt;R, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for HelixRequestPutError","synthetic":true,"types":[]},{"text":"impl Unpin for HelixRequestPatchError","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; Unpin for ClientRequestError&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for CreateRequestError","synthetic":true,"types":[]},{"text":"impl Unpin for InvalidUri","synthetic":true,"types":[]},{"text":"impl Unpin for HelixRequestGetError","synthetic":true,"types":[]},{"text":"impl Unpin for HelixRequestPostError","synthetic":true,"types":[]},{"text":"impl Unpin for HelixRequestDeleteError","synthetic":true,"types":[]},{"text":"impl Unpin for ChannelInformation","synthetic":true,"types":[]},{"text":"impl Unpin for GetChannelInformationRequest","synthetic":true,"types":[]},{"text":"impl Unpin for ModifyChannelInformationBody","synthetic":true,"types":[]},{"text":"impl Unpin for ModifyChannelInformationRequest","synthetic":true,"types":[]},{"text":"impl Unpin for StartCommercial","synthetic":true,"types":[]},{"text":"impl Unpin for StartCommercialBody","synthetic":true,"types":[]},{"text":"impl Unpin for StartCommercialRequest","synthetic":true,"types":[]},{"text":"impl Unpin for ModifyChannelInformation","synthetic":true,"types":[]},{"text":"impl Unpin for Clip","synthetic":true,"types":[]},{"text":"impl Unpin for GetClipsRequest","synthetic":true,"types":[]},{"text":"impl Unpin for GetGamesRequest","synthetic":true,"types":[]},{"text":"impl Unpin for GetTopGamesRequest","synthetic":true,"types":[]},{"text":"impl Unpin for CheckAutoModStatus","synthetic":true,"types":[]},{"text":"impl Unpin for CheckAutoModStatusBody","synthetic":true,"types":[]},{"text":"impl Unpin for CheckAutoModStatusRequest","synthetic":true,"types":[]},{"text":"impl Unpin for BannedEvents","synthetic":true,"types":[]},{"text":"impl Unpin for GetBannedEventsRequest","synthetic":true,"types":[]},{"text":"impl Unpin for BannedUsers","synthetic":true,"types":[]},{"text":"impl Unpin for GetBannedUsersRequest","synthetic":true,"types":[]},{"text":"impl Unpin for GetModeratorEventsRequest","synthetic":true,"types":[]},{"text":"impl Unpin for ModeratorEvents","synthetic":true,"types":[]},{"text":"impl Unpin for GetModeratorsRequest","synthetic":true,"types":[]},{"text":"impl Unpin for Moderators","synthetic":true,"types":[]},{"text":"impl Unpin for SearchCategoriesRequest","synthetic":true,"types":[]},{"text":"impl Unpin for Channels","synthetic":true,"types":[]},{"text":"impl Unpin for SearchChannelsRequest","synthetic":true,"types":[]},{"text":"impl Unpin for GetStreamsRequest","synthetic":true,"types":[]},{"text":"impl Unpin for Stream","synthetic":true,"types":[]},{"text":"impl Unpin for GetStreamTagsRequest","synthetic":true,"types":[]},{"text":"impl Unpin for StreamType","synthetic":true,"types":[]},{"text":"impl Unpin for BroadcasterSubscriptions","synthetic":true,"types":[]},{"text":"impl Unpin for GetBroadcasterSubscriptionsRequest","synthetic":true,"types":[]},{"text":"impl Unpin for GetAllStreamTagsRequest","synthetic":true,"types":[]},{"text":"impl Unpin for TwitchTag","synthetic":true,"types":[]},{"text":"impl Unpin for AutoGenerated","synthetic":true,"types":[]},{"text":"impl Unpin for GetUsersRequest","synthetic":true,"types":[]},{"text":"impl Unpin for User","synthetic":true,"types":[]},{"text":"impl Unpin for GetUsersFollowsRequest","synthetic":true,"types":[]},{"text":"impl Unpin for UsersFollows","synthetic":true,"types":[]},{"text":"impl Unpin for DeleteUserFollowsRequest","synthetic":true,"types":[]},{"text":"impl Unpin for CreateUserFollowsBody","synthetic":true,"types":[]},{"text":"impl Unpin for CreateUserFollowsRequest","synthetic":true,"types":[]},{"text":"impl Unpin for DeleteUserFollows","synthetic":true,"types":[]},{"text":"impl Unpin for CreateUserFollows","synthetic":true,"types":[]},{"text":"impl Unpin for GetVideosRequest","synthetic":true,"types":[]},{"text":"impl Unpin for Video","synthetic":true,"types":[]},{"text":"impl Unpin for Sort","synthetic":true,"types":[]},{"text":"impl Unpin for VideoPeriod","synthetic":true,"types":[]},{"text":"impl Unpin for VideoTypeFilter","synthetic":true,"types":[]},{"text":"impl Unpin for GetChatters","synthetic":true,"types":[]},{"text":"impl Unpin for Chatters","synthetic":true,"types":[]},{"text":"impl Unpin for GetHosts","synthetic":true,"types":[]},{"text":"impl Unpin for Host","synthetic":true,"types":[]},{"text":"impl Unpin for HostsRequestId","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; Unpin for RequestError&lt;RE&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for TwitchResponse","synthetic":true,"types":[]},{"text":"impl Unpin for TopicSubscribe","synthetic":true,"types":[]},{"text":"impl Unpin for TopicData","synthetic":true,"types":[]},{"text":"impl Unpin for Response","synthetic":true,"types":[]},{"text":"impl Unpin for ChannelBitsEventsV2","synthetic":true,"types":[]},{"text":"impl Unpin for BitsEventData","synthetic":true,"types":[]},{"text":"impl Unpin for BadgeEntitlement","synthetic":true,"types":[]},{"text":"impl Unpin for ChannelBitsEventsV2Reply","synthetic":true,"types":[]},{"text":"impl Unpin for BitsContext","synthetic":true,"types":[]},{"text":"impl Unpin for ChannelCheerEventsPublicV1","synthetic":true,"types":[]},{"text":"impl Unpin for ChannelCheerEventsPublicV1Reply","synthetic":true,"types":[]},{"text":"impl Unpin for TriggerType","synthetic":true,"types":[]},{"text":"impl Unpin for ChannelPointsChannelV1","synthetic":true,"types":[]},{"text":"impl Unpin for Redemption","synthetic":true,"types":[]},{"text":"impl Unpin for Reward","synthetic":true,"types":[]},{"text":"impl Unpin for Image","synthetic":true,"types":[]},{"text":"impl Unpin for GlobalCooldown","synthetic":true,"types":[]},{"text":"impl Unpin for RedemptionStatus","synthetic":true,"types":[]},{"text":"impl Unpin for Max","synthetic":true,"types":[]},{"text":"impl Unpin for ChannelPointsChannelV1Reply","synthetic":true,"types":[]},{"text":"impl Unpin for ChannelSubGiftsV1","synthetic":true,"types":[]},{"text":"impl Unpin for ChannelSubGiftsV1Reply","synthetic":true,"types":[]},{"text":"impl Unpin for ChannelSubscribeEventsV1","synthetic":true,"types":[]},{"text":"impl Unpin for Emote","synthetic":true,"types":[]},{"text":"impl Unpin for SubMessage","synthetic":true,"types":[]},{"text":"impl Unpin for ChannelSubscribeEventsV1Reply","synthetic":true,"types":[]},{"text":"impl Unpin for CommunityPointsChannelV1","synthetic":true,"types":[]},{"text":"impl Unpin for Following","synthetic":true,"types":[]},{"text":"impl Unpin for FollowingReply","synthetic":true,"types":[]},{"text":"impl Unpin for HypeTrainEventsV1","synthetic":true,"types":[]},{"text":"impl Unpin for HypeTrainEventsV1Rewards","synthetic":true,"types":[]},{"text":"impl Unpin for Config","synthetic":true,"types":[]},{"text":"impl Unpin for Kickoff","synthetic":true,"types":[]},{"text":"impl Unpin for ParticipationConversionRates","synthetic":true,"types":[]},{"text":"impl Unpin for NotificationThresholds","synthetic":true,"types":[]},{"text":"impl Unpin for ConductorRewards","synthetic":true,"types":[]},{"text":"impl Unpin for BitsRewards","synthetic":true,"types":[]},{"text":"impl Unpin for SubsRewards","synthetic":true,"types":[]},{"text":"impl Unpin for Participations","synthetic":true,"types":[]},{"text":"impl Unpin for Conductors","synthetic":true,"types":[]},{"text":"impl Unpin for HypeTrainProgress","synthetic":true,"types":[]},{"text":"impl Unpin for Level","synthetic":true,"types":[]},{"text":"impl Unpin for HypeTrainEventsV1Reply","synthetic":true,"types":[]},{"text":"impl Unpin for HypeTrainDifficulty","synthetic":true,"types":[]},{"text":"impl Unpin for Reward","synthetic":true,"types":[]},{"text":"impl Unpin for SourceType","synthetic":true,"types":[]},{"text":"impl Unpin for ActionType","synthetic":true,"types":[]},{"text":"impl Unpin for EndingReason","synthetic":true,"types":[]},{"text":"impl Unpin for ChatModeratorActions","synthetic":true,"types":[]},{"text":"impl Unpin for ChatModeratorActionsReply","synthetic":true,"types":[]},{"text":"impl Unpin for ModerationActionCommand","synthetic":true,"types":[]},{"text":"impl Unpin for ModerationType","synthetic":true,"types":[]},{"text":"impl Unpin for Raid","synthetic":true,"types":[]},{"text":"impl Unpin for RaidReply","synthetic":true,"types":[]},{"text":"impl Unpin for VideoPlayback","synthetic":true,"types":[]},{"text":"impl Unpin for VideoPlaybackById","synthetic":true,"types":[]},{"text":"impl Unpin for Vod","synthetic":true,"types":[]},{"text":"impl Unpin for VideoPlaybackReply","synthetic":true,"types":[]},{"text":"impl Unpin for WatchpartyType","synthetic":true,"types":[]},{"text":"impl Unpin for BroadcastType","synthetic":true,"types":[]},{"text":"impl Unpin for DummyHttpClient","synthetic":true,"types":[]},{"text":"impl Unpin for SurfError","synthetic":true,"types":[]}];
implementors["twitch_oauth2"] = [{"text":"impl Unpin for AppAccessToken","synthetic":true,"types":[]},{"text":"impl Unpin for UserToken","synthetic":true,"types":[]},{"text":"impl Unpin for ValidatedToken","synthetic":true,"types":[]},{"text":"impl Unpin for Scope","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl&lt;EF, TT&gt; Unpin for TwitchTokenResponse&lt;EF, TT&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;EF: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;TT: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for TwitchTokenErrorResponse","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; Unpin for TokenError&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; Unpin for ValidationError&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; Unpin for RevokeTokenError&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;RE&gt; Unpin for RefreshTokenError&lt;RE&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RE: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()