import api from '@/api';
import {
  // TIMELINES_TWEETS_GET_USER,
  TIMELINES_TWEETS_GET_USER_BY_ID,
  // TIMELINES_TWEETS_GET_USER_HOME,
  // TIMELINES_TWEETS_GET_USER_REPLIES,
} from '../config';

import dataHome from '@/demoData/tweetsHome.json'
import dataReplies from '../../demoData/tweetsReplies.json'
import dataUser from '../../demoData/tweetsUser.json'


export const getHomeTweets = async (pageParam: number) => {
  // const response = await api.get(TIMELINES_TWEETS_GET_USER_HOME + `?page=${pageParam}&size=10`);
  // return response.data;
  return dataHome;
};

export const getUserTweets = async (pageParam: number) => {
  // const response = await api.get(TIMELINES_TWEETS_GET_USER + `?page=${pageParam}&size=10`);
  // return response.data;
  return dataUser;
};

export const getUserRepliesTweets = async (pageParam: number) => {
  // const response = await api.get(TIMELINES_TWEETS_GET_USER_REPLIES + `?page=${pageParam}&size=10`);
  // return response.data;
  return dataReplies;
};

export const getUserTweetsById = async (profileId: string) => {
  // const response = await api.get(TIMELINES_TWEETS_GET_USER_BY_ID + '/' + profileId);
  // return response;
};