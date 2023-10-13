import React, { FC } from 'react';
import { Grid, useTheme } from '@mui/material';

import Navigation from '@/components/navigation/Navigation';
import PageHeader from '@/components/headers/PageHeader';
import OfferToRegister from '@/components/offerToRegister/OfferToRegister';

import UnderLine from '@/common/UnderLine';

import Description from '@/temp/Description';

const LogoutView: FC = () => {
  const theme = useTheme();
  return (
    <Grid
      className='view-logout'
      container
      gap={{ xs: 'initial', sm: 1, md: 2, lg: 2 }}
      sx={{ justifyContent: 'center', flexWrap: 'nowrap' }}
    >
      <Grid
        className='view-logout-menu'
        item
        sx={{
          minWidth: { xs: '35px', sm: '35px', md: '200px', lg: '200px' },
          position: 'relative',
          pt: 1
        }}>
        <Navigation plan='unauthorized' activeItem="View" />
      </Grid>
      <Grid
        item
        sx={{
          width: { xs: '300px', sm: '600px', md: '600px' },
          borderLeft: `1px solid ${theme.palette.border?.main}`,
          borderRight: `1px solid ${theme.palette.border?.main}`,
        }}
      >
        <UnderLine />
        <PageHeader title="View" />
        <UnderLine />
        <Description />
        <UnderLine />
      </Grid>
      <Grid
        item
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          width: '350px',
        }}
      >
        <OfferToRegister />
      </Grid>
    </Grid>
  );
};

export default LogoutView;
