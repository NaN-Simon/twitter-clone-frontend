import React, { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import TaggedText from '@/common/TaggedText';
import VerifiedIcon from '@/components/UI/icon/VerifiedIcon';
interface IUserHeader {
  name: string;
  tag: string;
  isVerified?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void; // Corrected type
}

const UserHeader: FC<IUserHeader> = ({ name, tag, isVerified, onClick }) => {

  return (
    <Container
      onClick={onClick}
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 1,
        width: 'auto',
        m: 0,
        cursor: 'pointer',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0 8px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Typography variant="h5" fontWeight={700}>{name}</Typography>
          {isVerified && <VerifiedIcon />}
        </Box>
        <TaggedText color="tag.contrastText" tagSymbol="@" text={tag} />
      </Box>
    </Container>
  );
};

export default UserHeader;
