import React, { FC, useRef, useState } from 'react';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';

import { useMakeRetweetMutation } from '@/query/retweet/addRetweet.mutation';
import { useDeleteRetweetMutation } from '@/query/retweet/deleteRetweet.mutation';

import RetweetSVG from '@/assets/icons/Retweet.svg';

import useHover from '@/hooks/useHover';

import { IDataRetweetTo } from '../../types';

import styles from './WidgetButton.module.css'

interface IButtonRetweet {
  id: number;
  isRetweeted: boolean;
  retweets: number;
  retweetTo?: IDataRetweetTo | null;
}

const ButtonRetweet: FC<IButtonRetweet> = ({ id, retweets, isRetweeted }) => {
  const theme = useTheme();
  const [isActive, setActive] = useState(isRetweeted);
  const [retweetCount, setRetweetCount] = useState(retweets);
  const { mutateAsync: mutateMakeRetweet } = useMakeRetweetMutation();
  const { mutateAsync: mutateDeleteRetweet } = useDeleteRetweetMutation();

  const notSelectedColor = theme.palette.buttonWidget?.main;
  const selectedColor = theme.palette.buttonWidget?.contrastText;
  const strokeColor = isActive ? selectedColor : notSelectedColor;

  const ref = useRef(null);
  const isHovering = useHover(ref)

  const onClick = async () => {
    if (isActive) {
      await mutateDeleteRetweet(id);
      await setActive(false);
      await setRetweetCount((retweetCount) => retweetCount - 1);
    } else {
      await mutateMakeRetweet(id);
      await setActive(true);
      await setRetweetCount((retweetCount) => retweetCount + 1);
    }
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
        Retweet
      </Box>}

      <Button onClick={onClick} className={styles['button']}>

        <Box sx={{ display: 'flex', stroke: strokeColor }}>
          <RetweetSVG />
        </Box>

        <Typography
          variant="h5"
          fontWeight={500}
          sx={{ color: notSelectedColor }}
        >
          {retweetCount}
        </Typography>
      </Button>
    </Container>
  );
};

export default ButtonRetweet;
