import React, { FC } from 'react';
import { Container } from '@mui/material';
import ButtonLike from './buttons/ButtonLike';
import ButtonViews from './buttons/ButtonViews';
import ButtonRetweet from '@/components/tweets/widgets/buttons/ButtonRetweet';
import ButtonReply from '@/components/tweets/widgets/buttons/ButtonReply';
import ButtonShare from './buttons/ButtonShare';
import { ITweetWidgets } from '@/types/tweets';

const TweetWidgets: FC<ITweetWidgets> = ({
  id,
  likes,
  isLiked,
  isRetweeted,
  replies,
  replyTo,
  retweets,
  retweetTo,
  views,
}) => {

  return (
    <Container
      className='component-tweet-widgets'
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'raw',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <ButtonReply replyTo={replyTo && replyTo} replyToId={id} replies={replies} />

      <ButtonRetweet
        id={id}
        isRetweeted={isRetweeted}
        retweets={retweets}
        retweetTo={retweetTo}
      />
      <ButtonLike id={id} likes={likes} isLiked={isLiked} />
      <ButtonViews
        views={views}
      />
      <ButtonShare id={id} />
    </Container>
  );
};

export default TweetWidgets;
