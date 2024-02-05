import React, { FC } from 'react';
import CustomAvatar from '@/components/avatar/CustomAvatar';
import { Box, Paper, Typography } from '@mui/material';
import { Container, useTheme } from '@mui/system';
import TaggedText from '@/common/TaggedText';
import Location from '../Location';
import JoinedDate from '@/common/JoinedDate';
interface IUserInfoTemplate {
  avatarUrl?: string;
  username: string | 'null';
  tag: string | 'null';
  bio?: string;
  location?: string;
  joinedDate?: string;
}

const UserInfoTemplate: FC<IUserInfoTemplate> = ({
  avatarUrl,
  username,
  tag,
  bio,
  location,
  joinedDate,
}) => {
  const theme = useTheme();
  return (
    <Container disableGutters sx={{ marginBottom: '10px' }}>
      <Paper
        variant="elevation"
        square
        sx={{
          background: theme.palette.primary.main,
          width: '100%',
          height: '100px',
        }}
      ></Paper>
      <Box display="flex" flexDirection="column" gap={1} mx={2}>
        <Box marginTop="-75px">
          <CustomAvatar width={150} height={150} img={avatarUrl} alt={avatarUrl} />
        </Box>
        <Typography variant="h2">{username}</Typography>
        {tag && <TaggedText color="tag.contrastText" tagSymbol="@" text={tag} />}
        {bio && (
          <Typography variant="h4" my={1}>
            {' '}
            {bio}{' '}
          </Typography>
        )}
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
          {location && <Location location={location} />}
          {joinedDate && <JoinedDate joinedDate={joinedDate} />}
        </Box>
      </Box>
    </Container>
  );
};

export default UserInfoTemplate;
