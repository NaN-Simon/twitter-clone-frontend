import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, CircularProgress, Menu, MenuItem, Typography } from '@mui/material';

// import { useGetProfileAvatarQuery } from '@/query/profile/avatar.query'; /* image-сервис удален */
import { useLogoutQuery } from '@/query/authorization/authorization.query';

import CustomAvatar from '@/components/avatar/CustomAvatar';

import TaggedText from '@/common/TaggedText';

import VerifiedIcon from '@/components/UI/icon/VerifiedIcon';

interface IAccountMenu {
  name?: string;
  tag?: string;
  hasAvatar?: boolean;
  isVerified?: boolean;
  isVertical?: boolean;
  isLoading?: boolean
}

const AccountMenu: FC<IAccountMenu> = (props) => {
  const { name, tag, hasAvatar, isVerified, isVertical, isLoading } = props
  // const { data: avatarUrl } = useGetProfileAvatarQuery(); /* image-сервис удален */
  const { refetch: logout } = useLogoutQuery();
  const { push } = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isLoading) return (<CircularProgress sx={{ m: 1 }} />)
  if (!name || !tag) return (<></>)

  return (
    <Button aria-label="Account menu" onClick={handleClick} >
      {/* имя и тэг пользователя, всплывающее меню */}
      <Box
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
          m: 0,
          p: 0,
          minWidth: 'auto'
        }}
      >
        {/* отображение аватара или бланка */}
        {hasAvatar && <CustomAvatar src={null} width={30} height={30} />}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex', lg: 'flex' },
            flexDirection: isVertical ? 'column' : 'row',
            alignItems: isVertical ? 'start' : 'center',
            gap: '0 8px',
          }}
        >
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <Typography variant="h5" fontWeight={700}> {name} </Typography>
            {isVerified && <VerifiedIcon />}
          </Box>
          <TaggedText color="tag.contrastText" tagSymbol="@" text={tag} />
        </Box>
      </Box>

      <Menu
        disableScrollLock
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          '& .MuiMenu-paper': {
            bgcolor: 'background.default',
            top: '740px!important',
          }
        }}
      >
        <MenuItem sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }} >
          <span>JWT: </span>
          <input type="text" defaultValue={localStorage.getItem('auth-token') || 'notJWT'} />
        </MenuItem>
        <MenuItem onClick={() => {
          handleClose();
          push('/profile')
        }}>Profile</MenuItem>
        <MenuItem onClick={() => {
          handleClose();
          logout(); push('/logout')
        }}>Logout</MenuItem>
      </Menu>
    </Button>
  );
};

export default AccountMenu;
