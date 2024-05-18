import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { AppBar, useTheme, Button, IconButton, MenuItem, Typography } from '@mui/material';

import { authorizedNavigationList, unauthorizedNavigationList } from '@/config/Navigation';

import { INavigation, INavigationElement, IPlan } from '../../types/navigation';

const Navigation: FC<INavigation> = ({ plan = 'unauthorized', activeItem }) => {
  const theme = useTheme();
  const { push } = useRouter();
  const PLAN_VIEW: IPlan = {
    authorized: authorizedNavigationList,
    unauthorized: unauthorizedNavigationList
  }

  const planView = PLAN_VIEW[plan as keyof typeof PLAN_VIEW]

  return (
    <AppBar
      role="navigation"
      component="nav"
      sx={{
        minWidth: '50px',
        width: 'fit-content',
        background: theme.palette.primary.light,
        boxShadow: 'none',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        gap: 3
      }}
    >
      {planView.map((navItem: INavigationElement) => (
        <MenuItem
          role="link"
          key={navItem.title}
          className='component-navigationItem'
          disableGutters
          onClick={() => push(navItem.url)}
          sx={{
            display: { xs: 'flex', md: 'flex' },
            justifyContent: 'start',
            alignItems: 'center',
            gap: 2,
            width: 'fit-content',
            p: 0,
          }}
        >
          <IconButton
            sx={{ minWidth: '35px', m: 0, p: 0, }}
            color="secondary"
          >
            {navItem.icon}
          </IconButton>
          <Button sx={{
            display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
            justifyContent: 'flex-start',
            m: 0,
            p: 0,
          }}>
            <Typography variant="h3" sx={{
              color: activeItem === navItem.title
                ? theme.palette.primary.main
                : theme.palette.primary.dark,
              cursor: 'pointer',
            }}>
              {navItem.title}
            </Typography>
          </Button>
        </MenuItem>
      ))}
    </AppBar>
  );
};
export default Navigation;
