import api from '../../api/index';
import {
  RETWEET_DELETE,
  RETWEET_GET,
  RETWEET_LIST_GET,
  RETWEET_POST,
} from '../config';

export const setRetweet = async (retweetData: any) => {
  console.log(retweetData, '+');

  const response = await api.post<any>(`${RETWEET_POST}/${retweetData}`);
  return response;
};

export const getRetweet = async () => {
  const response = await api.get<any>(RETWEET_GET);
  return response;
};

export const getRetweetList = async () => {
  const response = await api.get<any>(RETWEET_LIST_GET);
  return response;
};

export const deleteRetweet = async (retweetData: number) => {
  console.log(retweetData, '-');

  const response = await api.delete(`${RETWEET_DELETE}/${retweetData}`);
  return response;
};