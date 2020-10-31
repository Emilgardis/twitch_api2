(function() {var implementors = {};
implementors["twitch_api2"] = [{"text":"impl Debug for TwitchCategory","synthetic":false,"types":[]},{"text":"impl Debug for SubscriptionTier","synthetic":false,"types":[]},{"text":"impl Debug for BroadcasterType","synthetic":false,"types":[]},{"text":"impl Debug for UserType","synthetic":false,"types":[]},{"text":"impl Debug for VideoPeriod","synthetic":false,"types":[]},{"text":"impl Debug for VideoType","synthetic":false,"types":[]},{"text":"impl Debug for VideoPrivacy","synthetic":false,"types":[]},{"text":"impl Debug for CommercialLength","synthetic":false,"types":[]},{"text":"impl Debug for CommercialLengthParseError","synthetic":false,"types":[]},{"text":"impl Debug for User","synthetic":false,"types":[]},{"text":"impl Debug for GetChannelInformationRequest","synthetic":false,"types":[]},{"text":"impl Debug for ChannelInformation","synthetic":false,"types":[]},{"text":"impl Debug for ModifyChannelInformationRequest","synthetic":false,"types":[]},{"text":"impl Debug for ModifyChannelInformationBody","synthetic":false,"types":[]},{"text":"impl Debug for ModifyChannelInformation","synthetic":false,"types":[]},{"text":"impl Debug for StartCommercialRequest","synthetic":false,"types":[]},{"text":"impl Debug for StartCommercialBody","synthetic":false,"types":[]},{"text":"impl Debug for StartCommercial","synthetic":false,"types":[]},{"text":"impl Debug for GetClipsRequest","synthetic":false,"types":[]},{"text":"impl Debug for Clip","synthetic":false,"types":[]},{"text":"impl Debug for GetGamesRequest","synthetic":false,"types":[]},{"text":"impl Debug for GetTopGamesRequest","synthetic":false,"types":[]},{"text":"impl Debug for GetModeratorsRequest","synthetic":false,"types":[]},{"text":"impl Debug for Moderators","synthetic":false,"types":[]},{"text":"impl Debug for GetModeratorEventsRequest","synthetic":false,"types":[]},{"text":"impl Debug for ModeratorEvents","synthetic":false,"types":[]},{"text":"impl Debug for GetBannedUsersRequest","synthetic":false,"types":[]},{"text":"impl Debug for BannedUsers","synthetic":false,"types":[]},{"text":"impl Debug for GetBannedEventsRequest","synthetic":false,"types":[]},{"text":"impl Debug for BannedEvents","synthetic":false,"types":[]},{"text":"impl Debug for CheckAutoModStatusRequest","synthetic":false,"types":[]},{"text":"impl Debug for CheckAutoModStatusBody","synthetic":false,"types":[]},{"text":"impl Debug for CheckAutoModStatus","synthetic":false,"types":[]},{"text":"impl Debug for SearchCategoriesRequest","synthetic":false,"types":[]},{"text":"impl Debug for SearchChannelsRequest","synthetic":false,"types":[]},{"text":"impl Debug for Channels","synthetic":false,"types":[]},{"text":"impl Debug for StreamType","synthetic":false,"types":[]},{"text":"impl Debug for GetStreamsRequest","synthetic":false,"types":[]},{"text":"impl Debug for Stream","synthetic":false,"types":[]},{"text":"impl Debug for GetStreamTagsRequest","synthetic":false,"types":[]},{"text":"impl Debug for GetBroadcasterSubscriptionsRequest","synthetic":false,"types":[]},{"text":"impl Debug for BroadcasterSubscriptions","synthetic":false,"types":[]},{"text":"impl Debug for AutoGenerated","synthetic":false,"types":[]},{"text":"impl Debug for TwitchTag","synthetic":false,"types":[]},{"text":"impl Debug for GetAllStreamTagsRequest","synthetic":false,"types":[]},{"text":"impl Debug for GetUsersRequest","synthetic":false,"types":[]},{"text":"impl Debug for User","synthetic":false,"types":[]},{"text":"impl Debug for GetUsersFollowsRequest","synthetic":false,"types":[]},{"text":"impl Debug for UsersFollows","synthetic":false,"types":[]},{"text":"impl Debug for DeleteUserFollowsRequest","synthetic":false,"types":[]},{"text":"impl Debug for DeleteUserFollows","synthetic":false,"types":[]},{"text":"impl Debug for CreateUserFollowsRequest","synthetic":false,"types":[]},{"text":"impl Debug for CreateUserFollowsBody","synthetic":false,"types":[]},{"text":"impl Debug for CreateUserFollows","synthetic":false,"types":[]},{"text":"impl Debug for Sort","synthetic":false,"types":[]},{"text":"impl Debug for VideoPeriod","synthetic":false,"types":[]},{"text":"impl Debug for VideoTypeFilter","synthetic":false,"types":[]},{"text":"impl Debug for GetVideosRequest","synthetic":false,"types":[]},{"text":"impl Debug for Video","synthetic":false,"types":[]},{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;Debug, D:&nbsp;Debug&gt; Debug for Response&lt;R, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Request&lt;Response = D&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: DeserializeOwned,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;RE:&nbsp;Debug + Error + Send + Sync + 'static&gt; Debug for ClientRequestError&lt;RE&gt;","synthetic":false,"types":[]},{"text":"impl Debug for CreateRequestError","synthetic":false,"types":[]},{"text":"impl Debug for InvalidUri","synthetic":false,"types":[]},{"text":"impl Debug for HelixRequestGetError","synthetic":false,"types":[]},{"text":"impl Debug for HelixRequestPutError","synthetic":false,"types":[]},{"text":"impl Debug for HelixRequestPostError","synthetic":false,"types":[]},{"text":"impl Debug for HelixRequestPatchError","synthetic":false,"types":[]},{"text":"impl Debug for HelixRequestDeleteError","synthetic":false,"types":[]},{"text":"impl Debug for GetChatters","synthetic":false,"types":[]},{"text":"impl Debug for Chatters","synthetic":false,"types":[]},{"text":"impl Debug for HostsRequestId","synthetic":false,"types":[]},{"text":"impl Debug for GetHosts","synthetic":false,"types":[]},{"text":"impl Debug for Host","synthetic":false,"types":[]},{"text":"impl&lt;RE:&nbsp;Debug + Error + Send + Sync + 'static&gt; Debug for RequestError&lt;RE&gt;","synthetic":false,"types":[]},{"text":"impl Debug for ChannelBitsEventsV2","synthetic":false,"types":[]},{"text":"impl Debug for ChannelBitsEventsV2Reply","synthetic":false,"types":[]},{"text":"impl Debug for BitsEventData","synthetic":false,"types":[]},{"text":"impl Debug for BadgeEntitlement","synthetic":false,"types":[]},{"text":"impl Debug for BitsContext","synthetic":false,"types":[]},{"text":"impl Debug for ChannelCheerEventsPublicV1","synthetic":false,"types":[]},{"text":"impl Debug for ChannelCheerEventsPublicV1Reply","synthetic":false,"types":[]},{"text":"impl Debug for TriggerType","synthetic":false,"types":[]},{"text":"impl Debug for ChannelPointsChannelV1","synthetic":false,"types":[]},{"text":"impl Debug for Redemption","synthetic":false,"types":[]},{"text":"impl Debug for RedemptionStatus","synthetic":false,"types":[]},{"text":"impl Debug for Reward","synthetic":false,"types":[]},{"text":"impl Debug for Image","synthetic":false,"types":[]},{"text":"impl Debug for GlobalCooldown","synthetic":false,"types":[]},{"text":"impl Debug for Max","synthetic":false,"types":[]},{"text":"impl Debug for ChannelPointsChannelV1Reply","synthetic":false,"types":[]},{"text":"impl Debug for ChannelSubGiftsV1","synthetic":false,"types":[]},{"text":"impl Debug for ChannelSubGiftsV1Reply","synthetic":false,"types":[]},{"text":"impl Debug for ChannelSubscribeEventsV1","synthetic":false,"types":[]},{"text":"impl Debug for ChannelSubscribeEventsV1Reply","synthetic":false,"types":[]},{"text":"impl Debug for Emote","synthetic":false,"types":[]},{"text":"impl Debug for SubMessage","synthetic":false,"types":[]},{"text":"impl Debug for CommunityPointsChannelV1","synthetic":false,"types":[]},{"text":"impl Debug for Following","synthetic":false,"types":[]},{"text":"impl Debug for FollowingReply","synthetic":false,"types":[]},{"text":"impl Debug for HypeTrainEventsV1","synthetic":false,"types":[]},{"text":"impl Debug for HypeTrainEventsV1Rewards","synthetic":false,"types":[]},{"text":"impl Debug for HypeTrainEventsV1Reply","synthetic":false,"types":[]},{"text":"impl Debug for Config","synthetic":false,"types":[]},{"text":"impl Debug for HypeTrainDifficulty","synthetic":false,"types":[]},{"text":"impl Debug for Kickoff","synthetic":false,"types":[]},{"text":"impl Debug for ParticipationConversionRates","synthetic":false,"types":[]},{"text":"impl Debug for NotificationThresholds","synthetic":false,"types":[]},{"text":"impl Debug for ConductorRewards","synthetic":false,"types":[]},{"text":"impl Debug for BitsRewards","synthetic":false,"types":[]},{"text":"impl Debug for SubsRewards","synthetic":false,"types":[]},{"text":"impl Debug for Participations","synthetic":false,"types":[]},{"text":"impl Debug for Conductors","synthetic":false,"types":[]},{"text":"impl Debug for HypeTrainProgress","synthetic":false,"types":[]},{"text":"impl Debug for Level","synthetic":false,"types":[]},{"text":"impl Debug for Reward","synthetic":false,"types":[]},{"text":"impl Debug for SourceType","synthetic":false,"types":[]},{"text":"impl Debug for ActionType","synthetic":false,"types":[]},{"text":"impl Debug for EndingReason","synthetic":false,"types":[]},{"text":"impl Debug for ChatModeratorActions","synthetic":false,"types":[]},{"text":"impl Debug for ChatModeratorActionsReply","synthetic":false,"types":[]},{"text":"impl Debug for ModerationActionCommand","synthetic":false,"types":[]},{"text":"impl Debug for ModerationType","synthetic":false,"types":[]},{"text":"impl Debug for Raid","synthetic":false,"types":[]},{"text":"impl Debug for RaidReply","synthetic":false,"types":[]},{"text":"impl Debug for VideoPlayback","synthetic":false,"types":[]},{"text":"impl Debug for VideoPlaybackById","synthetic":false,"types":[]},{"text":"impl Debug for VideoPlaybackReply","synthetic":false,"types":[]},{"text":"impl Debug for Vod","synthetic":false,"types":[]},{"text":"impl Debug for WatchpartyType","synthetic":false,"types":[]},{"text":"impl Debug for BroadcastType","synthetic":false,"types":[]},{"text":"impl Debug for TwitchResponse","synthetic":false,"types":[]},{"text":"impl Debug for TopicData","synthetic":false,"types":[]},{"text":"impl Debug for Response","synthetic":false,"types":[]},{"text":"impl Debug for SurfError","synthetic":false,"types":[]},{"text":"impl Debug for DummyHttpClient","synthetic":false,"types":[]}];
implementors["twitch_oauth2"] = [{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl&lt;EF:&nbsp;Debug, TT:&nbsp;Debug&gt; Debug for TwitchTokenResponse&lt;EF, TT&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TT: TokenType,<br>&nbsp;&nbsp;&nbsp;&nbsp;EF: ExtraTokenFields,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Debug for TwitchTokenErrorResponse","synthetic":false,"types":[]},{"text":"impl Debug for Scope","synthetic":false,"types":[]},{"text":"impl Debug for AppAccessToken","synthetic":false,"types":[]},{"text":"impl&lt;RE:&nbsp;Debug + Error + Send + Sync + 'static&gt; Debug for TokenError&lt;RE&gt;","synthetic":false,"types":[]},{"text":"impl&lt;RE:&nbsp;Debug + Error + Send + Sync + 'static&gt; Debug for ValidationError&lt;RE&gt;","synthetic":false,"types":[]},{"text":"impl&lt;RE:&nbsp;Debug + Error + Send + Sync + 'static&gt; Debug for RevokeTokenError&lt;RE&gt;","synthetic":false,"types":[]},{"text":"impl&lt;RE:&nbsp;Debug + Error + Send + Sync + 'static&gt; Debug for RefreshTokenError&lt;RE&gt;","synthetic":false,"types":[]},{"text":"impl Debug for UserToken","synthetic":false,"types":[]},{"text":"impl Debug for ValidatedToken","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()