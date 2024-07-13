import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, CircularProgress, Menu, MenuItem, Typography } from '@mui/material';
import AccountMini from './AccountMini';

// import { useGetProfileAvatarQuery } from '@/query/profile/avatar.query'; /* image-сервис удален */
import { useLogoutQuery } from '@/query/authorization/authorization.query';


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
    <Box className="account-menu"  >

      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AccountMini name={name} tag={tag} hasAvatar={hasAvatar} isVerified={isVerified} isVertical={isVertical} />
      </Button>

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
        <MenuItem onClick={() => { handleClose(); push('/profile') }}>Profile</MenuItem>
        <MenuItem onClick={() => { handleClose(); logout(); push('/logout') }}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountMenu;
