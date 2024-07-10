import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import HomeView from '@/views/home/HomeView';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import { check } from '../api/authCheck';

const Home = () => {
  const isMock = process.env.isMock

  const { push } = useRouter();

  useEffect(() => {
    !isMock && check().then((res) => !res && push('/logout'));
  }, [push]);

  return (
    <>
      <DefaultSeo title="Home" {...SEO} />
      <Container aria-label='page-home' disableGutters>
        <HomeView />
      </Container>
    </>
  );
};

export default Home;
