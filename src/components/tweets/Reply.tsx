import React, { FC } from 'react';
import { Box, Container, Paper, useTheme } from '@mui/material';
import CustomAvatar from '@/components/avatar/CustomAvatar';
import TweetContent from './TweetContent';
import { IDataReply } from '../../types/tweets';
import QuotedUser from '@/common/QuotedUser';
import ButtonLike from './widgets/buttons/ButtonLike';
import ButtonReply from './widgets/buttons/ButtonReply';
import ButtonRetweet from './widgets/buttons/ButtonRetweet';
import ButtonShare from './widgets/buttons/ButtonShare';
import ButtonViews from './widgets/buttons/ButtonViews';
import UserHeaderTweet from './components/UserHeaderTweet';
const Reply: FC<IDataReply> = (props) => {
  const { id, isLiked, isRetweeted, isBelongs, /* mediaUrls, */ likes, replies, replyTo, retweets, retweetTo, views, profile, creationDate, text, replyId, replyIsLiked, replyIsRetweeted, replyIsBelongs, replyProfile, replyCreationDate, replyTweetText, /* replyMediaUrls, */ replyLikes, replyReplies, replyReplyTo, replyRetweets, replyRetweetTo, replyViews } = props
  const { username } = profile
  const { username: replyUsername } = replyProfile

  const theme = useTheme();

  return (
    <Container
      aria-label='reply'
      className='reply'
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: '10px 15px',
      }}
    >
      {/* Новый твит */}
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <Box position="relative">
          <CustomAvatar src={null} />
          <Paper
            sx={{
              background: theme.palette.secondary.main,
              position: 'absolute',
              left: '50%',
              width: '1px',
              filter: 'blur(1px)',
              height: '40px',
              marginTop: '5px',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            width: '100%',
          }}
        >
          <UserHeaderTweet id={replyId} username={replyUsername} creationDate={replyCreationDate} isBelongs={replyIsBelongs} type='tweet' disableMoreActionButton />

          <TweetContent
            text={replyTweetText}
          // mediaUrls={replyMediaUrls}
          />
          <Container
            className='component-tweet-widgets'
            disableGutters
            sx={{
              display: 'flex',
              flexDirection: 'raw',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <ButtonReply replyTo={replyReplyTo} replyToId={replyId} replies={replyReplies} />
            <ButtonRetweet id={replyId} isRetweeted={replyIsRetweeted} retweets={replyRetweets} retweetTo={replyRetweetTo} />
            <ButtonLike id={replyId} likes={replyLikes} isLiked={replyIsLiked} />
            <ButtonViews views={replyViews} />
            <ButtonShare id={replyId} />
          </Container>
        </Box>
      </Box>
      {/* Цитируемый твит */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'end',
        width: '100%'
      }}>
        <Box display="flex" flexDirection="row" gap={2} sx={{ width: '98%' }}>
          <CustomAvatar src={null} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              width: '100%',
            }}
          >
            <UserHeaderTweet id={id} username={username} creationDate={creationDate} isBelongs={isBelongs} type='reply' />
            <Box display="flex" flexDirection="column" gap={1}>
              <QuotedUser username={replyProfile.username} />
              <TweetContent
                text={text}
              // mediaUrls={mediaUrls}
              />
            </Box>
            <Container
              className='component-tweet-widgets'
              disableGutters
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <ButtonReply replayHeader={<UserHeaderTweet id={replyId} username={replyUsername} creationDate={replyCreationDate} isBelongs={replyIsBelongs} type='tweet' disableMoreActionButton />} quotedUser={<QuotedUser username={replyUsername} />} replyTo={replyTo} replyToId={replyId} replies={replies} replyingText={text} />
              <ButtonRetweet id={id} isRetweeted={isRetweeted} retweets={retweets} retweetTo={retweetTo} />
              <ButtonLike id={id} likes={likes} isLiked={isLiked} />
              <ButtonViews views={views} />
              <ButtonShare id={id} />
            </Container>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Reply;
