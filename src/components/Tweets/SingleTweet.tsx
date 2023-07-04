import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import Avatar from '@/components/Avatar';
import UserHeader from '@/components/headers/UserHeader';
import PassedTime from '@/common/PassedTime';
import TweetContent from './TweetContent';
import { ISingleTweet } from '@/components/tweets/types';
import MoreActionButton from '@/components/tweets/MoreActionButton';

const SingleTweet: FC<ISingleTweet> = ({
  id,
  isLiked,
  isRetweeted,
  avatarUrl,
  avatarAlt,
  username,
  userTag,
  userPassedTime,
  tweetText,
  tweetImg,
  tweetAlt,
  likes,
  replies,
  replyTo,
  retweets,
  retweetTo,
  viewsCount,
}) => {
  return (
    <Container
      id={id.toString()}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0 13px',
        padding: '10px 15px',
      }}
    >
      <Avatar img={avatarUrl} alt={avatarAlt} />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: { xs: 'wrap', sm: 'nowrap' },
              gap: '8px',
            }}
          >
            <UserHeader name={username} tag={userTag} />
            <PassedTime date={userPassedTime} />
          </Box>
          <MoreActionButton id={id} />
        </Box>
        <TweetContent
          id={id}
          isLiked={isLiked}
          isRetweeted={isRetweeted}
          tweetText={tweetText}
          tweetImg={tweetImg}
          tweetAlt={tweetAlt}
          likes={likes}
          replies={replies}
          replyTo={replyTo}
          retweets={retweets}
          retweetTo={retweetTo}
          viewsCount={viewsCount}
        />
      </Box>
    </Container>
  );
};

export default SingleTweet;
