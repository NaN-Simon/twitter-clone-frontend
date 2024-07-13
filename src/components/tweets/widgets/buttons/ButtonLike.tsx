import React, { FC, useRef, useState } from 'react';
import { Box, Container, ToggleButton, Typography, useTheme } from '@mui/material';

import { useLikeMutation, useDeleteLikeMutation } from '@/query/likes/likes.mutation';

import LikeSVG from '@/assets/icons/Like.svg';

import useHover from '@/hooks/useHover';

import styles from './WidgetButton.module.css'

interface IButtonLike {
  id: number;
  likes: number;
  isLiked: boolean;
}

const ButtonLike: FC<IButtonLike> = ({ id, likes, isLiked }) => {
  const theme = useTheme();
  const [isActive, setActive] = useState(isLiked);
  const [likesCount, setLikesCount] = useState(likes);
  const ref = useRef(null);
  const isHovering = useHover(ref)
  const { mutateAsync: mutateMakeLike } = useLikeMutation();
  const { mutateAsync: mutateDeleteLike } = useDeleteLikeMutation();

  const notSelectedColor = theme.palette.buttonLike?.main;
  const selectedColor = theme.palette.buttonLike?.contrastText;
  const strokeColor = isActive ? selectedColor : notSelectedColor;
  const fillColor = isActive ? selectedColor : 'none';


  const onChange = async () => {
    if (isActive) {
      await mutateDeleteLike(id);
      await setActive(false);
      setLikesCount((likesCount) => likesCount - 1);
    } else {
      await mutateMakeLike(id);
      await setActive(true);
      setLikesCount((likesCount) => likesCount + 1);
    }
  };

  return (
    <Container
      disableGutters
      ref={ref}
      className={styles['button-container']}
      sx={{
        fontFamily: theme.typography.button.fontFamily,
        // bgcolor: 'red',
      }}
    >

      {isHovering && <Box className={styles['button-hover']} >
        Like
      </Box>}

      <ToggleButton
        value="check"
        selected={isLiked}
        onChange={onChange}
        className={styles['button']}
        sx={{
          '& .MuiButtonBase-root-MuiToggleButton-root': {
            border: 'node!important',
          },
          border: 'none!important',
          '&:hover': {
            color: selectedColor
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            strokeWidth: 2,
            stroke: strokeColor,
            fill: fillColor,
          }}
        >
          <LikeSVG />
        </Box>

        <Typography variant="h5" fontWeight={500} sx={{ color: notSelectedColor }} >
          {likesCount}
        </Typography>

      </ToggleButton>

    </Container>
  );
};

export default ButtonLike;
