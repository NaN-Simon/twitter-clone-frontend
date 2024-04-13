import React, { FC } from 'react';
import { CircularProgress, Grid, useTheme } from '@mui/material';

import { useGetAuthorizedUserDataQuery } from '@/query/profile/authorizedUserData.query';

import PageHeader from '@/components/headers/PageHeader';
import News from '@/components/news/News';
import UnderLine from '@/common/UnderLine';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import TweetTabPanel from './components/TweetTabPanel';
import UserInfo from '../../components/userInfo/UserInfo';
import PageGridLeftSide from '@/modules/PageGridLeftSide';

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
      <PageGridLeftSide pageName='Profile' />

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
        {userInfoDataIsLoading && <CircularProgress sx={{ m: 1 }} />}
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
