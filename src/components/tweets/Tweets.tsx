import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import { IDataTweet, IDataTweets } from '../../types/tweets';
import Tweet from './Tweet';
import Retweet from './Retweet';
import Reply from './Reply';

const Tweets: FC<IDataTweets> = ({ tweets }, index) => {
  console.log(tweets);
  return (
    <Container disableGutters>
      {tweets.map((tweet: IDataTweet) => (
        <Box key={tweet.id}>
          {tweet.retweetTo && (
            <Retweet
              id={tweet.retweetTo.id}
              isLiked={tweet.retweetTo.isLiked}
              isRetweeted={tweet.retweetTo.isRetweeted}
              isBelongs={tweet.retweetTo.isBelongs}
              likes={tweet.retweetTo.likes}
              profile={tweet.retweetTo.profile}
              creationDate={tweet.retweetTo.creationDate}
              text={tweet.retweetTo.text}
              // mediaUrls={tweet.retweetTo.mediaUrls}
              replies={tweet.retweetTo.replies}
              replyTo={tweet.retweetTo.replyTo}
              retweets={tweet.retweetTo.retweets}
              retweetTo={tweet.retweetTo.retweetTo}
              views={tweet.retweetTo.views}
            />
          )}
          {tweet.replyTo && (
            <Reply
              id={tweet.id}
              isLiked={tweet.isLiked}
              isRetweeted={tweet.isRetweeted}
              isBelongs={tweet.isBelongs}
              // mediaUrls={tweet.mediaUrls}
              likes={tweet.likes}
              replies={tweet.replies}
              replyTo={tweet.replyTo}
              retweets={tweet.retweets}
              retweetTo={tweet.retweetTo}
              views={tweet.views}
              profile={tweet.profile}
              creationDate={tweet.creationDate}
              text={tweet.text}
              replyId={tweet.replyTo.id}
              replyIsLiked={tweet.replyTo.isLiked}
              replyIsRetweeted={tweet.replyTo.isRetweeted}
              replyIsBelongs={tweet.replyTo.isBelongs}
              replyProfile={tweet.replyTo.profile}
              replyCreationDate={tweet.replyTo.creationDate}
              replyTweetText={tweet.replyTo.text}
              // replyMediaUrls={tweet.replyTo.mediaUrls}
              replyLikes={tweet.replyTo.likes}
              replyReplies={tweet.replyTo.replies}
              replyReplyTo={tweet.replyTo.replyTo}
              replyRetweets={tweet.replyTo.retweets}
              replyRetweetTo={tweet.replyTo.retweetTo}
              replyViews={tweet.replyTo.views}
            />
          )}
          {!tweet.retweetTo && !tweet.replyTo && (
            <Tweet
              id={tweet.id}
              isLiked={tweet.isLiked}
              isRetweeted={tweet.isRetweeted}
              isBelongs={tweet.isBelongs}
              likes={tweet.likes}
              profile={tweet.profile}
              // mediaUrls={tweet.mediaUrls}
              creationDate={tweet.creationDate}
              replies={tweet.replies}
              replyTo={tweet.replyTo}
              retweetTo={tweet.retweetTo}
              retweets={tweet.retweets}
              text={tweet.text}
              views={tweet.views}
            />
          )}
          {tweets && tweets.length - 1 != index && <UnderLine />}
        </Box>
      ))}
    </Container>
  );
};

export default Tweets;
