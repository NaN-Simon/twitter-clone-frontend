import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { useUserDataByPathIdQuery } from '@/query/profile/userDataByPathId.query';
import { useGetAuthorizedUserDataQuery } from '@/query/profile/authorizedUserData.query';
import { useGetSearchUsersListQuery } from '@/query/profile/search.query';
import UnderLine from '@/common/UnderLine';
import AccountBar from '@/components/headers/AccountBar';
import PageHeader from '@/components/headers/PageHeader';
import News from '@/components/news/News';
import UserInfo from '@/components/userInfo/UserInfo';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import { menuList } from '@/data/configMenu/configMenu';
import Navigation from '@/components/navigation/Navigation';
import theme from '@/theme/theme';
import { ISearchQueryData } from '@/services/types';

const User = () => {
  const username = useRouter().query.userId as string

  const [profileId, setProfileId] = useState('')
  const [searchRequestData, setSearchRequestData] = useState<ISearchQueryData>({ username: username, page: 0, size: 1 });
  const { data: searchResponseData } = useGetSearchUsersListQuery(searchRequestData);

  useEffect(() => { setSearchRequestData({ username: username, page: 0, size: 1 }) }, [username])

  useEffect(() => {
    searchResponseData && searchResponseData.content[0] && setProfileId(searchResponseData.content[0].profileId)
  }, [searchRequestData, searchResponseData])

  const { data: userInfoData, isLoading: userInfoDataIsLoading } = useUserDataByPathIdQuery(profileId)
  const { data: authorizedUserData, isLoading: authorizedUserIsLoading } = useGetAuthorizedUserDataQuery()
  console.log(userInfoData);

  return (
    <Grid container gap={2} justifyContent='center' flexWrap='nowrap' >
      <Grid item
        sx={{
          width: { xs: '75px', sm: '75px', md: '200px', lg: '200px' },
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
            pb: 2,
          }}>
          <Navigation menuList={menuList} />
          {authorizedUserIsLoading && <CircularProgress sx={{ m: 1 }} />}
          {authorizedUserData && <AccountBar hasAvatar isVertical name={authorizedUserData.username} tag={authorizedUserData.username} />}
        </Box>
      </Grid>

      <Grid item
        sx={{
          width: { xs: '350px', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        {username && <PageHeader title={username.toString()} />}
        <UnderLine />
        {userInfoDataIsLoading && <CircularProgress sx={{ m: 1 }} />}
        <UserInfo userInfoData={userInfoData} />
        <UnderLine />
        {userInfoData === undefined && <Typography variant='h1' sx={{textAlign: 'center'}}>This account doesn’t exist</Typography>}
      </Grid>

      <Grid
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

export default User;
