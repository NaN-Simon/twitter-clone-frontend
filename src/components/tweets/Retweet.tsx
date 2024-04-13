import React, { FC } from 'react';
import { useRouter } from 'next/router'
import { useGetAuthorizedUserDataQuery } from '@/query/profile/authorizedUserData.query';
import { Box, Container, Typography, useTheme } from '@mui/material';
import CustomAvatar from '@/components/avatar/CustomAvatar';
import UserHeader from '@/components/headers/UserHeader';
import PassedTime from '@/common/PassedTime';
import RetweetSVG from '@/assets/icons/Retweet.svg';
import TweetContent from './TweetContent';
import TweetWidgets from './widgets/TweetWidgets';
import MoreActionButton from './widgets/buttons/ButtonMore';
import { ITweet } from '@/types/tweets';
const Retweet: FC<ITweet> = (props) => {
  const { id, isLiked, isRetweeted, isBelongs, profile, creationDate, text, /* mediaUrls */ likes, replies, replyTo, retweets, retweetTo, views } = props

  const theme = useTheme();
  const { data: profileData } = useGetAuthorizedUserDataQuery();
  const { push } = useRouter();

  const redirect = (link: string) => {
    push(`/user/${link}`)
  }

  return (
    <Container
      className='retweet'
      id={id.toString()}
      disableGutters
      sx={{ display: 'flex', flexDirection: 'row', gap: '0 13px', padding: '10px 15px' }}
    >
      <CustomAvatar src={null} />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 0.5, }} >
              <RetweetSVG width="15" height="11" />
              <Typography variant="h6" sx={{ color: theme.palette.secondary.main }} >
                {profileData && profileData.username} Retweeted
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'start', textAlign: 'center', flexWrap: { xs: 'wrap', sm: 'nowrap' }, gap: '8px', }} >
              <UserHeader
              onClick={()=>{redirect(profile.username)}}
              name={profile.username}
              tag={profile.username}
              />
              <PassedTime date={creationDate} />
            </Box>
          </Box>
          {isBelongs && <MoreActionButton id={id} type={'retweet'} />}
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

export default Retweet;
