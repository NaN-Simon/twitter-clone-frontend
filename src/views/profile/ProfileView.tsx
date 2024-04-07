import React, { FC } from 'react';
import { Box, Grid, useTheme } from '@mui/material';

import { useGetAuthorizedUserDataQuery } from '@/query/profile/authorizedUserData.query';

import PageHeader from '@/components/headers/PageHeader';
import Navigation from '@/components/navigation/Navigation';
import News from '@/components/news/News';
import UnderLine from '@/common/UnderLine';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import TweetTabPanel from './components/TweetTabPanel';
import UserInfo from '../../components/userInfo/UserInfo';
import AccountMenu from '@/components/navigation/AccountMenu';

const ProfileView: FC = () => {
  const theme = useTheme();
  const { data: userInfoData, isLoading: userInfoDataIsLoading } = useGetAuthorizedUserDataQuery();

  return (
    <Grid
      className='view-profile'
      container
      gap={{ xs: 'initial', sm: 1, md: 2, lg: 2 }}
      sx={{ justifyContent: 'center', flexWrap: 'nowrap' }}
    >
      <Grid
        className='view-profile-menu'
        item
        sx={{
          minWidth: { xs: '35px', sm: '35px', md: '200px', lg: '200px' },
          position: 'relative'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'fixed',
            height: '100vh',
            width: 'inherit',
            py: 1,
          }}>
          <Navigation plan='authorized' activeItem="Profile" />
          <AccountMenu
            isLoading={userInfoDataIsLoading}
            hasAvatar
            isVertical
            name={userInfoData && userInfoData.username}
            tag={userInfoData && userInfoData.username}
          />
        </Box>
      </Grid>

      <Grid
        className='view-profile-content'
        item
        sx={{
          width: { xs: 'auto', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <PageHeader title="Profile" />
        <UnderLine />
        <UserInfo hasEditButton userInfoData={userInfoData} />
        <UnderLine />
        <TweetTabPanel />
      </Grid>

      <Grid
        className='view-profile-additional'
        item
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
          flexDirection: 'column',
          gap: '30px',
          width: '350px',
        }}
      >
        <News />
        <WhoToFollow />
      </Grid>
    </Grid>
  );
};

export default ProfileView;
