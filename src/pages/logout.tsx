import React from 'react';
import { Container } from '@mui/material';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import LogoutView from '@/views/logout/LogoutView';

const Logout = () => {
  return (
    <>
      <DefaultSeo title="Welcome in to Twitter" {...SEO} />
      <Container aria-label='page-logout' disableGutters>
        <LogoutView />
      </Container>
    </>
  );
};

export default Logout;
