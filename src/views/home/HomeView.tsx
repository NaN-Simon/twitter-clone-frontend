import React, { FC, useEffect } from 'react';
import { Alert, Box, Button, CircularProgress, Grid, useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';
// import { useGetProfileAvatarQuery } from '@/query/profile/avatar.query';  /* image-сервис удален */
import { useGetTweetHomeQuery } from '@/query/timeline/homeTweets.query';

import InnerTweet from '@/components/inner/InnerTweet';
import PageHeader from '@/components/headers/PageHeader';
import News from '@/components/news/News';
import UnderLine from '@/common/UnderLine';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import TweetAndRetweetList from '@/components/tweets/TweetAndRetweetList';
import PageGridLeftSide from '@/modules/PageGridLeftSide';

const HomePage: FC = () => {
  const theme = useTheme();
  const { ref, inView } = useInView()
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useGetTweetHomeQuery();
  // const { data: avatarUrl } = useGetProfileAvatarQuery();  /* image-сервис удален */

  useEffect(() => {
    if (!isLoading && inView) {
      fetchNextPage()
    }
  }, [fetchNextPage, inView, isLoading])

  return (
    <Grid
      className='view-home'
      container
      gap={{ xs: 'initial', sm: 1, md: 2, lg: 2 }}
      sx={{ justifyContent: 'center', flexWrap: 'nowrap' }}
    >
      <PageGridLeftSide pageName='Home' />

      <Grid
        className='view-home-content'
        item
        sx={{
          width: { xs: 'auto', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <PageHeader title="Home" hasIcon />
        <UnderLine />

        <InnerTweet avatarUrl={null} />
        <UnderLine />

        <Box width='100%' textAlign='center'> {isLoading && <CircularProgress sx={{ m: 1 }} />} </Box>
        {isError && (<Alert severity="error">Ошибка загрузки постов user</Alert>)}
        {data && data.pages.map((page, index: number) => {
          // console.log('page', page);
          return (
          <React.Fragment key={index}>
            <TweetAndRetweetList tweets={page || []} />
          </React.Fragment>
        )})}
        {hasNextPage && (
          <Button sx={{ width: '100%' }} ref={ref} onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading more...' : 'Load More'}
          </Button>
        )}
      </Grid>

      <Grid
        className='view-home-additional'
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

export default HomePage;
