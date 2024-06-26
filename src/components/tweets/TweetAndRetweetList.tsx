import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import Tweet from './Tweet';
import Retweet from './Retweet';

import { IDataTweet, IDataTweets } from '../../types/tweets';

const TweetAndRetweetList: FC<IDataTweets> = ({ tweets }, index) => {

  return (
    <Container
      className='tweet-retweet-list'
      disableGutters
    >
      {tweets.map((tweet: IDataTweet) => (
        <Box key={tweet.id}>
          {tweet.retweetTo && (
            <Retweet
              {...tweet.retweetTo}
            />
          )}
          {!tweet.retweetTo && !tweet.replyTo && (
            <Tweet
              {...tweet}
            />
          )}
          {tweets && tweets.length - 1 != index && <UnderLine />}
        </Box>
      ))}
    </Container>
  );
};

export default TweetAndRetweetList;
