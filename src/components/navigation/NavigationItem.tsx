import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Button, IconButton, MenuItem, Typography, useTheme } from '@mui/material';

import { INavigationItem } from '../../types/navigation';

const NavigationItem: FC<INavigationItem> = ({ navItem, isActiveItem }) => {
  const theme = useTheme();
  const { push } = useRouter();

  return (
    <MenuItem
      className='component-navigationItem'
      disableGutters
      key={navItem.title}
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
      <IconButton sx={{ minWidth: '35px', m: 0, p: 0, }} color="secondary" > {navItem.icon}
      </IconButton>
      <Button sx={{
        display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
        justifyContent: 'flex-start',
        m: 0,
        p: 0,
      }}>
        <Typography variant="h3" sx={{
          color: isActiveItem
            ? theme.palette.primary.main
            : theme.palette.primary.dark,
          cursor: 'pointer',
        }}>
          {navItem.title}
        </Typography>
      </Button>
    </MenuItem>
  );
};

export default NavigationItem;
