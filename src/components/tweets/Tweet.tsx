import React, { FC } from 'react';
import { useRouter } from 'next/router'
import { Box, Container } from '@mui/material';
import CustomAvatar from '@/components/avatar/CustomAvatar';
import UserHeader from '@/components/headers/UserHeader';
import PassedTime from '@/common/PassedTime';
import TweetContent from './TweetContent';
import MoreActionButton from '@/components/tweets/widgets/buttons/ButtonMore';
import TweetWidgets from './widgets/TweetWidgets';
import { ITweet } from '@/types/tweets';

const Tweet: FC<ITweet> = (props) => {
  console.log(props)
  const { id, isLiked, isRetweeted, isBelongs, profile, creationDate, text, /* mediaUrls */ likes, replies, replyTo, retweets, retweetTo, views } = props
  const { push } = useRouter();

  const redirect = (link: string) => {
    push(`/user/${link}`)
  }

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: { xs: 'wrap', sm: 'nowrap' }, gap: '8px' }} >
            <UserHeader
            onClick={() => { redirect(profile.username) }}
            name={profile.username}
            tag={profile.username}
            />
            <PassedTime date={creationDate} />
          </Box>
          {isBelongs && <MoreActionButton id={id} type={'tweet'} />}
        </Box>
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
          <TweetWidgets
            id={id}
            isLiked={isLiked}
            isRetweeted={isRetweeted}
            likes={likes}
            replies={replies}
            replyTo={replyTo}
            retweets={retweets}
            retweetTo={retweetTo}
            views={views}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Tweet;
