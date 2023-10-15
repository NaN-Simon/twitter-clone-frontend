import React, { FC, useRef } from 'react';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';

import useHover from '@/hooks/useHover';

import ViewsSVG from '@/assets/icons/Views.svg';

import styles from './WidgetButton.module.css'

interface IButtonViews {
  views: number;
}

const ButtonViews: FC<IButtonViews> = ({ views }) => {
  const theme = useTheme();
  const ref = useRef(null);
  const isHovering = useHover(ref)
  const notSelectedColor = theme.palette.buttonWidget?.main;

  return (
    <Container
      disableGutters
      ref={ref}
      className={styles['button-container']}
      sx={{
        fontFamily: theme.typography.button.fontFamily
      }}
    >

      {isHovering && <Box className={styles['button-hover']} >
        View
      </Box>}

      <Button className={styles['button']}>

        <Box sx={{ display: 'flex', fill: notSelectedColor, pb: 0.5 }}>
          <ViewsSVG />
        </Box>

        <Typography
          variant="h5"
          fontWeight={500}
          color='buttonWidget.main'
        >
          {views}
        </Typography>
        
      </Button>
    </Container>
  );
};

export default ButtonViews;
