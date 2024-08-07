import React, { FC } from 'react';
import { Box, Container } from '@mui/material';
import CustomAvatar from '@/components/avatar/CustomAvatar';
import TweetContent from './TweetContent';
import { ITweet } from '@/types/tweets';
import UserHeaderTweet from './components/UserHeaderTweet';
import QuotedUser from '@/common/QuotedUser';
import ButtonLike from './widgets/buttons/ButtonLike';
import ButtonReply from './widgets/buttons/ButtonReply';
import ButtonRetweet from './widgets/buttons/ButtonRetweet';
import ButtonShare from './widgets/buttons/ButtonShare';
import ButtonViews from './widgets/buttons/ButtonViews';

const Tweet: FC<ITweet> = (props) => {
  const { id, isLiked, isRetweeted, isBelongs, profile, creationDate, text, /* mediaUrls */ likes, replies, replyTo, retweets, retweetTo, views } = props
  const { username } = profile

  return (
    <Container
      className='tweet'
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '0 13px',
        padding: '10px 15px',
      }}
    >
      <CustomAvatar src={null} />
      <Box sx={{ width: '100%' }}>
        <UserHeaderTweet id={id} username={username} creationDate={creationDate} isBelongs={isBelongs} type='tweet' />
        <Box
          sx={{
            m: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: { xs: '100%', md: '100%' },
            maxWidth: { xs: '100%', md: '510px' },
          }}
        >
          <TweetContent
            text={text}
          // mediaUrls={mediaUrls}
          />
          <Container
            className='component-tweet-widgets'
            disableGutters
            sx={{
              display: 'flex',
              flexDirection: 'raw',
              // flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <ButtonReply replayHeader={<UserHeaderTweet id={id} username={username} creationDate={creationDate} isBelongs={isBelongs} type='tweet' disableMoreActionButton />} quotedUser={<QuotedUser username={username} />} replyTo={replyTo} replyToId={id} replies={replies} replyingText={text} />
            <ButtonRetweet id={id} isRetweeted={isRetweeted} retweets={retweets} retweetTo={retweetTo} />
            <ButtonLike id={id} likes={likes} isLiked={isLiked} />
            <ButtonViews views={views} />
            <ButtonShare id={id} />
          </Container>
        </Box>
      </Box>
    </Container>
  );
};

export default Tweet;
