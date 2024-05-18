import React, { FC } from 'react';
import { Grid, useTheme } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import News from '@/components/news/News';
import WhoToFollow from '@/components/whoToFollow/WhoToFollow';
import Search from '@/components/search/Search';
import PageLeftSide from '@/modules/PageLeftSide';

const ProfileView: FC = () => {
  const theme = useTheme();

  return (
    <Grid
      className='view-explore'
      container
      gap={{ xs: 'initial', sm: 1, md: 2, lg: 2 }}
      sx={{ justifyContent: 'center', flexWrap: 'nowrap' }}
    >
      <PageLeftSide pageName='Explore' />

      <Grid item
        className='view-explore-content'
        sx={{
          width: { xs: 'auto', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <UnderLine />
        <Search />
      </Grid>

      <Grid
        className='view-explore-additional'
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
