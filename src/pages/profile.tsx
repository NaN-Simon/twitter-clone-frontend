import React from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container } from '@mui/material';
import { check } from '../api/authCheck';
import ProfileView from '@/views/profile/ProfileView';

const Profile = () => {
  const isMock = process.env.isMock

  const { push } = useRouter();

  useEffect(() => {
    !isMock && check().then((res) => !res && push('/logout'));
  }, [push]);

  return (
    <>
      <DefaultSeo title="Profile" {...SEO} />
      <Container 
      aria-label='page-profile' 
      disableGutters
      sx={{
        maxWidth: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
      }}
      >
        <ProfileView />
      </Container>
    </>
  );
};

export default Profile;
