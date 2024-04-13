import React, { FC, useRef, useState } from 'react';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';

import InnerReply from '@/components/inner/InnerReply';
import Popup from '@/components/popups/Popup';

import useHover from '@/hooks/useHover';

import ReplySVG from '@/assets/icons/Reply.svg';

import { IDataReplyTo } from '../../../../types/tweets';

import styles from './WidgetButton.module.css'

interface IButtonReply {
  replies: number;
  replyToId: number;
  replyTo: IDataReplyTo | null
}

const ButtonReply: FC<IButtonReply> = ({ replies, replyToId, replyTo }) => {
  /* TODO replyTo */
  const theme = useTheme();
  const ref = useRef(null);
  const isHovering = useHover(ref)

  const [isReplyPopupOpen, setReplyPopupOpen] = useState(false);

  const onClickReply = () => { setReplyPopupOpen(true) };
  const onSubmitReply = () => { setReplyPopupOpen(false) };

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
        Reply
      </Box>}

      <Button onClick={onClickReply} className={styles['button']}>

        <Box sx={{ display: 'flex', stroke: theme.palette.buttonWidget?.main }}>
          <ReplySVG />
        </Box>

        <Typography variant="h5" fontWeight={500} color="buttonWidget.main">
          {replies}
        </Typography>

      </Button>

      {isReplyPopupOpen && (
        <Popup
          sx={{ minWidth: { sx: 0, sm: '600px' } }}
          title="Retweet"
          openPopup={isReplyPopupOpen}
          setOpenPopup={setReplyPopupOpen}
        >
          <InnerReply replyToId={replyToId} onSubmitReply={onSubmitReply} />
        </Popup>
      )}
    </Container>
  );
};

export default ButtonReply;
