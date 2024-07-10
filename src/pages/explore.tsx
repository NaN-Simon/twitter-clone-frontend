import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import { check } from '../api/authCheck';
import ExploreView from '@/views/explore/ExploreView';

const Profile = () => {
  const isMock = process.env.isMock
  const { push } = useRouter();

  useEffect(() => {
    !isMock && check().then((res) => !res && push('/logout'));
  }, [push]);

  return (
    <>
      <DefaultSeo title="Explore" {...SEO} />
      <Container  aria-label='page-explore' disableGutters>
        <ExploreView />
      </Container>
    </>
  );
};

export default Profile;
