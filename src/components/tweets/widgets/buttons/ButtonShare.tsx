import React, { FC, useRef } from 'react';
import { Box, Button, Container, useTheme } from '@mui/material';

import ShareSVG from '@/assets/icons/Share.svg';

import useHover from '@/hooks/useHover';

import styles from './WidgetButton.module.css'

interface IButtonShare {
  id: number;
}


const ButtonShare: FC<IButtonShare> = ({ id }) => {
  const theme = useTheme();
  const ref = useRef(null);
  const isHovering = useHover(ref)
  const notSelectedColor = theme.palette.buttonWidget?.main;

  const onChangeShare = () => {
    console.log('onChangeShare: ', id);
  };

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
        Share
      </Box>}

      <Button onClick={onChangeShare} className={styles['button']}>
        <Box sx={{ display: 'flex', stroke: notSelectedColor }}>
          <ShareSVG />
        </Box>
      </Button>

    </Container>
  );
};

export default ButtonShare;
