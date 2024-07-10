import api from '@/api';
import {
  TIMELINES_TWEETS_GET_USER,
  TIMELINES_TWEETS_GET_USER_BY_ID,
  TIMELINES_TWEETS_GET_USER_HOME,
  TIMELINES_TWEETS_GET_USER_REPLIES,
} from '../config';

import tweetsHomeMock from '../../config/mock/tweetsHome.mock.json'
import tweetsRepliesMock from '../../config/mock/tweetsReplies.mock.json'
import tweetsUserMock from '../../config/mock/tweetsUser.mock.json'

const isMock = process.env.isMock

export const getHomeTweets = async (pageParam: number) => {
  if(isMock) return tweetsHomeMock

  const response = await api.get(TIMELINES_TWEETS_GET_USER_HOME + `?page=${pageParam}&size=10`);
  return response.data;
};

export const getUserTweets = async (pageParam: number) => {
  if(isMock) return tweetsUserMock

  const response = await api.get(TIMELINES_TWEETS_GET_USER + `?page=${pageParam}&size=10`);
  return response.data;
};

export const getUserRepliesTweets = async (pageParam: number) => {
  if(isMock) return tweetsRepliesMock

  const response = await api.get(TIMELINES_TWEETS_GET_USER_REPLIES + `?page=${pageParam}&size=10`);
  return response.data;
};

export const getUserTweetsById = async (profileId: string) => {
  const response = await api.get(TIMELINES_TWEETS_GET_USER_BY_ID + '/' + profileId);
  return response;
};