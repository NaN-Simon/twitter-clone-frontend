import React, { FC } from 'react';
import img from '@/assets/images/blankAvatar.png';
import { Box, Container, useTheme } from '@mui/material';
import UnderLine from '@/common/UnderLine';
import Header from '@/components/headers/PageHeader';
import SingleWhoToFollow from './SingleWhoToFollow';

const temp = [
  {
    name: 'Elon Musk',
    tag: '@elonmusk',
    avatarUrl: img,
    altImg: 'alt',
    url: '/',
    followURL: '#',
  },
  {
    name: 'NASA',
    tag: '@NASA',
    avatarUrl: img,
    altImg: 'alt',
    url: '/',
    followURL: '#',
  },
];

const WhoToFollow: FC = () => {
  const theme = useTheme();
  return (
    <Container
      disableGutters
      sx={{
        background: theme.palette.background.default,
        borderRadius: '16px',
      }}
    >
      <Header title="Who to follow" />
      {temp.map((user, index) => (
        <Box key={user.tag}>
          <SingleWhoToFollow {...user} />
          {temp.length - 1 != index && <UnderLine />}
        </Box>
      ))}
    </Container>
  );
};

export default WhoToFollow;
